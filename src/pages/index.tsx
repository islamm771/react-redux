import ProductList from "../components/ProductList";
import { ChangeEvent, useEffect, useState } from "react";
import axiosInstance from "../config/axios.config";
import Dropdown from "../components/Dropdown";
import { useDispatch } from "react-redux";
import { setSort } from "../app/features/SortSlice";
import { useNavigate } from "react-router-dom";

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

const Index = () => {
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
        <>
            <nav className="flex justify-between mt-8">
                <Dropdown title="Categories" data={categories} />
                <select
                    className="text-indigo-500 shadow font-medium rounded-lg text-sm px-4 py-3 inline-flex items-center justify-between w-36 md:w-48 outline-none cursor-pointer"
                    onChange={handleChange}>
                    <option selected disabled value="">Sort By</option>
                    {data.map((item, index) => (
                        <option key={index} value={item.value}>{item.title}</option>
                    ))}
                </select>
            </nav>
            <ProductList />
        </>
    )
}

export default Index