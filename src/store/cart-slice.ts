import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { LineItem } from '@/types';

// Define a type for the slice state
interface CartState {
  items: LineItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementCartItem: (state, action: PayloadAction<LineItem>) => {
      let found = state.items.find((lineItem: LineItem) => action.payload.product.id == lineItem.product.id);
      if (found) {
        found.quantity = found.quantity + action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    decrementCartItem: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      let found = state.items.find((lineItem: LineItem) => action.payload.productId == lineItem.product.id);
      if (found && found.quantity > 1) {
        found.quantity = found.quantity - action.payload.quantity;
      }
      if (found && found.quantity === 1) {
        state.items.splice(state.items.indexOf(found), 1);
      }
    },
    removeCartItem: (state, action: PayloadAction<{ productId: number }>) => {
      let found = state.items.find((lineItem: LineItem) => action.payload.productId == lineItem.product.id);
      if (found) {
        state.items.splice(state.items.indexOf(found), 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { incrementCartItem, decrementCartItem, removeCartItem, clearCart } = cartSlice.actions;

export const getCartItems = (state: RootState) => state.cart.items;
export const getCartItemsCount = (state: RootState) => {
  return state.cart.items.reduce((total: number, lineItem: LineItem) => total + lineItem.quantity, 0);
};
export const getCartTotal = (state: RootState) => {
  return state.cart.items.reduce(
    (total: number, lineItem: LineItem) => total + lineItem.product.variants[0].price.amount * lineItem.quantity,
    0
  );
};
export const getCartItemQuantity = (state: RootState, productId: number) => {
  let found = state.cart.items.find((lineItem: LineItem) => productId == lineItem.product.id);
  return found ? found.quantity : 0;
};

export default cartSlice.reducer;