import { useState } from "react";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import ReviewedProducts from "./ReviewedProducts";
import SeasonSaleBanner from "./SeasonSaleBanner";

function SideBar({ searchText, onSearchChange, filterOptions, onApply }) {
  const [draft, setDraft] = useState({
    category: "All",
    priceMin: "",
    priceMax: "",
    colors: [],
  });

  return (
    <aside className="sidebar">
      <SearchBar value={searchText} onChange={onSearchChange} />
      <Categories
        categories={filterOptions.categories}
        value={draft.category}
        onChange={(cat) => setDraft((prev) => ({ ...prev, category: cat }))}
      />
      <PriceFilter
        minPlaceholder={filterOptions.minPrice}
        maxPlaceholder={filterOptions.maxPrice}
        valueMin={draft.priceMin}
        valueMax={draft.priceMax}
        onChangeMin={(v) => setDraft((prev) => ({ ...prev, priceMin: v }))}
        onChangeMax={(v) => setDraft((prev) => ({ ...prev, priceMax: v }))}
      />
      <ColorFilter
        colors={filterOptions.colors}
        selected={draft.colors}
        onToggleColor={(color) =>
          setDraft((prev) => {
            const has = prev.colors.includes(color);
            return {
              ...prev,
              colors: has
                ? prev.colors.filter((c) => c !== color)
                : [...prev.colors, color],
            };
          })
        }
      />
      <div className="sidebar-item">
        <div className="button-wrapper">
          <button
            className="button"
            type="button"
            onClick={() => onApply(draft)}
          >
            Apply Filter
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>
      <ReviewedProducts />
      <SeasonSaleBanner />
    </aside>
  );
}

export default SideBar;
