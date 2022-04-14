import React from "react";
import { useContext } from "react";

import { ProductContext } from "../../context/Products.context";
import ProductCard from "../../components/Products/ProductCard/ProductCard";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
