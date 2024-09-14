import { useParams } from 'react-router-dom'
import { useGetProductsByCategoryQuery } from '../app/features/ProductsSlice'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../interface'

const CategoryProduct = () => {
    const { category } = useParams()
    const { isLoading, data } = useGetProductsByCategoryQuery({ category })

    if (isLoading) return <h3>Loading...</h3>

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
            {data.products.map((product: IProduct) => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}

export default CategoryProduct