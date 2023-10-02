import Sidebar from "../Component/Sidebar";
const DashboardAdmin = () => {
  return (
    <div>
      <div>
        <Sidebar />

        <div class="content">
          <div className="container p-5">
            <div className="row">
              <div className="col-12">
                <h1>Dashboard</h1>
                <div className="d-flex flex-wrap gap-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h1>
                        -
                      </h1>
                    </div>
                  </div>

                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h1>
                        -
                      </h1>
                    </div>
                  </div>

                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h1>
                        -
                      </h1>
                    </div>
                  </div>
                </div>
                <br />
                <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
