import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import ProductCard from '../components/ProductCard'

const Favourites = () => {
    const { favouriteItems } = useSelector((state: RootState) => state.favourite)
    const renderFavouriteItems = favouriteItems.map(item => (
        <ProductCard key={item.id} product={item} />
    ))


    return (
        <>
            {renderFavouriteItems.length > 0 ? (
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                    {renderFavouriteItems}
                </div>
            ) : (
                <div><h2 className='text-center text-3xl py-8'>No Items In Favourite</h2></div>
            )}
        </>
    )
}

export default Favourites