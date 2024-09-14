import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface";
import { toast } from "react-toastify";

export interface CartState {
    favouriteItems: IProduct[],
}

export const initialState: CartState = {
    favouriteItems: [],
}


export const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addItemToFav: (state, action: PayloadAction<IProduct>) => {
            state.favouriteItems = addToFav(state.favouriteItems, action.payload)
        },
    }
})

export const { addItemToFav } = favouriteSlice.actions

export default favouriteSlice.reducer


const addToFav = (favouriteItems: IProduct[], product: IProduct) => {
    const exists = favouriteItems.some(item => item.id === product.id);
    toast.success(`${exists ? 'You removed' : 'You added'} ${product.title}`);
    return exists
        ? favouriteItems.filter(item => item.id !== product.id)
        : [...favouriteItems, product];
}