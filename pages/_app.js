import AppLayout from '@/layout/AppLayout';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from 'redux/store';

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</Provider>
	);
}
