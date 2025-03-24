import products from "../assets/data/products.json";
import ProductList from "../components/ProductList";
import "../assets/styles/shop.scss";

export default function Shop() {
  return (
    <div className="shop">
      <h1>Top produits recommandés</h1>
      <ProductList products={products} />
    </div>
  );
}
