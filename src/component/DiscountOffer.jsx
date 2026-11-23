
import { useEffect, useState } from "react";

function getRandomOffer() {
    return (1000 + Math.random() * 500).toFixed(2);
}

function DiscountOffer() {

    const [offerPrice, setOfferPrice] = useState(getRandomOffer());
    const [isChecked, setIsChecked] = useState(false);

    const originalPrice = 2000;

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    };

    // Calculate discount percentage
    const discount = (
        ((originalPrice - Number(offerPrice)) / originalPrice) * 100
    ).toFixed(0);

    useEffect(() => {

        console.log("Called useEffect");

        if (isChecked) {

            const intervalId = setInterval(() => {
                setOfferPrice(getRandomOffer());
            }, 1000);

            // Cleanup function
            return () => {
                clearInterval(intervalId);
                console.log("Interval cleared");
            };
        }

    }, [isChecked]);

    return (
        <div className="container py-5">

            {/* Page Header */}
            <div className="mb-4">

                <span className="badge bg-primary mb-2">
                    REACT HOOKS
                </span>

                <h2 className="fw-bold text-dark">
                    Dynamic Discount Offer
                </h2>

                <p className="text-secondary">
                    Explore how React useEffect manages side effects
                    and dynamically updates application data.
                </p>

            </div>

            {/* Offer Card */}
            <div className="card border-0 shadow rounded-4 overflow-hidden">

                <div className="row g-0">

                    {/* Offer Information */}
                    <div className="col-md-7 p-4 p-lg-5">

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <span className="badge bg-success-subtle text-success p-2">
                                SPECIAL OFFER
                            </span>

                            <span className={`badge ${isChecked ? "bg-success" : "bg-secondary"}`}>
                                {isChecked ? "LIVE" : "INACTIVE"}
                            </span>

                        </div>

                        <h3 className="fw-bold mb-2">
                            Exclusive Product Deal
                        </h3>

                        <p className="text-secondary">
                            Activate the offer to see the price
                            update automatically.
                        </p>

                        {/* Price Information */}
                        <div className="my-4">

                            <p className="text-secondary mb-1">
                                Original Price
                            </p>

                            <h5 className="text-muted text-decoration-line-through">
                                ₹{originalPrice.toLocaleString("en-IN")}
                            </h5>

                            <p className="text-secondary mb-1 mt-3">
                                Current Offer Price
                            </p>

                            <h1 className="fw-bold text-primary">
                                ₹{Number(offerPrice).toLocaleString("en-IN", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </h1>

                            <span className="badge bg-danger mt-2">
                                {discount}% OFF
                            </span>

                        </div>

                        <hr />

                        {/* Checkbox Control */}
                        <div className="form-check form-switch mt-4">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="offerToggle"
                                checked={isChecked}
                                onChange={handleChange}
                            />

                            <label
                                className="form-check-label fw-semibold"
                                htmlFor="offerToggle"
                            >
                                Activate Dynamic Offer
                            </label>

                        </div>

                        <small className="text-secondary d-block mt-2">
                            {isChecked
                                ? "Your offer price is updating every second."
                                : "Activate the checkbox to start the offer."}
                        </small>

                    </div>

                    {/* Offer Status Panel */}
                    <div className="col-md-5 bg-light p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center text-center">

                        <div
                            className={`rounded-circle d-flex justify-content-center align-items-center mb-3 ${
                                isChecked ? "bg-success-subtle text-success" : "bg-secondary-subtle text-secondary"
                            }`}
                            style={{ width: "90px", height: "90px", fontSize: "35px" }}
                        >
                            {isChecked ? "✓" : "%"}
                        </div>

                        <h4 className="fw-bold">
                            {isChecked ? "Offer Activated!" : "Unlock Your Deal"}
                        </h4>

                        <p className="text-secondary small">
                            {isChecked
                                ? "Your discount price is being generated dynamically."
                                : "Enable the offer to discover changing prices."}
                        </p>

                        <div className="card border-0 shadow-sm w-100 mt-3 rounded-3">

                            <div className="card-body">

                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-secondary small">
                                        Offer Status
                                    </span>

                                    <strong className="small">
                                        {isChecked ? "Active" : "Paused"}
                                    </strong>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <span className="text-secondary small">
                                        Discount
                                    </span>

                                    <strong className="text-success">
                                        {discount}%
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* React Concepts */}
            <div className="card border-0 shadow-sm rounded-4 mt-4">

                <div className="card-body p-4">

                    <h5 className="fw-bold mb-3">
                        React Concepts Used
                    </h5>

                    <div className="row g-3">

                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3 h-100">
                                <h6 className="fw-bold text-primary">
                                    useState
                                </h6>
                                <p className="small text-secondary mb-0">
                                    Stores the offer price and checkbox state.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3 h-100">
                                <h6 className="fw-bold text-primary">
                                    useEffect
                                </h6>
                                <p className="small text-secondary mb-0">
                                    Runs the timer when the offer is activated.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3 h-100">
                                <h6 className="fw-bold text-primary">
                                    Cleanup Function
                                </h6>
                                <p className="small text-secondary mb-0">
                                    Clears the interval when the offer is deactivated.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-3 bg-light rounded-3 h-100">
                                <h6 className="fw-bold text-primary">
                                    Derived Values
                                </h6>
                                <p className="small text-secondary mb-0">
                                    Calculates the discount from the current price.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DiscountOffer;
