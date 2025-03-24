import "./style.scss";

type Product = {
  product: {
    name: string;
    url: string;
    image: string;
    price: number;
  };
};

export default function Product(props: Product) {
  const { product } = props;

  return (
    <a href={product.url} target="_blank" rel="noopener noreferrer">
      <div className="product-item">
        <p>{product.name}</p>
        <img
          src={`/butterfly/images/products/${product.image}`}
          alt={product.name}
        />
        <p className="p-price">{product.price.toFixed(2)} €</p>
      </div>
    </a>
  );
}
