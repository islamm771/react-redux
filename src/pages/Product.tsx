import { Link, useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../app/features/ProductsSlice'
import { FaCartShopping } from 'react-icons/fa6'
import { IProduct } from '../interface'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../app/features/CartSlice'
import { useState } from 'react'

const Product = () => {
    const { id } = useParams()
    const { isLoading, data } = useGetSingleProductQuery({ id })
    const [productImage, setProductImage] = useState(data?.images[0])
    const dispatch = useDispatch()
    const handleAddToCart = (product: IProduct) => {
        dispatch(addItemToCart(product));
    }

    if (isLoading) {
        return <h3>Loading ...</h3>
    }


    if (data) {
        return (
            <div className='py-16'>
                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <div>
                            <img className='w-[600px]' src={productImage ? productImage : data.images[0]} alt="" />
                        </div>
                        <ul className='flex gap-2 mt-4'>
                            {data.images.map((image: string, idx: number) => (
                                <li key={idx}>
                                    <img className='w-[100px] border cursor-pointer' src={image} alt="product-img" onClick={() => setProductImage(image)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold mb-3'>{data.title}</h1>
                        <p className="text-gray-600 mb-3">SKU: {data.sku}</p>
                        <div className='flex gap-3 mb-2'>
                            {data.brand && <span className='text-indigo-400 font-semibold text-lg'>{data.brand}</span>}
                            <Link to={`/product/${data.category}`} className='text-indigo-400 font-semibold text-lg'>{data.category}</Link>
                        </div>
                        <div className="mt-2 flex items-center gap-2 mb-4">
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <svg className={`h-6 w-h-6 ${idx < Math.round(data.rating) ? "text-yellow-400" : "text-gray-400"}`}
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" key={idx}>
                                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg font-medium text-gray-900">{data.rating}</p>
                            <p className="text-lg font-medium text-gray-500">({data.reviews.length} Reviews)</p>
                        </div>
                        <p className='text-xl mb-3'>{data.description}</p>
                        <p className='text-xl mb-auto'>Available: {data.stock}</p>

                        <p className='text-2xl mb-3'>Price: {data.price} $</p>
                        <button
                            className="bg-indigo-500 text-white rounded-md py-3 mt-2 w-full text-[18px] font-medium inline-flex items-center justify-center gap-3"
                            onClick={() => { handleAddToCart(data) }}
                        ><FaCartShopping size={20} /> Add to Cart </button>
                    </div>
                </div>
            </div>
        )
    }

    return null;
}

export default Product