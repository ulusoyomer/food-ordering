import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/searchModalSlice';
export default configureStore({
	reducer: {
		searchModal: modalReducer,
	},
});
