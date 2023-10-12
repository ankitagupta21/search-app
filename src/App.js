import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, newPrice, star }) => {
          let newPriceNumber = false;
          if (selected === "500" && newPrice < 500) {
            newPriceNumber = true;
          } else if (selected === "1000" && newPrice > 500 && newPrice < 1000) {
            newPriceNumber = true;
          }

          return (
            category === selected || star === Number(selected) || newPriceNumber
          );
        }
      );
    }

    return filteredProducts.map(({ img, title, star, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </>
  );
}

export default App;
