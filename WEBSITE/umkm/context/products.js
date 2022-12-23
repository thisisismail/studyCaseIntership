import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsContextProvider = (props) => {
  const setProducts = (products) => {
    setState({ ...state, products: products });
  };

  const initState = {
    products: [],
    setProducts: setProducts,
  };

  const [state, setState] = useState(initState);
  return (
    <ProductsContext.Provider value={state}>
      {props.children}
    </ProductsContext.Provider>
  );
};
