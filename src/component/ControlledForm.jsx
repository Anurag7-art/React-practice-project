
import { useState } from "react";
import { categoryList } from "../utility/data";

const initialProduct = {
    productId: "",
    productName: "",
    price: "",
    productCode: "",
    category: "",
};

// Validate individual fields
const validateField = (name, value) => {
    switch (name) {
        case "productId":
            return !value.trim()
                ? "Product ID is required"
                : !Number.isInteger(Number(value)) || Number(value) <= 0
                    ? "Enter a valid positive Product ID"
                    : "";

        case "productName":
            return !value.trim()
                ? "Product name is required"
                : value.trim().length < 3
                    ? "Product name must contain at least 3 characters"
                    : "";

        case "price":
            return !value
                ? "Price is required"
                : !Number.isFinite(Number(value)) || Number(value) <= 0
                    ? "Enter a valid price"
                    : "";

        case "productCode":
            return !value.trim()
                ? "Product code is required"
                : "";

        case "category":
            return !value
                ? "Please select a category"
                : "";

        default:
            return "";
    }
};

// Validate the complete form
const validateProduct = (product) => {
    const newErrors = {};

    Object.keys(product).forEach((field) => {
        const error = validateField(field, product[field]);

        if (error) {
            newErrors[field] = error;
        }
    });

    return newErrors;
};

function ControlledFrom() {

    const [product, setProduct] = useState(initialProduct);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const onHandleChange = (e) => {
        const { name, value } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]: value
        }));

        // Update the error for the changed field
        setErrors((prev) => {
            const updatedErrors = { ...prev };
            const error = validateField(name, value);

            if (error) {
                updatedErrors[name] = error;
            } else {
                delete updatedErrors[name];
            }

            return updatedErrors;
        });

        setSubmitted(false);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateProduct(product);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            console.log("Product Details:", product);

            setSubmitted(true);
        }
    };

    const onHandleReset = () => {
        setProduct(initialProduct);
        setErrors({});
        setSubmitted(false);
    };

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8 col-xl-7">

                    <div className="card border-0 shadow-lg rounded-4">

                        <div className="card-header bg-primary text-white p-4 rounded-top-4">

                            <h4 className="fw-bold mb-1">
                                Add New Product
                            </h4>

                            <p className="mb-0 small opacity-75">
                                Enter product information using controlled inputs.
                            </p>

                        </div>

                        <div className="card-body p-4 p-md-5">

                            {submitted && (
                                <div className="alert alert-success">
                                    Product saved successfully!
                                </div>
                            )}

                            <form onSubmit={onHandleSubmit} noValidate>

                                <div className="row g-4">

                                    <div className="col-md-6">

                                        <label htmlFor="productId"
                                            className="form-label fw-semibold">
                                            Product ID
                                        </label>

                                        <input
                                            type="number"
                                            id="productId"
                                            name="productId"
                                            className={`form-control ${errors.productId ? "is-invalid" : ""}`}
                                            placeholder="Enter product ID"
                                            value={product.productId}
                                            onChange={onHandleChange}
                                        />

                                        <div className="invalid-feedback">
                                            {errors.productId}
                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="productCode"
                                            className="form-label fw-semibold">
                                            Product Code
                                        </label>

                                        <input
                                            type="text"
                                            id="productCode"
                                            name="productCode"
                                            className={`form-control ${errors.productCode ? "is-invalid" : ""}`}
                                            placeholder="Example: P001"
                                            value={product.productCode}
                                            onChange={onHandleChange}
                                        />

                                        <div className="invalid-feedback">
                                            {errors.productCode}
                                        </div>

                                    </div>

                                    <div className="col-12">

                                        <label htmlFor="productName"
                                            className="form-label fw-semibold">
                                            Product Name
                                        </label>

                                        <input
                                            type="text"
                                            id="productName"
                                            name="productName"
                                            className={`form-control ${errors.productName ? "is-invalid" : ""}`}
                                            placeholder="Enter product name"
                                            value={product.productName}
                                            onChange={onHandleChange}
                                        />

                                        <div className="invalid-feedback">
                                            {errors.productName}
                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="price"
                                            className="form-label fw-semibold">
                                            Price (₹)
                                        </label>

                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            min="0"
                                            step="0.01"
                                            className={`form-control ${errors.price ? "is-invalid" : ""}`}
                                            placeholder="Enter product price"
                                            value={product.price}
                                            onChange={onHandleChange}
                                        />

                                        <div className="invalid-feedback">
                                            {errors.price}
                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="category"
                                            className="form-label fw-semibold">
                                            Category
                                        </label>

                                        <select
                                            id="category"
                                            name="category"
                                            className={`form-select ${errors.category ? "is-invalid" : ""}`}
                                            value={product.category}
                                            onChange={onHandleChange}
                                        >

                                            <option value="">
                                                Select Category
                                            </option>

                                            {categoryList.map((cat) => (
                                                <option
                                                    key={cat.id}
                                                    value={cat.id}
                                                >
                                                    {cat.categoryName}
                                                </option>
                                            ))}

                                        </select>

                                        <div className="invalid-feedback">
                                            {errors.category}
                                        </div>

                                    </div>

                                </div>

                                <hr className="my-4 opacity-25" />

                                <div className="d-flex justify-content-end gap-3 flex-wrap">

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary px-4"
                                        onClick={onHandleReset}
                                    >
                                        Reset
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Save Product
                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>

                    <p className="text-center text-muted small mt-3">
                        Built with React useState and controlled components
                    </p>

                </div>
            </div>
        </div>
    );
}

export default ControlledFrom;
