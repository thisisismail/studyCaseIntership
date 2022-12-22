import { useRouter } from "next/router";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

const Layout = ({ children }) => {
  return (
    <div className="px-0 min-h-screen border-0 overflow-auto flex flex-col bg-white-smoke">
      <NavBar />
      <div className="h-16"></div>
      <div
        style={{ maxWidth: 1400 }}
        className="mt-8 w-full border-0 border-black flex-grow mx-auto"
      >
        <div>{children}</div>
      </div>
      <div className="mt-40 w-full"></div>
      <Footer />
    </div>
  );
};

export default Layout;
