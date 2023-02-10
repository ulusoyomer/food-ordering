import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/util/mongodb';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import dbConnect from '@/util/dbConnect';
import bcrypt from 'bcryptjs';
dbConnect();
export const authOptions = {
	// adapter: MongoDBAdapter(clientPromise),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'jsmith',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const { email, password } = credentials;
				const user = User.findOne({ email });
				if (user) {
					return signInUser({ user, password });
				} else {
					throw new Error('Sistemde Kayıtlı Email Bulunamadı');
				}
			},
		}),
	],
	pages: {
		signIn: '/auth/login',
	},
	database: process.env.MONGODB_URI,
	secret: 'secret',
};

const signInUser = async ({ user, password }) => {
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		throw new Error('Parola Yanlış');
	}
	return user;
};

export default NextAuth(authOptions);
