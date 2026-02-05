import SearchBar from "./SearchBar";
import Categories from "./Categories";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import ReviewedProducts from "./ReviewedProducts";
import SeasonSaleBanner from "./SeasonSaleBanner";


function SideBar() {
  return (
    <aside className='sidebar'>
      <SearchBar />
      <Categories />
      <PriceFilter />
      <ColorFilter />
      <div className='sidebar-item'>
        <div className='button-wrapper'>
          <button className='button'>Apply Filter</button>
          <div className='vertical-line'></div>
        </div>
      </div>
      <ReviewedProducts />
      <SeasonSaleBanner />
    </aside>
  );
}

export default SideBar;
