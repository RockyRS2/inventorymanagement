import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Component/Sidebar";

const Stock = () => {
  const [supplierId, setSupplierId] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [outlets, setOutlets] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedOutlet, setSelectedOutlet] = useState("");
  const [stockQuantity, setStockQuantity] = useState(0);

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get("http://localhost:9090/dashboard/allSuppliers");
      if (response.status === 200) {
        setSuppliers(response.data);
      } else {
        console.error("Gagal mengambil daftar supplier");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchProductsBySupplier = async (supplierId) => {
    try {
      const response = await axios.get(`http://localhost:9090/dashboard/allProductBySupplier/${supplierId}`);
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        console.error("Gagal mengambil produk dari supplier");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchOutlets = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/v1/outlet");
      if (response.status === 200) {
        setOutlets(response.data);
      } else {
        console.error("Failed to fetch outlets");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSupplierChange = (e) => {
    const selectedSupplierId = e.target.value;
    setSupplierId(selectedSupplierId);
    fetchProductsBySupplier(selectedSupplierId);
  };

  const handleStockSubmit = async (e) => {
    e.preventDefault();

    const stockData = {
      quantity: stockQuantity,
      product: { id: selectedProduct },
      outlet: { outletId: selectedOutlet }
    };

    try {
      const response = await axios.post("http://localhost:9090/api/v1/stock", stockData);
      console.log("Stock added successfully:", response.data);
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };

  useEffect(() => {
    fetchSuppliers();
    fetchOutlets();
    setSelectedProduct(""); // Initialize selectedProduct
    setSelectedOutlet("");  // Initialize selectedOutlet
  }, []);

  return (
    <>
     <Sidebar />

     <div class="content">
        <div className="container p-5">
        <div>
        <h2>Add Stock</h2>
        <form onSubmit={handleStockSubmit}>
              <div className="mb-3">
                <label htmlFor="supplier" className="form-label">Supplier</label>
                <select
                  name="supplierId"
                  id=""
                  className="form-control"
                  onChange={handleSupplierChange}
                >
                  <option hidden>Select Supplier</option>
                  {suppliers.map((supplier) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.supplierName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="product" className="form-label">Product</label>
                <select
                  name="productId"
                  id=""
                  className="form-control"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option hidden>Select Product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.productName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="outlet" className="form-label">Outlet</label>
                <select
                  name="outletId"
                  id=""
                  className="form-control"
                  value={selectedOutlet}
                  onChange={(e) => setSelectedOutlet(e.target.value)}
                >
                  <option hidden>Select Outlet</option>
                  {outlets.map((outlet) => (
                    <option key={outlet.outletId} value={outlet.outletId}>
                      {outlet.outletName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="stockQuantity" className="form-label">Stock Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="stockQuantity"
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Add Stock</button>
            </form>
      </div>
          </div>
          </div>
    
    </>
  );
};

export default Stock;
