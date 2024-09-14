import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../interface"
import axiosInstance from "../../config/axios.config"
import { RootState } from "../store"

export interface ProductState {
    loading: boolean
    data: IProduct[]
    error: unknown
}

const initialState: ProductState = {
    loading: true,
    data: [],
    error: "",
}

export const getProductList = createAsyncThunk("products/getProductList", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const { data } = await axiosInstance.get("/products/category/smartphones")

        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductList.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProductList.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(getProductList.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.payload
        })
    },
})

export const productsSelector = ({ products }: RootState) => products

export default productsSlice.reducer