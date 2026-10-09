import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";


const ProductDetails = () => {
	const { id } = useParams();

	const [product, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const fetchProduct = async () => {
		try {
			setLoading(true);
			const response = await API.get(`/products/${id}`);
			setProducts(response.data.product);

		} catch (error) {
			console.error("Error fetching Product", error);
			setError("Failed to load product");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProduct();
	}, [id]);

	if (loading) {
		return <h2> Loading product...</h2>
	}

	if (error) {
		return <h2> {error}</h2>
	}
	if (!product) {
		return <h2>Product not found</h2>
	}
	return (
		<div className="product-details">
			<img
				src={product.image}
				alt={product.name}
				className="product-details-image"
			/>
			<div className="product-details-info">
				<h1>{product.name}</h1>
				<p>{product.description}</p>
				<h2>{product.price}</h2>
				<p>Category: {product.category}</p>
				<p>Available stock:{product.stock}</p>
				<button>Add to Cart</button>
			</div>
		</div>
	)
}

export default ProductDetails
