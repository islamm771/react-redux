import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IProductListResponse, ProductListArgs, ProductsByCategoryArgs, ProductsBySearchArgs, SingleProductArgs } from "../../interface";

// Define the API slice with types
export const productsApiSlice = createApi({
    reducerPath: "products",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        getProductList: builder.query<IProductListResponse, ProductListArgs>({
            query: (arg) => ({
                url: `/products?limit=20&skip=${arg.skip}`,
            }),
        }),
        getSingleProduct: builder.query<IProduct, SingleProductArgs>({
            query: (arg) => ({
                url: `/products/${arg.id}`,
            }),
        }),
        getProductsByCategory: builder.query<IProductListResponse, ProductsByCategoryArgs>({
            query: (arg) => ({
                url: `/products/category/${arg.category}`,
            }),
        }),
        getProductsBySearch: builder.query<IProductListResponse, ProductsBySearchArgs>({
            query: (arg) => ({
                url: `/products/search?q=${arg.search}`,
            }),
        }),
    }),
});

// Explicitly type the exported hooks using ReturnType
export const useGetProductListQuery: typeof productsApiSlice.endpoints.getProductList.useQuery = productsApiSlice.endpoints.getProductList.useQuery;
export const useGetSingleProductQuery: typeof productsApiSlice.endpoints.getSingleProduct.useQuery = productsApiSlice.endpoints.getSingleProduct.useQuery;
export const useGetProductsByCategoryQuery: typeof productsApiSlice.endpoints.getProductsByCategory.useQuery = productsApiSlice.endpoints.getProductsByCategory.useQuery;
export const useGetProductsBySearchQuery: typeof productsApiSlice.endpoints.getProductsBySearch.useQuery = productsApiSlice.endpoints.getProductsBySearch.useQuery;
