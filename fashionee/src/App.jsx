import { useEffect, useState } from "react";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { PRODUCTS } from "./data/products";
import "./App.css";

const LS_KEY = "favorites";
const LS_CART = "cart";

function App() {
  const [page, setPage] = useState("shop");

  const [favorites, setFavorites] = useState([]);

  const [cart, setCart] = useState({})

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setFavorites(parsed);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(favorites));
  }, [favorites]);

    useEffect(() => {
    const raw = localStorage.getItem(LS_CART);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw)
      if (parsed && typeof parsed === "object") setCart(parsed)
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_CART, JSON.stringify(cart))
  })

  const addToCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      next[id] = (next[id] || 0) + 1;
      return next;
    })
  }

  const decreaseCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      if (!next[id]) return next;
      next[id] = next[id] - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    })
  }

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  const goToShop = () => setPage("shop");
  const goToCart = () => setPage("cart");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  if (page === "shop") {
    return (
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
    );
  }

  return (
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
  );
}

export default App;
