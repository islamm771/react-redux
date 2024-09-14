import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import CartSlice from './features/CartSlice'
import favouriteSlice from './features/FavouriteSlice'
import { productsApiSlice } from './features/ProductsSlice'

const store = configureStore({
  reducer: {
    cart: CartSlice,
    favourite: favouriteSlice,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApiSlice.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store