// Create an interface for product list
export interface IProducts {
    productId: number;
    productName: string;
    productCode: string;
    productType: string;
    releaseDate: Date;
    description: string;
    quantity: number;
    price: number;
    starRating: number;
    imageUrl: string;
}
