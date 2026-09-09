export type Cents = number;

export interface Product{
    readonly id: string;
    brand:string;
    name: string;
    priceInCents: Cents;
    discountRate?: number;
    imageUrl: string;
    imageAlt: string;
}

 