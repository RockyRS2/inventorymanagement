import SidebarUser from "../Component/SidebarUser";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9090/dashboard/allusers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <SidebarUser />

      <div class="content">
        <div className="container p-5">
          <h1>Dashboard</h1>
          <div class="d-flex align-items-center">
            <div class="bulet me-3">
              <h1>s</h1>
            </div>
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Details
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-12">
            <div className="d-flex flex-wrap gap-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Outlet Name</h5>
                </div>
              </div>

              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Outlet Address</h5>
                </div>
              </div>

              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Phone Number</h5>
                </div>
              </div>
            </div>
            <br />
          </div>
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
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Fullname
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Outlet Name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Outlet Address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      PhoneNumber
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <br />
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
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
  );
};

export default Profile;
