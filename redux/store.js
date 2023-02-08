import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/searchModalSlice';
import cartReducer from './reducers/cartSlice';

export default configureStore({
	reducer: {
		searchModal: modalReducer,
		cart: cartReducer,
	},
});
