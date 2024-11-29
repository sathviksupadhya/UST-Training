import { useState } from "react";

export default function EcomAdd() {
    const [gadgetData, setGadgetData] = useState({
        prodId: 0,
        prodName: "",
        prodCost: 0,
        prodImage: "",
    });
    const [validationErrors, setValidationErrors] = useState({});

    function handleFormSubmit(event) {
        event.preventDefault();

        // Validation checks
        const errors = {};
        if (!gadgetData.prodName) {
            errors.prodName = "Gadget Name is required";
        }
        if (!gadgetData.prodCost || gadgetData.prodCost <= 0) {
            errors.prodCost = "Gadget Cost is required";
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        console.log(gadgetData);
        setValidationErrors({});
        // Add additional logic to save the gadget or reset the form here
    }

    function handleInputChange(event) {
        const { id, value } = event.target;
        setGadgetData((prevData) => ({
            ...prevData,
            [id]: id === "prodCost" ? parseFloat(value) : value,
        }));
    }

    return (
        <>
            <div className="container m-5">
                <div className="card">
                    <form onSubmit={(e) => {handleFormSubmit(e)}}>
                        <div className="card-header bg-success text-light">
                            <h3>ADD A NEW GADGET</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-control-group m-2">
                                <label htmlFor="prodName" className="form-label">Gadget Name:</label>
                                <input
                                    type="text"
                                    id="prodName"
                                    placeholder="Enter Gadget Name"
                                    className="form-control"
                                    value={gadgetData.prodName}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.prodName && <small className="text-danger">{validationErrors.prodName}</small>}
                            </div>
                            <div className="form-control-group m-2">
                                <label htmlFor="prodCost" className="form-label">Gadget Cost:</label>
                                <input
                                    type="number"
                                    id="prodCost"
                                    placeholder="Enter Gadget Cost"
                                    className="form-control"
                                    value={gadgetData.prodCost}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.prodCost && <small className="text-danger">{validationErrors.prodCost}</small>}
                            </div>
                            <div className="form-control-group m-2">
                                <label htmlFor="prodImage" className="form-label">Gadget Image URL:</label>
                                <input
                                    type="text"
                                    id="prodImage"
                                    placeholder="Enter Gadget Image URL"
                                    className="form-control"
                                    value={gadgetData.prodImage}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="card-footer bg-success text-light">
                            <button type="submit" className="btn btn-light text-success">ADD</button>
                            <button type="reset" className="btn btn-light text-success mx-5" onClick={() => setGadgetData({ prodId: 0, prodName: "", prodCost: 0, prodImage: "" })}>
                                CLEAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
