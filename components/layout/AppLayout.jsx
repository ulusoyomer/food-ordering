import { Provider } from 'react-redux';
import store from 'redux/store';
import Header from '@/components/sections/header/Header';
const AppLayout = ({ children }) => {
	return (
		<Provider store={store}>
			<Header />
			{children}
		</Provider>
	);
};
export default AppLayout;
