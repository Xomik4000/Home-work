function Sort({ value, onChange }) {
  return (
    <div className='sort'>
      <select
        className='input'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value='relevance'>By relevance</option>
        <option value='name-asc'>By name (A-Z)</option>
        <option value='name-desc'>By name (Z-A)</option>
        <option value='price-asc'>By price (low to high)</option>
        <option value='price-desc'>By price (high to low)</option>
      </select>
    </div>
  );
}

export default Sort;
