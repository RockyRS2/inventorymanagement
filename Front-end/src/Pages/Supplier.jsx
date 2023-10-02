import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../Component/Sidebar";

const Supplier = () => {
  const [suppliers, setSuppliers] = useState([]);

  const [alert, setAlert] = useState(null);

  const [newSupplier, setNewSupplier] = useState({
    supplierName: "",
    supplierEmail: "",
    phoneNumber: "",
    address: "",
  });

  const addSupplier = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9090/dashboard/addSupplier",
        newSupplier
      );

      if (response.status === 200) {
        console.log("Supplier berhasil ditambahkan");
        fetchSuppliers();
        setNewSupplier({
          supplierName: "",
          supplierEmail: "",
          phoneNumber: "",
          address: "",
        });

        setAlert({
          type: "success",
          message: "Supplier berhasil ditambahkan.",
        });
      } else {
        console.error("Gagal menambahkan supplier");
        setAlert({
          type: "danger",
          message: "Gagal menambahkan supplier.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        type: "danger",
        message: "Terjadi kesalahan saat menambahkan supplier.",
      });
    }
  };

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

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <div>
      <Sidebar />

      <div class="content">
        <div className="container p-5">
          <h1>Supplier</h1>

          {alert && (
            <div className={`alert alert-${alert.type}`} role="alert">
              {alert.message}
            </div>
          )}

          <div className="card">
            <div className="card-body">
              <form onSubmit={addSupplier} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="supplierName" className="form-label">
                    Supplier Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="supplierName"
                    aria-describedby="supplierNameHelp"
                    value={newSupplier.supplierName}
                    onChange={(e) =>
                      setNewSupplier({
                        ...newSupplier,
                        supplierName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="supplierEmail" className="form-label">
                    Supplier Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="supplierEmail"
                    aria-describedby="supplierEmailHelp"
                    value={newSupplier.supplierEmail}
                    onChange={(e) =>
                      setNewSupplier({
                        ...newSupplier,
                        supplierEmail: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    aria-describedby="phoneNumberHelp"
                    value={newSupplier.phoneNumber}
                    onChange={(e) =>
                      setNewSupplier({
                        ...newSupplier,
                        phoneNumber: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    aria-describedby="addressHelp"
                    value={newSupplier.address}
                    onChange={(e) =>
                      setNewSupplier({
                        ...newSupplier,
                        address: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr key={supplier.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{supplier.supplierName}</td>
                  <td>{supplier.address}</td>
                  <td>{supplier.phoneNumber}</td>
                  <td>{supplier.supplierEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
