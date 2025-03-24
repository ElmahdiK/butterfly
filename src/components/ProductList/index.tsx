import Product from "../Product";
import "./style.scss";

type ProductListProps = {
  products: {
    name: string;
    url: string;
    image: string;
    price: number;
  }[];
};
export default function ProductList(props: ProductListProps) {
  const { products } = props;

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
