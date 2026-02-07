import Sidebar from './SideBar'
import ProductsSection from './ProductsSection'


function Showcase({ favorites, toggleFavorite, cart, addToCart, decreaseCart }) {
    return(
        <section className='container'>
            <div className='shop'>
                    <Sidebar />
                    <ProductsSection 
                        favorites={favorites} 
                        toggleFavorite={toggleFavorite} 
                        cart={cart}
                        addToCart={addToCart}
                        decreaseCart={decreaseCart}
                    />
            </div>
        </section>
    )
}

export default Showcase;