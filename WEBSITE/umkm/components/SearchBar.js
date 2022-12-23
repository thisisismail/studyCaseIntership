import React from "react";
import { ProductsContext } from "../context/products";
import { Input } from "@material-tailwind/react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  const state = React.useContext(ProductsContext);
  const { setProducts } = state;

  const [searchInput, setInputSearch] = React.useState("");
  const [label, setLabel] = React.useState("Cari produk");

  const searchHandler = async () => {
    await fetch(
      `${process.env.imageApiProvider}/search/photos?page=1&query=${searchInput}&client_id=${process.env.searchAccKey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  };

  const inputHandler = (e) => {
    setInputSearch(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <>
      <div className="flex relative broder-2 border-black h-min">
        <Input
          size="lg"
          name="search"
          value={searchInput}
          onChange={(e) => inputHandler(e)}
          label={label}
          variant="standard"
          onKeyPress={(e) => handleKeypress(e)}
          className="opacity-50"
          onFocus={() => setLabel("")}
          onBlur={() => !searchInput && setLabel("Cari produk")}
        />
        <div
          onClick={() => searchHandler()}
          className="cursor-pointer text-lg opacity-50 border-0 flex absolute right-0 bottom-1"
        >
          <BiSearchAlt size={30} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
