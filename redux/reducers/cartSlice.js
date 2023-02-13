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
			state.cartItems = [...state.cartItems, action.payload];
			state.piece = state.cartItems.length;
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter((item, index) => {
				if (index !== action.payload) return item;
			});
			state.piece = state.cartItems.length;
		},
		resetCart: (state) => {
			state.cartItems = [];
			state.piece = 0;
		},
	},
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
