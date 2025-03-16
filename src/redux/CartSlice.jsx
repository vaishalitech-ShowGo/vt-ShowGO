import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1, // Default quantity
  pricePerItem: 299.99, // Price of a single ticket
  otherCharges: 75.0, // Additional charges
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
