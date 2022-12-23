import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout.js";
import { UserProvider } from "../context/user.js";
import AuthStateChangeProvider from "../context/auth.js";
import { ProductsContextProvider } from "../context/products.js";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthStateChangeProvider>
        <ProductsContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductsContextProvider>
      </AuthStateChangeProvider>
    </UserProvider>
  );
}

export default MyApp;
