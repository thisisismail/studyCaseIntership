import React from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { ProductsContext } from "../context/products";

const Products = () => {
  const state = React.useContext(ProductsContext);
  const { products } = state;

  const productsList = products?.map((product) => {
    return (
      <div key={product.id}>
        <ProductCard data={product} />
      </div>
    );
  });

  return (
    <>
      <div className="md:hidden mb-4">
        <SearchBar />
      </div>
      <div className="w-max mx-auto">
        <div className="grid grid-cols-2 grid-flow-row gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productsList}
        </div>
      </div>
    </>
  );
};

export default Products;
