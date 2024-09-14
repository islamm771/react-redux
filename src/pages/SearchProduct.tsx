import { useParams } from 'react-router-dom'
import { useGetProductsBySearchQuery } from '../app/features/ProductsSlice'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../interface'
import ProductSkeleton from '../components/ProductSkeleton'

const SearchProduct = () => {
    const { search } = useParams()
    const { isLoading, data } = useGetProductsBySearchQuery({ search })

    if (isLoading) return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
        </div>
    )

    if (data) {
        return (
            <>
                {data.products.length ? (<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                    {data.products.map((product: IProduct) => <ProductCard key={product.id} product={product} />)}
                </div>) : <div><h2 className='text-center text-3xl py-8'>Not Found</h2></div>
                }
            </>
        )
    }

    return null;
}

export default SearchProduct