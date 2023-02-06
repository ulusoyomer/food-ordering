import { Provider } from 'react-redux';
import store from 'redux/store';
import Header from '@/components/sections/header/Header';
import Footer from '../components/sections/Footer';
const AppLayout = ({ children }) => {
	return (
		<Provider store={store}>
			<Header />
			{children}
			<Footer />
		</Provider>
	);
};
export default AppLayout;
