export interface IProduct {
    id: number,
    title: string,
    price: number,
    thumbnail: string,
    brand: string,
    category: string,
    description: string,
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