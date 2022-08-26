import React from "react";
import "./shop.styles.scss";
import { useContext } from "react";
import ProductCard from "../../components/product-card/Product-card.component";

import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <>
            <ProductCard product={product} />
          </>
        );
      })}
    </div>
  );
};

export default Shop;