import AppLayout from '@/layout/AppLayout';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { SessionProvider } from 'next-auth/react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<AppLayout>
					<Component {...pageProps} />
					<ToastContainer />
				</AppLayout>
			</Provider>
		</SessionProvider>
	);
}
