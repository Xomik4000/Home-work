import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import ProductsSection from "./ProductsSection";
import { PRODUCTS } from "../../../data/products";

const PRODUCTS_PER_PAGE = 6;

function Showcase({
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  decreaseCart,
}) {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [applied, setApplied] = useState({
    category: "All",
    priceMin: "",
    priceMax: "",
    colors: [],
  });

  const [sortType, setSortType] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchText), 400);
    return () => clearTimeout(t);
  }, [searchText]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, applied, sortType]);

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

  let sortedProducts = [...filteredProducts];

  if (sortType === "name") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortType === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);

  const safeCurrentPage =
    totalPages === 0 ? 1 : Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const currentProducts = sortedProducts.slice(startIndex, endIndex);

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
          products={currentProducts}
          totalCount={sortedProducts.length}
          sortType={sortType}
          onSortChange={setSortType}
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
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
