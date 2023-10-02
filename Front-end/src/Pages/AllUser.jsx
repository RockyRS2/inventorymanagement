import React, { useState, useEffect } from "react";
import Sidebar from "../Component/Sidebar";
import { addUser, getAllOutlets } from "../Api/outlet";

const AllUser = () => {
  const [alert, setAlert] = useState(null);

  const [outlets, setOutlets] = useState([]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [outletName, setOutletName] = useState("");
  

  const getAllOutlet = () => {
    getAllOutlets().then((response) => {
      setOutlets(response.data);
      // console.log(response.data)
    })
  }



  const handleAddUser = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
      fullName: fullname,
      address: address,
      phoneNumber: phoneNumber,
      outletName: outletName,
    };

    // console.log(data);

    addUser(data)
      .then((response) => {
        getAllOutlet();
        setTimeout(() => {
          setAlert({
            type: "success",
            message: "Berhasil menambahkan outlet",
          });
        }, 100)
        
      })
      .catch((response) => {
        console.log(response.data);
        setAlert({
          type: "danger",
          message: "Terjadi kesalahan saat menambahkan user.",
        });
      });
  };



  useEffect(() => {
    getAllOutlet();
  }, []);

  return (
    <div>
      <Sidebar />

      <div class="content">
        <div className="container p-5">
          <h1>Add Outlet</h1>
          {alert && (
            <div className={`alert alert-${alert.type}`} role="alert">
              {alert.message}
            </div>
          )}
          <div className="card">
            <div className="card-body">
              <form className="row g-3" onSubmit={handleAddUser}>
                <div className="col-md-6">
                  <label htmlFor="fullname" className="form-label">
                    Account Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Account Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">
                    Account Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>

                  <textarea
                    name="address"
                    id="address"
                    cols="30"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>

                <div className="col-md-6">
                  <label htmlFor="outletName" className="form-label">
                    Outlet Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="outletName"
                    value={outletName}
                    onChange={(e) => setOutletName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Add New Outlet Account
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
                <th scope="col">Outlet Name</th>
                <th scope="col">Adress</th>
                <th scope="col">Account Email</th>
              </tr>
            </thead>
            <tbody>
              {outlets.map((value, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{value.outletName}</td>
                  <td>{value.users.address}</td>
                  <td>{value.users.user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
