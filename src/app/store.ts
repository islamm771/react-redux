import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import CartSlice from './features/CartSlice'
import favouriteSlice from './features/FavouriteSlice'
import SortSlice from './features/SortSlice'
import { productsApiSlice } from './features/ProductsSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage"



const rootReducer = combineReducers({
  sort: SortSlice,
  cart: CartSlice,
  favourite: favouriteSlice,
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
})


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favourite'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(productsApiSlice.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()


export const persistor = persistStore(store)
