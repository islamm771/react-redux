import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import ProductCard from '../components/ProductCard'

const Cart = () => {
    const { cartItems } = useSelector((state: RootState) => state.cart)
    const renderCartItems = cartItems.map(item => (
        // <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className="p-4 rounded-lg" key={item.id}>
        //     <img className="w-full" src={item.thumbnail} alt="" />
        //     <Link to={`/${item.id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline">{item.title}</Link>
        //     <p>{item.price} $</p>
        //     <p><b>Quantity</b>: {item.qty}</p>
        //     <button
        //         className="bg-red-500 text-white rounded-md py-2 mt-2 w-full"
        //         onClick={() => { handleRemoveItem(item) }}
        //     >
        //         Remove from Cart
        //     </button>
        // </div>
        <ProductCard key={item.id} product={item} isProductCart />
    ))


    return (
        <>
            {renderCartItems.length > 0 ? (
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {renderCartItems}
                </div>
            ) : (
                <div><h2 className='text-center text-3xl py-8'>No Items In Cart</h2></div>
            )}
        </>
    )
}

export default Cart