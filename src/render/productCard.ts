import type { Product } from "../types/product";
import { formatPrice, getFinalPrice } from "../utils/pricing";

export const renderProductCard = (product: Product): string => `
     <article class="card">
        <div class="img_wrapper">
          <img
            class="card_img"
            src="${product.imageUrl}"
            alt="${product.imageAlt}"
            loading="lazy"
            width="400"
            height="300"
          />
        </div>

        <div class="product_info">
          <p class="product_brand">${product.brand}</p>
          <h3 class="product_name">${product.name}</h3>

          <div class="product_price_section">
            <p class="product_price">${formatPrice(getFinalPrice(product))}</p>
            <button class="card_btn" data-product-id="${product.id}" >Add to Cart</button>
          </div>
        </div>
      </article>
    `;
