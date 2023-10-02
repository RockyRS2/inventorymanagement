import Sidebar from "../Component/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllStocksInfoAPI } from "../Api/outlet";

const AllOutlet = () => {
  const [stocks, setStocks] = useState([]);

  const getAllStocksInfo = () => {
    getAllStocksInfoAPI().then((response) => {
      setStocks(response.data);
      console.log(response.data)
    });
  };

  useEffect(() => {
    getAllStocksInfo();
  }, []);

  return (
    <div>
      <Sidebar />

      <div class="content">
        <div className="container p-5">
          <div>
            <h1>Stock List</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Outlet Name</th>
                  <th scope="col">Adress</th>
                  <th scope="col">Account Email</th>
                </tr>
              </thead>
              <tbody>
                {/* {stocks !== nulll &&
                  stocks.map((value, index) => (
                    <>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </>
                  ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOutlet;
