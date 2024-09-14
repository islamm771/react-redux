import { useParams } from 'react-router-dom'
import { useGetProductsBySearchQuery } from '../app/features/ProductsSlice'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../interface'

const SearchProduct = () => {
    const { search } = useParams()
    const { isLoading, data } = useGetProductsBySearchQuery({ search })

    if (isLoading) return <h3>Loading...</h3>


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
            {data.products.map((product: IProduct) => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}

export default SearchProduct