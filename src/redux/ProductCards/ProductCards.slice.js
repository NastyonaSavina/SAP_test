import { createSlice } from '@reduxjs/toolkit';
import { fetchProductCards } from './ProductCards.operations';


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const productCardsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProductCards.pending, handlePending)
            .addCase(fetchProductCards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchProductCards.rejected, handleRejected)
    },
});

export const productsReducer = productCardsSlice.reducer;
