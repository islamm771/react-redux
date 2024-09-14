import Cart from "./pages/Cart";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom"
import Index from "./pages";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import CategoryProduct from "./pages/CategoryProduct";
import SearchProduct from "./pages/SearchProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Index />} />
        <Route path="/:id" element={<Product />} />
        <Route path="product/:category" element={<CategoryProduct />} />
        <Route path="search/:search" element={<SearchProduct />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App