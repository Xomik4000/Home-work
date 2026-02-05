function ColorFilter() {
    return (
        <div className="sidebar-item">
            <h4 className="sidebar-title">Colors</h4>
            <div className="sidebar-content">
                <div className="colors">
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="black" name="black" value="black"/>
                        <label for="black" className="color-name">Black</label>
                    </div>
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="blue" name="blue" value="blue"/>
                        <label for="blue" className="color-name">Blue</label>
                    </div>
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="red" name="red" value="red"/>
                        <label for="red" className="color-name">Red</label>
                    </div>
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="yellow" name="yellow" value="yellow"/>
                        <label for="yellow" className="color-name">Yellow</label>
                    </div>
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="green" name="green" value="green"/>
                        <label for="green" className="color-name">Green</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorFilter;