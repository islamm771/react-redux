import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import CartSlice from './features/CartSlice'
import { productsApiSlice } from './features/ProductsSlice'
// import CounterSlice from './features/CounterSlice'
// import PersonSlice from './features/PersonSlice'
// import ImageSlice from './features/ImageSlice'

const store = configureStore({
  reducer: {
    cart: CartSlice,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    // counter: CounterSlice,
    // person: PersonSlice,
    // image: ImageSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApiSlice.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store