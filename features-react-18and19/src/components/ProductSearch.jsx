import { useMemo, useState, useTransition } from "react";

const products = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
}));

function slowFilter(list, query) {
  const normalizedQuery = query.toLowerCase();

  for (let i = 0; i < 5000000; i++) {}

  return list.filter((item) =>
    item.name.toLowerCase().includes(normalizedQuery),
  );
}

export default function ProductSearch() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products.slice(0, 50);
    }

    return slowFilter(products, searchQuery).slice(0, 50);
  }, [searchQuery]);

  const handleChange = (event) => {
    const value = event.target.value;

    setInputValue(value);

    startTransition(() => {
      setSearchQuery(value);
    });
  };

  return (
    <div
      style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h2>Product Search</h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search products..."
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          marginBottom: "16px",
          boxSizing: "border-box",
        }}
      />

      {isPending && (
        <p style={{ marginBottom: "12px" }}>Идёт обновление списка...</p>
      )}

      <p>
        Найдено: <strong>{filteredProducts.length}</strong>
      </p>

      <ul style={{ paddingLeft: "20px" }}>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
