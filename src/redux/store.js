import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsReducer } from "./ProductCards/ProductCards.slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from "./Cart/cart.slice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const cartPersistConfig = {
  key: 'cartItems',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);
