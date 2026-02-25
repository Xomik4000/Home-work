import { useEffect, useState } from "react";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { LS_KEYS, PAGES } from "./constants";
import { PRODUCTS } from "./data/products";

function App() {
  const [page, setPage] = useState(PAGES.SHOP);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem(LS_KEYS.FAVORITES)) || [],
  );

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(LS_KEYS.CART)) || {},
  );

  useEffect(() => {
    localStorage.setItem(LS_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      next[id] = (next[id] || 0) + 1;
      return next;
    });
  };

  const decreaseCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      if (!next[id]) return next;
      next[id] = next[id] - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const goToShop = () => setPage(PAGES.SHOP);
  const goToCart = () => setPage(PAGES.CART);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <>
      {page === PAGES.SHOP ? (
        <Shop
          page={page}
          goToShop={goToShop}
          goToCart={goToCart}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          cart={cart}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          cartCount={cartCount}
        />
      ) : (
        <Cart
          page={page}
          goToShop={goToShop}
          goToCart={goToCart}
          favorites={favorites}
          cart={cart}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          removeFromCart={removeFromCart}
          cartCount={cartCount}
          products={PRODUCTS}
        />
      )}
    </>
  );
}

export default App;
