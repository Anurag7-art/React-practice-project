
import { useParams, useNavigate } from "react-router-dom";
import { productList } from "../utility/data.js";

function ProductView() {

    const { id } = useParams();
    const navigate = useNavigate();

    // Find the product using the ID from the URL
    const product = productList.find(
        (item) => item.productId.toString() === id
    );

    // Handle invalid product ID
    if (!product) {
        return (
            <>
                <h3>Product Not Found</h3>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/products")}
                >
                    Back to Products
                </button>
            </>
        );
    }

    return (
        <>
            <div className="container mt-4">
                <h2>Product Details</h2>

                <div className="card p-4 mt-3">
                    <h4>{product.productName}</h4>

                    <p><strong>Product ID:</strong> {product.productId}</p>

                    <p><strong>Product Code:</strong> {product.productCode}</p>

                    <p><strong>Price:</strong> ₹{product.price}</p>

                    <p><strong>Category:</strong> {product.category}</p>

                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/products")}
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductView;
