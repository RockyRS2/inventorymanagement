import SidebarUser from "../Component/SidebarUser";

const Bills = () => {
  return (
    <div>
       <SidebarUser />

      <div class="content">
        <div className="container p-5">
          <h1>Bills</h1>

          <div class="card">
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Supplier Name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                  Product Name
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                Stock Need
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <h2>Price:</h2>
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div>
            <br />
            <h2>history bills</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">SupplierNamr</th>
                  <th scope="col">Product name</th>
                  <th scope="col">Stock</th>
                  <th>Status</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td></td>
                  <td></td>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Details
                  </button>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
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

export default Bills;
