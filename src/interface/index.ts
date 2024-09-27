export interface IProduct {
    id: number,
    title: string,
    price: number,
    sku: string,
    thumbnail: string,
    brand: string,
    category: string,
    description: string,
    stock: number,
    rating: number,
    reviews: { comment: string, rating: number }[],
    discountPercentage: number,
    images: string[]
    qty: number
}

export interface IProductListResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}


export interface ProductListArgs {
    skip: number;
    sortBy: string;
    order: string;
}
export interface SingleProductArgs {
    id: string | undefined;
}

export interface ProductsByCategoryArgs {
    category: string | undefined;
}

export interface ProductsBySearchArgs {
    search: string | undefined;
}