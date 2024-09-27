import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ChangeEvent, useEffect, useState } from "react";
import axiosInstance from "../config/axios.config";
import Dropdown from "../components/Dropdown";
import { useDispatch } from "react-redux";
import { setSort } from "../app/features/SortSlice";

const data = [
    {
        title: "From A to Z",
        value: "title-asc"
    },
    {
        title: "From Z to A",
        value: "title-desc"
    },
    {
        title: "Lowest Price",
        value: "price-asc"
    },
    {
        title: "Hightest Price",
        value: "price-desc"
    },
]

const Layout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();  // useDispatch hook from Redux to dispatch actions
    const [categories, setCategories] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const [sortBy, order] = e.target.value.split("-")
        dispatch(setSort({ sortBy: sortBy, order: order }))
        navigate("/")
    }
    const getCategories = async () => {
        try {
            const { data } = await axiosInstance.get("/products/category-list")
            setCategories(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="container">
            <Navbar />
            <nav className="flex justify-between mt-8 flex-wrap gap-y-4">
                <Dropdown title="Categories" data={categories} />
                <select
                    className="text-indigo-500 shadow font-medium rounded-lg text-sm px-4 py-3 inline-flex items-center justify-between w-48 outline-none cursor-pointer"
                    onChange={handleChange}>
                    <option selected disabled value="">Sort By</option>
                    {data.map((item, index) => (
                        <option key={index} value={item.value}>{item.title}</option>
                    ))}
                </select>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout