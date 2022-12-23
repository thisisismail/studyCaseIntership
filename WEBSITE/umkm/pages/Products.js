import React from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Products = () => {
  return (
    <>
      <div className="md:hidden">
        <SearchBar />
      </div>
      <ProductCard />
    </>
  );
};

export default Products;
