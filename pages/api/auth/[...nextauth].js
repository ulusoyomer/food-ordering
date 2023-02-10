import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/util/mongodb';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import dbConnect from '@/util/dbConnect';
import bcrypt from 'bcryptjs';
import { useSession } from 'next-auth/react';

export const authOptions = {
	//adapter: MongoDBAdapter(clientPromise),
	session: {
		strategy: 'jwt',
	},
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				await dbConnect();
				const { email, password } = credentials;
				const user = await User.findOne({ email });
				if (user) {
					const isMatch = await bcrypt.compare(password, user.password);
					if (!isMatch) {
						throw new Error('Parola Yanlış');
					} else {
						return {
							name: user._id,
							email: user.email,
						};
					}
				} else {
					throw new Error('Kullanıcı Bulunamadı');
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

export default NextAuth(authOptions);
