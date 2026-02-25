function OrderSummary({ cart, products }) {
  const delivery = 16;

  const orderPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    if (!product) return sum;
    return sum + product.price * qty;
  }, 0);

  const total = orderPrice + delivery;

  return (
    <div className="order">
      <h3 className="title">Your Order</h3>
      <div className="order-price-wrapper">
        <div className="price-row">
          <div className="name">Order price</div>
          <div className="price">${orderPrice.toFixed(2)}</div>
        </div>
        <div className="price-row">
          <div className="name">Discount for promo code</div>
          <div>No</div>
        </div>
        <div className="price-row delimiter">
          <div className="name">
            Delivery <span className="additional">(Aug 02 at 16:00)</span>
          </div>
          <div className="price">${delivery}</div>
        </div>
        <div className="price-row total">
          <div className="name">Total</div>
          <div className="price">${total.toFixed(2)}</div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button">Checkout</button>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
}

export default OrderSummary;
