import searchIcon from "../../assets/icons/search.svg";

function SerchBar() {
    return (
        <div className="search">
            <label>
                <input type="text" placeholder="Search" className="input search-row"/>
                <img src={searchIcon} alt="search" className="search-icon"/>
            </label>
        </div>
    )
}

export default SerchBar;