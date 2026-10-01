import type { Product } from "../types/product";

const dunkLowRoyal: Product = {
  id: "snk-dunkLowRoyal",
  brand: "Nike",
  name: "Nike Dunk Low 'Game Royal Navy'",
  priceInCents: 8699,
  discountRate:0.1,
  imageUrl: "image/sneakers/nike-dunk-low-game-royal-navy_1.webp",
  imageAlt: "Nike Dunk Low 'Game Royal Navy'",
};

const airJordan: Product = {
  id: "snk-airJordan",
  brand: "Nike",
  name: "Air Jordan 1 Low OG x Travis Scott SP 'Velvet Brown'",
  priceInCents: 60399,
  imageUrl: "image/sneakers/DM7866-202.webp",
  imageAlt: "Air Jordan 1 Low OG x Travis Scott SP 'Velvet Brown'",
};

const jordanDior: Product = {
  id: "snk-jordanDior",
  brand: "Nike",
  name: "Dior x Air Jordan 1 Low",
  priceInCents: 80699,
  imageUrl: "image/sneakers/air-jordan-1-low-dior-CN8608-002_1.webp",
  imageAlt: "Dior x Air Jordan 1 Low",
};

const vloneAirForce: Product = {
  id: "snk-vloneAirForce",
  brand: "Nike",
  name: "Vlone x Air Force 1 High 'Purple Swoosh' Sample",
  priceInCents: 24999,
  imageUrl: "image/sneakers/Vlone_x_Air_Force_1_High_Purple_Swoosh_Sample.webp",
  imageAlt: "Vlone x Air Force 1 High 'Purple Swoosh' Sample",
};

const dunkLowSb: Product = {
  id: "snk-dunkLowSb",
  brand: "Nike",
  name: "Nike Dunk Low SB 'The Predatory Bird'",
  priceInCents: 21999,
  imageUrl: "image/sneakers/nike-sb-dunk-low-why-so-sad-dx5549-400_1.webp",
  imageAlt: "Nike Dunk Low SB 'The Predatory Bird'",
};

const dunkLowPremium: Product = {
  id: "snk-dunkLowPremium",
  brand: "Nike",
  name: "Nike Dunk Low Premium 'Medium Curry'",
  priceInCents: 19499,
  imageUrl: "image/sneakers/nike-dunk-low-medium-curry-DD1390-100_1.webp",
  imageAlt: "Nike Dunk Low Premium 'Medium Curry'",
};

const jordanMidSmoke: Product = {
  id: "snk-jordanMidSmoke",
  brand: "Nike",
  name: "Air Jordan 1 Mid 'Smoke Grey Anthracite'",
  priceInCents: 10799,
  imageUrl:
    "image/sneakers/air-jordan-1-mid-light-smoke-grey-554724-078_1.webp",
  imageAlt: "Air Jordan 1 Mid 'Smoke Grey Anthracite'",
};

const jordanRetro: Product = {
  id: "snk-jordanRetro",
  brand:"Nike",
  name:"Air Jordan 1 Retro High 'Light Smoke Grey'",
  priceInCents: 12155,
  imageUrl:"image/sneakers/air-jordan-1-retro-high-light-smoke-grey-555088-126_1.webp",
  imageAlt:"Air Jordan 1 Retro High 'Light Smoke Grey'",
};

export const products: Product[] = [
  dunkLowRoyal,
  airJordan,
  jordanDior,
  vloneAirForce,
  dunkLowPremium,
  dunkLowSb,
  jordanMidSmoke,
  jordanRetro
];
