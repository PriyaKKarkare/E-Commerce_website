import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<img
				src={product.image}
				alt={product.name}
				className="product-image"
			/>
			<div className="product-info">
				<h3>{product.name}</h3>
				<p>{product.description}</p>
				<h4>{product.price}</h4>
				<p>Stock: {product.stock}</p>
				<Link
					to={`/products/${product._id}`}
					className="details-button"
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default ProductCard