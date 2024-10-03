import { useAppSelector } from '../app/store'
import ProductCard from '../components/ProductCard'

const Cart = () => {
    const { cartItems } = useAppSelector((state) => state.cart)
    const renderCartItems = cartItems.map(item => (
        <ProductCard key={item.id} product={item} isProductCart />
    ))


    return (
        <>
            {renderCartItems.length > 0 ? (
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                    {renderCartItems}
                </div>
            ) : (
                <div><h2 className='text-center text-3xl py-8'>No Items In Cart</h2></div>
            )}
        </>
    )
}

export default Cart