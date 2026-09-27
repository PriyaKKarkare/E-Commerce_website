import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const response = await API.get("/products");
			setProducts(response.data.products);
		} catch (error) {
			console.error("Error fetching products", error);
			setError("Failed to load Products");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [])

	if (loading) {
		return <h2>Loading products...</h2>
	}

	if (error) {
		return <h2>{error}</h2>
	}
	return (
		<div className="products-page">
			<h1>Our Products</h1>

			<div className="products-grid">
				{products.map((product) => (
					<ProductCard
						key={product._id}
						product={product}
					/>
				))}
			</div>

		</div>
	)
}

export default Products
