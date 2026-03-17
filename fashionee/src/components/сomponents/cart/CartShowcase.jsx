import { useMemo, useState } from "react";
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
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const orderPrice = useMemo(() => {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const product = products.find((p) => p.id === Number(id));
      if (!product) return sum;
      return sum + product.price * qty;
    }, 0);
  }, [cart, products]);

  const discountPercent = isPromoApplied ? 10 : 0;
  const discountAmount = orderPrice * 0.1;
  const delivery = 15;
  const total = orderPrice - (isPromoApplied ? discountAmount : 0) + delivery;

  const handleApplyPromo = () => {
    setIsPromoApplied(promoCode.trim().toLowerCase() === "ilovereact");
  };

  const handleCheckout = () => {
    console.log({
      items: Object.entries(cart).map(([id, qty]) => {
        const product = products.find((p) => p.id === Number(id));

        return {
          id: Number(id),
          name: product?.name,
          price: product?.price,
          quantity: qty,
          total: product ? product.price * qty : 0,
        };
      }),
      promoCode: isPromoApplied ? "ilovereact" : null,
      discountPercent,
      orderPrice,
      delivery,
      total,
    });
  };

  return (
    <section className='container'>
      <div className='cart'>
        <div className='order-wrapper'>
          <CartProductList
            cart={cart}
            products={products}
            addToCart={addToCart}
            decreaseCart={decreaseCart}
            removeFromCart={removeFromCart}
          />
          <OrderSummary
            orderPrice={orderPrice}
            isPromoApplied={isPromoApplied}
            discountAmount={isPromoApplied ? discountAmount : 0}
            delivery={delivery}
            total={total}
            onCheckout={handleCheckout}
          />
        </div>

        <PromoCodeBlock
          promoCode={promoCode}
          onPromoCodeChange={setPromoCode}
          onApplyPromo={handleApplyPromo}
        />
      </div>
    </section>
  );
}

export default CartShowcase;
