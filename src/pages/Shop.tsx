import ProductLink from "../components/ProductLink"; // Adjust the path as needed
import products from "../../public/data/products.json";

import "../assets/styles/shop.scss";

const Shop = () => {
  return (
    <div className="shop">
      <h1>Top produits recommandés</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductLink key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
