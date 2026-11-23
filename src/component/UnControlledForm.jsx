
import { useRef } from "react";

function UnControlledForm() {

    const productIdref = useRef(null);
    const productNameref = useRef(null);
    const productpriceref = useRef(null);
    const productcodeIdref = useRef(null);
    const productcategory = useRef(null);

    const onHandleSubmit = (e) => {

        e.preventDefault();

        const product = {
            productId: productIdref.current.value,
            productName: productNameref.current.value,
            price: productpriceref.current.value,
            productCode: productcodeIdref.current.value,
            category: productcategory.current.value
        };

        console.log("Product Details:", product);

        alert("Product submitted successfully!");

        e.target.reset();
    };

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8 col-xl-7">

                    <div className="card border-0 shadow-lg rounded-4">

                        <div className="card-header bg-dark text-white p-4 rounded-top-4">

                            <h4 className="fw-bold mb-1">
                                Product Registration
                            </h4>

                            <p className="mb-0 small opacity-75">
                                Enter product details using uncontrolled inputs.
                            </p>

                        </div>

                        <div className="card-body p-4 p-md-5">

                            <form onSubmit={onHandleSubmit}>

                                <div className="row g-4">

                                    <div className="col-md-6">

                                        <label htmlFor="unProductId"
                                            className="form-label fw-semibold">
                                            Product ID
                                        </label>

                                        <input
                                            type="number"
                                            id="unProductId"
                                            className="form-control"
                                            placeholder="Enter product ID"
                                            ref={productIdref}
                                            min="1"
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="unProductCode"
                                            className="form-label fw-semibold">
                                            Product Code
                                        </label>

                                        <input
                                            type="text"
                                            id="unProductCode"
                                            className="form-control"
                                            placeholder="Example: P001"
                                            ref={productcodeIdref}
                                            required
                                        />

                                    </div>

                                    <div className="col-12">

                                        <label htmlFor="unProductName"
                                            className="form-label fw-semibold">
                                            Product Name
                                        </label>

                                        <input
                                            type="text"
                                            id="unProductName"
                                            className="form-control"
                                            placeholder="Enter product name"
                                            ref={productNameref}
                                            minLength="3"
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="unPrice"
                                            className="form-label fw-semibold">
                                            Price (₹)
                                        </label>

                                        <input
                                            type="number"
                                            id="unPrice"
                                            className="form-control"
                                            placeholder="Enter product price"
                                            ref={productpriceref}
                                            min="0.01"
                                            step="0.01"
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6">

                                        <label htmlFor="unCategory"
                                            className="form-label fw-semibold">
                                            Category
                                        </label>

                                        <input
                                            type="text"
                                            id="unCategory"
                                            className="form-control"
                                            placeholder="Enter category"
                                            ref={productcategory}
                                            required
                                        />

                                    </div>

                                </div>

                                <hr className="my-4 opacity-25" />

                                <div className="d-flex justify-content-end gap-3 flex-wrap">

                                    <button
                                        type="reset"
                                        className="btn btn-outline-secondary px-4"
                                    >
                                        Reset
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-dark px-4"
                                    >
                                        Submit Product
                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>

                    <p className="text-center text-muted small mt-3">
                        Built with React useRef and uncontrolled components
                    </p>

                </div>
            </div>
        </div>
    );
}

export default UnControlledForm;
