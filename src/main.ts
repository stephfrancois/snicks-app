import "./css/style.css";
import { products } from "./data/catalog";
import { renderProductCard } from "./render/productCard";

const grid = document.querySelector<HTMLElement>(".grid_container");

if (grid) {
  grid.innerHTML = products.map(renderProductCard).join("");
}
