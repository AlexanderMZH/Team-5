import { createSlice } from "@reduxjs/toolkit";

interface cartStorage {
  amount: Number;
  cartData: Object;
}

const initialState: cartStorage = {
  amount: 5,
  cartData: [
    {
      name: "Alex",
      id: 1,
    },
    {
      name: "Nika",
      id: 2,
    },
    {
      name: "Giorgi",
      id: 3,
    },
    {
      name: "Lasha",
      id: 4,
    },
    {
      name: "Zaza",
      id: 5,
    },
  ],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // RemoveItem: (state, action) => {
    //   state.cartData = state.cartData.filter((item) => {
    //     return item.id !== action.payload;
    //   });
    //   state.amount --;
    // },
  },
});

// export const { RemoveItem } = CartSlice.actions;

export default CartSlice.reducer;
