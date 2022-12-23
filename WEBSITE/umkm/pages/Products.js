import React from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
// import { ProductsContext } from "../context/products";

const Products = () => {
  // const state = React.useContext(ProductsContext);
  // const { products } = state;
  return (
    <>
      <div className="md:hidden">
        <SearchBar />
      </div>
      {/* <button onClick={() => console.log(products)}>Data</button> */}
      <ProductCard />
    </>
  );
};

export default Products;
