import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    increaseCount: (state, action) => {
      ++state.cart[action.payload].quantity;
    },
    decreaseCount: (state, action) => {
      --state.cart[action.payload].quantity;
    },
  }
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } = cartSlice.actions;
export default cartSlice.reducer;