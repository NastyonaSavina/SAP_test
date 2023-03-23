import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isModalOpen: false,
  },
  reducers: {
    toggleModalAction: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    addItemToCart: (state, {payload}) => {
      
      state.items.push(payload);
      }
      
    
  },
 
});

export const { toggleModalAction, addItemToCart } = cartSlice.actions;


export const cartReducer = cartSlice.reducer;