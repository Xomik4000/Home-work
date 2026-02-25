import CartProductList from "./CartProductList";
import OrderSummary from "./OrderSummary";
import PromoCodeBlock from "./PromoCodeBlock";

function CartShowcase({
  cart,
  addToCart,
  decreaseCart,
  removeFromCart,
  products,
}) {
  return (
    <section className="container">
      <div className="cart">
        <div className="order-wrapper">
          <CartProductList
            cart={cart}
            products={products}
            addToCart={addToCart}
            decreaseCart={decreaseCart}
            removeFromCart={removeFromCart}
          />
          <OrderSummary cart={cart} products={products} />
        </div>

        <PromoCodeBlock />
      </div>
    </section>
  );
}

export default CartShowcase;
