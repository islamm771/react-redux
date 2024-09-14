import { FaCartShopping } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addItemToCart, removeItemFromCart } from "../app/features/CartSlice"
import { addItemToFav } from "../app/features/FavouriteSlice"
import { RootState } from "../app/store"
import { IProduct } from "../interface"
// import { toast } from "react-toastify"

interface IProps {
  product: IProduct,
  isProductCart?: boolean,
}

const ProductCard = ({ product, isProductCart }: IProps) => {
  const dispatch = useDispatch()
  const { favouriteItems } = useSelector((state: RootState) => state.favourite)
  const handleAddToFav = (product: IProduct) => {
    dispatch(addItemToFav(product));
  }

  const handleAddToCart = (product: IProduct) => {
    dispatch(addItemToCart(product));
  }
  const handleRemoveItem = (item: IProduct) => {
    dispatch(removeItemFromCart(item));
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-72 w-full">
        <Link to={`/${product.id}`}>
          <img className="h-full w-full" src={product.thumbnail} alt="" />
        </Link>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded bg-primary-100 px-2.5 py-1 text-xs font-medium text-white bg-indigo-400"> Up to {product.discountPercentage}% off </span>

          <button type="button" data-tooltip-target="tooltip-add-to-favorites" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleAddToFav(product)}>
            <svg className={`h-5 w-5 ${favouriteItems.find(item => item.id == product.id) ? "fill-red-500 text-red-500" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
            </svg>
          </button>
        </div>

        <Link to={`/${product.id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline">{product.title}</Link>
        <Link to={`/product/${product.category}`} className='text-indigo-400 font-semibold text-lg block'>{product.category}</Link>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg className={`h-4 w-4 ${idx < Math.round(product.rating) ? "text-yellow-400" : "text-gray-400"}`}
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" key={idx}>
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-medium text-gray-900">{product.rating}</p>
          <p className="text-sm font-medium text-gray-500">({product.reviews.length})</p>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
          </li>

          <li className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
          </li>
        </ul>

        {isProductCart && <p className="mt-2 text-lg"> Quantity: {product.qty} </p>}

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900">${product.price}</p>

          {!isProductCart ? (
            <button
              className="bg-indigo-500 text-white rounded-lg py-2.5 px-4 mt-2 w-fit font-medium inline-flex items-center justify-center gap-3"
              onClick={() => { handleAddToCart(product) }}
            > <FaCartShopping size={20} /> Add to Cart</button>
          ) : (
            <button
              className="bg-red-500 text-white rounded-lg py-2.5 px-4 mt-2 w-fit font-medium inline-flex items-center justify-center gap-3"
              onClick={() => { handleRemoveItem(product) }}
            > <FaCartShopping size={20} /> Remove from Cart</button>
          )}

        </div>
      </div>
    </div>
  )
}

export default ProductCard