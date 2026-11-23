
import { useNavigate } from "react-router-dom";

function ProductDetail({ product }) {
    const navigate = useNavigate();

    const handleChange = (id) => {
        navigate(`/product-view/${id}`);
    };

    const prod = product;

    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">

                <img
                    src={prod.image}
                    className="card-img-top"
                    alt={prod.productName}
                    style={{ height: "200px", objectFit: "contain" }}
                />

                <div className="card-body d-flex flex-column">

                    <h5 className="card-title">
                        {prod.productName}
                    </h5>

                    <p className="text-muted">
                        {prod.description}
                    </p>

                    <p>⭐ {prod.rating} / 5</p>

                    <h5 className="text-success">
                        ₹{prod.price}
                    </h5>

                    <button
                        className="btn btn-warning mt-auto w-100"
                        onClick={() => handleChange(prod.productId)}
                    >
                        View Product
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;   
