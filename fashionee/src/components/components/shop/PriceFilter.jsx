function PriceFilter() {
    return(
        <div class="sidebar-item">
            <h4 class="sidebar-title">Price</h4>
            <div class="sidebar-content">
                <div class="price-bar">
                    <input type="text" placeholder="0" class="input"/>
                    <input type="text" placeholder="200" class="input"/>
                </div>
            </div>
        </div>
    ) 
}

export default PriceFilter;