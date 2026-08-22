interface SneakerProduct{
    id: string;
    brand: string;
    name: string;
    priceInCents: number;
    imageSrc: string;
}

const sneakerObjNike:SneakerProduct ={
    id:"1",
    brand: "Nike",
    name:"Nike Dunk Low 'Game Royal Navy'",
    priceInCents:8699,
    imageSrc:"image/sneakers/nike-dunk-low-game-royal-navy_1.webp"
}

const model= "Nike Dunk Low 'Game Royal Navy'";
const brand = "Nike";
const price = 86;
const discount = 10;
const finalPrice: number= price - discount;

let cartQuantity:number = 0;
cartQuantity++; 
