import React from "react";

const Services = () => {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center">Welcome to Airbnb</h1>
        <p className="text-center">
          Discover unique places to stay and things to do.
        </p>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <h4 className="fw-bold">Services in New Delhi →</h4>
        </div>

        <div className="row g-4">
          <div className="col-md-3 ">
            <div className="card border-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661575458815-e25d152f918f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D"
                alt="home"
                className="card-img-top rounded-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="mt-2">
                <div className="fw-semibold">Flat in Gurugram</div>
                <div className="text-muted small">₹30,000 for 2 nights</div>
                <div className="small">⭐ 5.0</div>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card border-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661575458815-e25d152f918f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D"
                alt="home"
                className="card-img-top rounded-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="mt-2">
                <div className="fw-semibold">Flat in Gurugram</div>
                <div className="text-muted small">₹30,000 for 2 nights</div>
                <div className="small">⭐ 5.0</div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661575458815-e25d152f918f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D"
                alt="home"
                className="card-img-top rounded-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="mt-2">
                <div className="fw-semibold">Flat in Gurugram</div>
                <div className="text-muted small">₹30,000 for 2 nights</div>
                <div className="small">⭐ 5.0</div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661575458815-e25d152f918f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D"
                alt="home"
                className="card-img-top rounded-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="mt-2">
                <div className="fw-semibold">Flat in Gurugram</div>
                <div className="text-muted small">₹30,000 for 2 nights</div>
                <div className="small">⭐ 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
