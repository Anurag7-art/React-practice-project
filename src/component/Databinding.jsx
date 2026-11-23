
import { useState } from "react";

function Databinding() {

    const [fullName, setFullName] = useState("Anurag Shindhe");
    const [submittedName, setSubmittedName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFullName(e.target.value);
        setError("");
        setSuccess(false);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullName.trim()) {
            setError("Please enter your full name.");
            setSuccess(false);
            return;
        }

        setSubmittedName(fullName.trim());
        setSuccess(true);
        setError("");
    };

    // Reset form
    const handleReset = () => {
        setFullName("");
        setSubmittedName("");
        setError("");
        setSuccess(false);
    };

    return (
        <div className="container py-5">

            {/* Page Header */}
            <div className="mb-4">
                <span className="badge bg-primary mb-2">
                    REACT FUNDAMENTALS
                </span>

                <h2 className="fw-bold text-dark">
                    Data Binding
                </h2>

                <p className="text-secondary">
                    Understand how React connects user input
                    with application state.
                </p>
            </div>

            {/* Main Card */}
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                <div className="row g-0">

                    {/* Form Section */}
                    <div className="col-md-7 p-4 p-lg-5">

                        <h4 className="fw-bold mb-2">
                            Profile Information
                        </h4>

                        <p className="text-secondary mb-4">
                            Update your name and see the changes instantly.
                        </p>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">

                                <label
                                    htmlFor="fullName"
                                    className="form-label fw-semibold"
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="fullName"
                                    className={`form-control form-control-lg ${
                                        error ? "is-invalid" : ""
                                    }`}
                                    placeholder="Enter your full name"
                                    value={fullName}
                                    onChange={handleChange}
                                    maxLength={50}
                                />

                                {error && (
                                    <div className="invalid-feedback">
                                        {error}
                                    </div>
                                )}

                                <div className="d-flex justify-content-between mt-2">
                                    <small className="text-muted">
                                        Live input binding
                                    </small>

                                    <small className="text-muted">
                                        {fullName.length}/50 characters
                                    </small>
                                </div>

                            </div>

                            <div className="d-flex gap-2 mt-4">

                                <button
                                    type="submit"
                                    className="btn btn-primary px-4"
                                >
                                    Submit Profile
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-outline-secondary px-4"
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>

                            </div>

                        </form>

                    </div>

                    {/* Live Preview Section */}
                    <div className="col-md-5 bg-light p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center text-center">

                        <span className="badge bg-primary-subtle text-primary mb-4">
                            LIVE PREVIEW
                        </span>

                        <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold mb-3"
                            style={{ width: "80px", height: "80px", fontSize: "30px" }}
                        >
                            {fullName.trim().charAt(0).toUpperCase() || "?"}
                        </div>

                        <h4 className="fw-bold text-dark">
                            {fullName || "Your Name"}
                        </h4>

                        <p className="text-secondary small">
                            {fullName
                                ? "Your profile updates automatically."
                                : "Start typing to preview your profile."}
                        </p>

                        <hr className="w-100" />

                        <div className="d-flex justify-content-between w-100">
                            <span className="text-secondary small">
                                Current Status
                            </span>

                            <span className="badge bg-success">
                                {fullName.trim() ? "Editing" : "Empty"}
                            </span>
                        </div>

                    </div>

                </div>
            </div>

            {/* Success Message */}
            {success && (
                <div className="alert alert-success mt-4 shadow-sm">
                    <h6 className="alert-heading fw-bold">
                        Profile submitted successfully!
                    </h6>

                    <p className="mb-0">
                        Welcome, {submittedName}.
                    </p>
                </div>
            )}

            {/* Concept Explanation */}
            <div className="card border-0 shadow-sm rounded-4 mt-4 p-4">

                <h5 className="fw-bold">
                    How Data Binding Works
                </h5>

                <p className="text-secondary mb-3">
                    React stores your input in state. Whenever
                    the state changes, React updates the UI.
                </p>

                <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">

                    <span className="badge bg-primary p-2">
                        User Input
                    </span>

                    <span className="text-secondary">→</span>

                    <span className="badge bg-info text-dark p-2">
                        useState
                    </span>

                    <span className="text-secondary">→</span>

                    <span className="badge bg-success p-2">
                        UI Update
                    </span>

                </div>

            </div>

        </div>
    );
}

export default Databinding;
