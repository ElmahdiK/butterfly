import "./style.scss";

interface ProductListProps {
  product: {
    name: string;
    url: string;
    image: string;
    price: number;
  };
}

const ProductList = (props: ProductListProps) => {
  const { product } = props;
  return (
    <div className="product-item">
      <a href={product.url} target="_blank" rel="noopener noreferrer">
        <img src={`/butterfly/img/products/${product.image}`} alt={product.name} />
      </a>
      <p>{product.name}</p>
      <span>{product.price} €</span>
    </div>
  );
};

export default ProductList;
