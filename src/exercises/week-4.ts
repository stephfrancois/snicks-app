import { getFinalPrice } from "../utils/pricing";
import { products } from "../data/catalog";
import type { Product } from "../types/product";

// 1. Définis le type
type Cents = number;
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

// 2. Écris une fonction qui décrit chaque statut en français

// function describeStatus(status: OrderStatus): string {
//   switch (status) {
//     case "pending":
//       return "En attente";
//     case "shipped":
//       return "Expédié";
//     case "delivered":
//       return "Livré";
//     case "cancelled":
//       return "Annulé";
//     default:
//       const _exhaustive: never = status;
//       return _exhaustive;
//   }
// }

// // 3. Écris une fonction qui vérifie si une transition est valide.
// function canTransition(from: OrderStatus, to: OrderStatus): boolean {
//   if (from === "pending" && to === "shipped") return true;

//   if (from === "shipped" && to === "delivered") return true;
//   return false;
// }

// 4.4 - Interfaces TypeScript
//  ---- Creation interface de produit ----
// interface Product {
//   readonly id: string;
//   brand: string;
//   name: string;
//   priceInCents: Cents;
//   discountRate?: number;
// }

export interface Order {
  readonly id: string;
  status: OrderStatus;
  items: Product[];
}

// const dunk: Product = {
//   id: "snk-dunk",
//   brand: "Nike",
//   name: "Nike Dunk Low 'Game royal Navy'",
//   priceInCents: 8699,
// };

// console.log(canTransition("pending", "shipped"));
// console.log(canTransition("delivered", "pending"));
// console.log(canTransition("cancelled", "shipped"));
// console.log(describeStatus('pending'));
// console.log(dunk);

// 4.1 & 4.2 - Fonctions flechés & Fonction Pures
//--- Explicite Arrow function
const formatPrice = (cents: Cents): string => {
  return `$${(cents / 100).toFixed(2)}`;
};

console.log(` The price is: ${formatPrice(63078)} CAD`);

//--- Implicite Arrow function witout braket and keyword return
const formPrice = (cent: Cents): string => `$${(cent / 100).toFixed(2)} CAD`;
console.log(formPrice(1509));

//--- Ne jamais utiliser "Arrow functions" mais un "Regular Function" dans une methode
// const cart = {
//   items: [],
//   addItem:function(){
//     console.log(this.items); //this = cart ==> this.item = cart.items
//   }
// } 

// const cart = {
//   items: [],
//   addItem:()=>{
//     console.log(this.items); //Error
//   }
// }

const firstProduct = products[0];
if(firstProduct){
  const finalFirstProductPrice = getFinalPrice(firstProduct);
  console.log(`Le prix final ${firstProduct.name} est de ${formatPrice(finalFirstProductPrice)}`)
}
