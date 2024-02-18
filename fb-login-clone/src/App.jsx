import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <h5 className="card-title">Log in to Facebook</h5>
              </div>

              <div className="row">
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Email address or phone number"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                ></input>
              </div>

              <div className="row mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                ></input>
              </div>

              <div className="row"></div>

              <div className="row mt-3 ">
                <a href="#" className="btn btn-primary">
                  Log in
                </a>
              </div>

              <div className="row"></div>

              <div className="row mt-2 ">
                <a href="#" className="ms-5 btn btn-success w-75 justify-content-center d-flex">
                  Create new account
                </a>
              </div>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
