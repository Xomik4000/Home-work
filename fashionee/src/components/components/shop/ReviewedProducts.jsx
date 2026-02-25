import { PRODUCTS } from "../../../data/products";

const REVIEWED_IDS = [6, 5, 1];

function ReviewedProducts() {
  const reviewed = REVIEWED_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id),
  ).filter(Boolean);

  return (
    <div className="sidebar-item">
      <h4 className="sidebar-title">Reviewed By You</h4>
      <div className="sidebar-content">
        <div className="reviewed-products">
          {reviewed.map((p) => (
            <div className="product" key={p.id}>
              <div className="image">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="info">
                <p className="name">{p.name}</p>
                <div className="price">
                  <div className="current-price">${p.price}</div>
                  {p.oldPrice != null && (
                    <div className="old-price">${p.oldPrice}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewedProducts;
