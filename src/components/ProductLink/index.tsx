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
    <a href={product.url} target="_blank" rel="noopener noreferrer">
      <div className="product-item">
        <p>{product.name}</p>
        <img
          src={`/butterfly/img/products/${product.image}`}
          alt={product.name}
        />
        <p>{product.price} €</p>
      </div>
    </a>
  );
};

export default ProductList;
