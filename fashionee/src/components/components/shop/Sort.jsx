function Sort({ value, onChange }) {
  return (
    <div className="sort">
      <select
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="relevance">By relevance</option>
        <option value="name">By name</option>
        <option value="price">By price</option>
      </select>
    </div>
  );
}

export default Sort;
