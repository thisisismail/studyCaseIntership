import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout.js";
import { UserProvider } from "../context/user.js";
import AuthStateChangeProvider from "../context/auth.js";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthStateChangeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthStateChangeProvider>
    </UserProvider>
  );
}

export default MyApp;
