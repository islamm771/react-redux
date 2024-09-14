import { IoBagHandle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate()
    const { cartItems } = useSelector((state: RootState) => state.cart)
    const [inputSearch, setInputSearch] = useState("")

    const handleSearch = () => {
        navigate(`/search/${inputSearch}`)
    }
    return (
        <div className="flex items-center py-7">
            <h1 className="text-indigo-500 font-bold text-[30px]">
                <Link to="/" >Home</Link>
            </h1>
            <div className="ml-auto mr-8 relative">
                <input className="border-2 py-2 pl-4 pr-9 rounded-md w-72 block outline-none focus:ring-1 focus:ring-indigo-500"
                    type="text" placeholder="Search ..." onChange={(e) => setInputSearch(e.target.value)} />
                <button className="text-indigo-500 absolute top-0 right-0 h-full w-8" onClick={handleSearch}><FaSearch /></button>
            </div>
            <button
                className="bg-indigo-500 text-white rounded-md py-2 px-4 font-medium flex items-center justify-center gap-2"
                onClick={() => navigate("/cart")}>
                <IoBagHandle size={20} /> Cart({cartItems.length})
            </button>
        </div>
    )
}

export default Navbar