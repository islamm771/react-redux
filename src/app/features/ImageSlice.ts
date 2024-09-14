import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImageState {
    value: boolean
}

const initialState: ImageState = {
    value: false
}


const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        toggleView: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    }
})


export const { toggleView } = imageSlice.actions

export default imageSlice.reducer