import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	piece: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			console.log(action.payload);
			state.cartItems = [...state.cartItems, action.payload];
			state.piece = state.cartItems.length;
		},
		removeFromCart: (state, action) => {
			console.log(action.payload);
			state.cartItems = state.cartItems.filter((item, index) => {
				if (index !== action.payload) return item;
			});
			state.piece = state.cartItems.length;
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
