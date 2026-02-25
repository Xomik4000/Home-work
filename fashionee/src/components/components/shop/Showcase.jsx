import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import ProductsSection from "./ProductsSection";
import { PRODUCTS } from "../../../data/products";

function Showcase({
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  decreaseCart,
}) {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchText), 400);
    return () => clearTimeout(t);
  }, [searchText]);

  const [applied, setApplied] = useState({
    category: "All",
    priceMin: "",
    priceMax: "",
    colors: [],
  });

  const categories = ["All"];
  const colors = [];
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  for (const p of PRODUCTS) {
    if (Array.isArray(p.categories)) {
      for (const c of p.categories) {
        if (!categories.includes(c)) categories.push(c);
      }
    }

    if (p.color && !colors.includes(p.color)) colors.push(p.color);

    if (typeof p.price === "number") {
      if (p.price < minPrice) minPrice = p.price;
      if (p.price > maxPrice) maxPrice = p.price;
    }
  }

  const search = debouncedSearch.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter((p) => {
    if (search && !(p.name || "").toLowerCase().includes(search)) return false;

    if (applied.category !== "All" && !p.categories?.includes(applied.category))
      return false;

    if (applied.colors.length > 0 && !applied.colors.includes(p.color))
      return false;

    const price = Number(p.price) || 0;
    if (applied.priceMin !== "" && price < Number(applied.priceMin))
      return false;
    if (applied.priceMax !== "" && price > Number(applied.priceMax))
      return false;

    return true;
  });

  return (
    <section className="container">
      <div className="shop">
        <Sidebar
          searchText={searchText}
          onSearchChange={setSearchText}
          filterOptions={{
            categories,
            colors,
            minPrice: Number.isFinite(minPrice) ? minPrice : 0,
            maxPrice: Number.isFinite(maxPrice) ? maxPrice : 0,
          }}
          onApply={(draft) => setApplied(draft)}
        />
        <ProductsSection
          products={filteredProducts}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
        />
      </div>
    </section>
  );
}

export default Showcase;
