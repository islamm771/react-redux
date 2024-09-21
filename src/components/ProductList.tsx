import { useState } from "react";
import { useGetProductListQuery } from "../app/features/ProductsSlice";
import { IProduct } from "../interface";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [skip, setSkip] = useState(0)
  const { isLoading, data, error } = useGetProductListQuery({ skip: skip })
  let pages: number = 0;
  if (data) {
    pages = Math.floor(data.total / 20)
    pages = pages + (data.total % 20 ? 1 : 0)
  }

  if (isLoading) return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </div>
  )

  if (error) return <h3>{`${error}`}</h3>

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
    setSkip((page - 1) * 20)
    window.scrollTo(0, 0)
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
    setSkip(skip - 20)
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
    setSkip(skip + 20)
  }

  if (data) {
    return (
      <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.products.map((product: IProduct) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="flex gap-4 md:gap-10 items-center justify-center mt-6">
          <button className="bg-indigo-400 text-white py-1 px-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
          <ul className="flex gap-3">
            {Array.from({ length: pages }).map((_, idx: number) => (
              <li key={idx} className={`border-b-2 ${idx === currentPage - 1 ? 'border-indigo-400' : ''}`}>
                <button onClick={() => handleChangePage(idx + 1)}>{idx + 1}</button>
              </li>
            ))
            }
          </ul>
          <button className="bg-indigo-400 text-white py-1 px-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNext} disabled={currentPage === pages}>Next</button>
        </div >
      </>

    )
  }

  return null;
}

export default ProductList