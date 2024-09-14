import { useParams } from 'react-router-dom'
import { useGetProductsByCategoryQuery } from '../app/features/ProductsSlice'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../interface'
import ProductSkeleton from '../components/ProductSkeleton'

const CategoryProduct = () => {
    const { category } = useParams()
    const { isLoading, data } = useGetProductsByCategoryQuery({ category })

    if (isLoading) return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
        </div>
    )

    if (data) {
        return (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                {data.products.map((product: IProduct) => <ProductCard key={product.id} product={product} />)}
            </div>
        )
    }

    return null;
}

export default CategoryProduct