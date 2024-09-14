import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface";
import { toast } from "react-toastify";

export interface CartState {
    cartItems: IProduct[],
}

export const initialState: CartState = {
    cartItems: [],
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<IProduct>) => {
            state.cartItems = addToCart(state.cartItems, action.payload)
        },

        removeItemFromCart: (state, action: PayloadAction<IProduct>) => {
            state.cartItems = state.cartItems.filter(item => item.id != action.payload.id)
            toast.success(`${action.payload.title} is removed to cart`);
        },
    }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer



function addToCart(cartItems: IProduct[], product: IProduct) {

    const exists = cartItems.find(item => item.id == product.id)
    const index = cartItems.findIndex(item => item.id == product.id)
    if (exists) {
        toast.success(`You added ${cartItems[index].qty + 1} of ${product.title}`);
        return cartItems.map(item => item.id == product.id ? { ...item, qty: item.qty + 1 } : item)
    }

    toast.success(`${product.title} is added to cart`);

    return [...cartItems, { ...product, qty: 1 }]

}