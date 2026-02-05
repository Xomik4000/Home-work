import ProductCard from "./ProductCard";
import leftArrow from "../../assets/icons/left-pagin-arrow.svg";
import rightArrow from "../../assets/icons/right-pagin-arrow.svg";
import { PRODUCTS } from "../../data/products";

function ProductsSection({
  favorites,
  toggleFavorite,
  cart,
  addToCart,
  decreaseCart,
}) {
  return (
    <div className='products-wrapper'>
      <div className='sort-and-count'>
        <p className='products-count'>
          There are <span className='bold'>67</span> products in this category
        </p>
        <div className='sort'>
          <select className='input'>
            <option value='RELEVANCE'>Relevance</option>
            <option value='ASC'>ASC</option>
            <option value='DESC'>DESC</option>
          </select>
        </div>
      </div>

      <div className='products'>
        {PRODUCTS.map((p) => {
          const qty = cart[p.id] || 0;

          return (
            <ProductCard
              key={p.id}
              product={p}
              isFavorite={favorites.includes(p.id)}
              onToggleFavorite={() => toggleFavorite(p.id)}
              qty={qty}
              onAddToCart={() => addToCart(p.id)}
              onDecreaseCart={() => decreaseCart(p.id)}
            />
          );
        })}
      </div>
      <div className='pagination'>
        <div className='button left'>
          <img src={leftArrow} alt='left-pagin-arrow' />
        </div>
        <div className='pages'>
          <div className='page active'>1</div>
          <div className='page'>2</div>
          <div className='page'>3</div>
        </div>
        <div className='button right'>
          <img src={rightArrow} alt='right-pagin-arrow' />
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
