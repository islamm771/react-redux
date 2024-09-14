import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom"
import Cart from "../pages/Cart";
import Index from "../pages";
import Layout from "../pages/Layout";
import Product from "../pages/Product";
import CategoryProduct from "../pages/CategoryProduct";
import SearchProduct from "../pages/SearchProduct";
import Favourites from "../pages/Favourites";



export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={< Layout />} >
            <Route index element={< Index />} />
            < Route path="/:id" element={< Product />} />
            < Route path="product/:category" element={< CategoryProduct />} />
            < Route path="search/:search" element={< SearchProduct />} />
            < Route path="Favourites" element={<Favourites />} />
            < Route path="cart" element={< Cart />} />
        </Route>
    </>
))