import CartProductItem  from './CartProductItem'

function CartProductList({ cart, products, addToCart, decreaseCart, removeFromCart }) {
    const entries = Object.entries(cart);
    if (entries.length === 0) {
        return <div className='product-list'>Корзина пустая</div>
    }

    return (
        <div className='product-list'>
            {entries.map(([id, qty]) => {
                const numericId = Number(id);
                const product = products.find((p) => p.id === numericId)
                
                if (!product) return null;

                return (
                    <CartProductItem
                        key={numericId}
                        product={product}
                        qty={qty}
                        onPlus={() => addToCart(numericId)}
                        onMinus={() => decreaseCart(numericId)}
                        onRemove={() => removeFromCart(numericId)}
                    />
                )
            })}
        </div>
    )
}

export default CartProductList;