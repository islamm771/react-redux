import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApiSlice = createApi({
    reducerPath: 'products',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: builder => ({
        getProductList: builder.query({
            query: (arg) => {
                return {
                    url: `/products?limit=20&skip=${arg.skip}`,
                };
            },
        }),
        getSingleProduct: builder.query({
            query: (arg) => {
                return {
                    url: `/products/${arg.id}`,
                };
            },
        }),
        getProductsByCategory: builder.query({
            query: (arg) => {
                return {
                    url: `/products/category/${arg.category}`,
                };
            },
        }),
        getProductsBySearch: builder.query({
            query: (arg) => {
                return {
                    url: `/products/search?q=${arg.search}`,
                };
            },
        })
    }),
})


export const { useGetProductListQuery, useGetSingleProductQuery, useGetProductsByCategoryQuery, useGetProductsBySearchQuery } = productsApiSlice
