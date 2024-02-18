import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row h1 fw-bold mb-3 d-flex justify-content-center text-center" style={{color:"#0398fc"}}>facebook</div>
        <div className="row">
          <div className="card custom-card" style={{width:'450px',height:'auto'}}>
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

              

              <div className="row mt-3 ">
                <a href="#" className="btn btn-primary">
                  Log in
                </a>
              </div>

              <div className="row link-info text-center d-flex justify-content-center mb-2 mt-2">Forgotten acount?</div>

              <div className="row">
              <div class="separator">or</div>
              </div>

              <div className="row mt-2 d-flex justify-content-center">
                <a href="#" className="text-center btn btn-success w-75 ">
                  Create new account
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
