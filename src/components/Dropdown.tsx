import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface IProps {
    title: string;
    data: string[];
}

const Dropdown = ({ title, data }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle outside click to close the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Add event listener for outside clicks
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-40 md:w-48" ref={dropdownRef}>
            <button
                id="dropdownDefaultButton"
                className="text-indigo-500 shadow font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center justify-between capitalize w-full"
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
            >
                {activeItem ? activeItem : title}
                <svg
                    className="w-2.5 h-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            <div id="dropdown" className={`z-10 ${isOpen ? "block" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow-md mt-2 overflow-x-hidden w-full`}>
                <ul className="text-sm text-gray-700 max-h-64 overflow-y-scroll">
                    {data.map((item, idx) => (
                        <li key={idx}>
                            <Link
                                to={`product/${item}`}
                                className={`block px-4 py-2 ${activeItem === item ? "bg-gray-100" : ""} hover:bg-gray-100 capitalize`}
                                onClick={() => {
                                    setActiveItem(item);
                                    setIsOpen(false); // Close dropdown on selection
                                }}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
