// src/components/ProductAdd.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductAdd() {
  let navigate = useNavigate();
  const [productData, setProductData] = useState({
    productId: 0,
    productName: "",
    productPrice: 0,
    productDescription: "",
    productCategory: "",
  });

  const [productErrorData, setProductErrorData] = useState({
    productName: true,
    productPrice: true,
    productCategory: true,
  });

  function handleFormChange(event) {
    setProductErrorData({
      ...productErrorData,
      [event.target.name]: event.target.validity.valid,
    });

    setProductData({ ...productData, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(productData);
    // Here you can make a POST request to your backend API to save the product
    // Example:
    // fetch('http://localhost:3000/products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(productData),
    // })
    // .then(response => {
    //   if (response.ok) {
    //     navigate("/products"); // Redirect to product list after adding
    //   }
    // })
    // .catch(error => console.error('Error:', error));

    navigate("/products", { state: productData });
  }

  return (
    <div className="container m-5">
      <div className="card">
        <form onSubmit={handleFormSubmit}>
          <div className="card-header bg-primary text-light">
            <h3>ADD A NEW PRODUCT</h3>
          </div>
          <div className="card-body">
            <div className="form-control-group m-1">
              <label htmlFor="pName" className="form-label">
                Product Name:
              </label>
              <input
                type="text"
                id="pName"
                placeholder="Enter Product Name"
                className="form-control"
                required
                name="productName"
                onChange={handleFormChange}
              />
              <div className="text-danger small">
                {productErrorData.productName ? "" : "Product Name is Required!"}
              </div>
            </div>
            <div className="form-control-group m-1">
              <label htmlFor="pPrice" className="form-label">
                Product Price:
              </label>
              <input
                type="number"
                id="pPrice"
                placeholder="Enter Product Price"
                className="form-control"
                required
                name="productPrice"
                onChange={handleFormChange}
              />
              <div className="text-danger small">
                {productErrorData.productPrice ? "" : "Product Price is Required!"}
              </div>
            </div>
            <div className="form-control-group m-1">
              <label htmlFor="pCategory" className="form-label">
                Product Category:
              </label>
              <input
                type="text"
                id="pCategory"
                placeholder="Enter Product Category"
                className="form-control"
                required
                name="productCategory"
                onChange={handleFormChange}
              />
              <div className="text-danger small">
                {productErrorData.productCategory ? "" : "Product Category is Required!"}
              </div>
            </div>
            <div className="form-control-group m-1">
              <label htmlFor="pDescription" className="form-label">
                Product Description:
              </label>
              <textarea
                id="pDescription"
                placeholder="Enter Product Description"
                className="form-control"
                name="productDescription"
                onChange={handleFormChange}
                rows="3"
              />
            </div>
          </div>
          <div className="card-footer bg-primary text-light">
            <button type="submit" className="btn btn-light text-primary">
              ADD
            </button>
            <button type="reset" className="btn btn-light text-primary mx-5">
              CLEAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
