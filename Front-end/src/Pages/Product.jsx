import axios from "axios";
import Sidebar from "../Component/Sidebar";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  deleteProductAPI,
  getProductDetailsAPI,
  updateProductAPI,
} from "../Api/product";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const [image, setImage] = useState(null);
  const [supplier, setSuppliers] = useState(null);
  const [supplierId, setSupplierId] = useState();

  //  =-=-=-=-=-=-=-= DETAILS STATE =-=-=-=-=-=-=-=
  const [show, setShow] = useState(false);

  const [productId, setProductId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  const [detailsProduct, setDetailsProduct] = useState({
    productName: "",
    price: 0,
    description: "",
    weight: 0,
  });

  const handleUpdateChanges = (evt) => {
    const value = evt.target.value;
    setDetailsProduct({
      ...detailsProduct,
      [evt.target.name]: value,
    });
  };

  const handleSubmitEditProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("price", detailsProduct.price);
    formData.append("productName", detailsProduct.productName);
    formData.append("description", detailsProduct.description);
    formData.append("weight", detailsProduct.weight);

    updateProductAPI(formData)
      .then(() => {
        alert("Product updated successfully !");
        fetchProducts();
        setShow(false);
      })
      .catch((err) => {
        alert("Error Occured");
        console.log(err);
      });
  };

  const handleShowProductDetails = (productId) => {
    getProductDetailsAPI(productId)
      .then((response) => {
        let responseData = response.data;
        setProductDetails(response.data);
        setFormValue(responseData);
        setProductId(responseData.id);

        setShow(true);
      })
      .catch((err) => {
        alert("Error Not Found !");
        console.log(err);
      });
  };

  const handleDeleteProduct = (productId) => {
    
      deleteProductAPI(productId).then((response) => {
        fetchProducts();
      }).catch((err) => {
        console.log(err);
        alert("Failed to delete this product !");
      })

    
  };

  const setFormValue = (responseData) => {
    setDetailsProduct({
      productName: responseData.productName,
      price: responseData.price,
      description: responseData.description,
      weight: responseData.weight,
    });
  };

  //  =-=-=-=-=-=-=-= END OF DETAILS STATE =-=-=-=-=-=-=-=

  // fadsfasdfds

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9090/dashboard/allSuppliers"
      );
      if (response.status === 200) {
        setSuppliers(response.data);
      } else {
        console.error("Gagal mengambil daftar supplier");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9090/dashboard/allProduct"
      );
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        console.error("Gagal mengambil data produk");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("weight", weight);
    formData.append("supplier", supplierId);
    formData.append("image", image);

    try {
      const response = await fetch(
        "http://localhost:9090/dashboard/addProduct",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Product saved successfully");
        window.location.reload();
      } else {
        alert("Error Occured !");
        console.error("Error saving products:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  useEffect(() => {
    fetchSuppliers();
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <Sidebar />

        <div class="content">
          <div className="container p-5">
            <h1>product</h1>

            <div class="card">
              <div class="card-body">
                <form className="row g-3" onSubmit={handleFormSubmit}>
                  <div className="col-md-4">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="weight" className="form-label">
                      Weight
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="images" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="images"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="supplier" className="form-label">
                      Supplier
                    </label>

                    <select
                      name="supplierId"
                      id=""
                      className="form-control"
                      onChange={(e) => setSupplierId(e.target.value)}
                    >
                      {supplier != null &&
                        supplier.map((value, index) => (
                          <>
                            <option hidden>Select Supplier</option>
                            <option value={value.id}>
                              {value.supplierName}
                            </option>
                          </>
                        ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <br />

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama Produk</th>
                    <th scope="col">Stok</th>
                    <th scope="col">Nama Supplier</th>
                    <th scope="col">Actions</th>
                    {/* Tampilkan nama supplier */}
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{product.productName}</td>
                      <td>{product.stock}</td>
                      <td>{product.supplier.supplierName}</td>{" "}
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleShowProductDetails(product.id)}
                        >
                          Edit
                        </button>
                        <span className="px-2">|</span>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {productDetails !== null && (
        <>
          <Modal show={show} onHide={() => setShow(false)}>
            <form onSubmit={handleSubmitEditProduct}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div class="mb-3">
                  <label for="productName" class="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="productName"
                    name="productName"
                    value={detailsProduct.productName}
                    onChange={handleUpdateChanges}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="price" class="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    class="form-control"
                    id="price"
                    value={detailsProduct.price}
                    onChange={handleUpdateChanges}
                  />
                </div>
                <div class="mb-3">
                  <label for="weight" class="form-label">
                    Weight
                  </label>
                  <input
                    type="number"
                    name="weight"
                    class="form-control"
                    id="weight"
                    value={detailsProduct.weight}
                    onChange={handleUpdateChanges}
                  />
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows="4"
                    className="form-control"
                    value={detailsProduct.description}
                    onChange={handleUpdateChanges}
                  ></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </>
      )}
    </>
  );
};

export default Product;
