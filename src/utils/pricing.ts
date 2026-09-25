import type { Cents, Product } from "../types/product";

export const formatPrice = (cents: Cents): string =>
  `$${(cents / 100).toFixed(2)}`;

export const applyDiscount = (amountInCents: Cents, rate: number): Cents =>
  Math.round(amountInCents * rate);

export const calculateTax = (amountInCents: Cents, rate: number): Cents =>
  Math.round(amountInCents * rate);

export const addDiscount = (product: Product, rate:number):Product => ({
  ...product,
  discountRate: rate
});

export const getFinalPrice = (product:Product):Cents =>{
  if (product.discountRate !== undefined){
      const discountInCents:Cents = applyDiscount(product.priceInCents, product.discountRate); 
      return product.priceInCents - discountInCents;
  }
  return product.priceInCents;
}