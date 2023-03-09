import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Products from "./components/Products";
import productsItem from "./data/items.json";

function App() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="App">
      <Nav />
      <Hero setSearch={setSearch} />
      <div className=" mx-auto px-12 py-12  gap-8 grid md:grid-cols-4">
        {productsItem
          .filter((item) => item.name.toLowerCase().includes(search))
          .map((product) => (
            <Products {...product} key={product.id} />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
