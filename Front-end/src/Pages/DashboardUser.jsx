import SidebarUser from "../Component/SidebarUser";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardUser = () => {

  const [stocks, setStocks] = useState([]);

  const fetchStocksByOutlet = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/v1/stock/all-stock-level");
      if (response.status === 200) {
        setStocks(response.data);
      } else {
        console.error("Failed to fetch stocks");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchStocksByOutlet(); // Fetch stocks for the logged-in outlet
  }, []);


  return (
    <div>
      <SidebarUser />

      <div class="content">
        <div className="container p-5">
          <h1>Dashboard</h1>

          <div>
          <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Outlet</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.product.productName}</td>
                    <td>{stock.outlet.outletName}</td>
                    <td>{stock.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Details Product
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <h4>Bills Id</h4>
                    </li>
                    <li class="list-group-item">
                      <h4>Product Name</h4>
                    </li>
                    <li class="list-group-item">
                      <h4>Description</h4>
                    </li>
                    <li class="list-group-item">
                      <h4>weight</h4>
                    </li>
                    <li class="list-group-item">
                      <h4>total Price</h4>
                    </li>
                    <li class="list-group-item">
                      <h4>Status</h4>
                    </li>
                    <li class="list-group-item">
                      <h4>Date</h4>
                    </li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
