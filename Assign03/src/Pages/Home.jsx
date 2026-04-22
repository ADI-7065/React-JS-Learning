import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Welcome to Airbnb</h1>
      <p className="text-center">
        Discover unique places to stay and things to do.
      </p>

      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="fw-bold">Popular homes in Gurgaon District →</h4>
      </div>

      <div className="row g-4">
        <div className="col-md-3 ">
          <div className="card border-0">
            <img
              src="https://images.unsplash.com/photo-1596436889106-be35e843f974"
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
              src="https://images.unsplash.com/photo-1596436889106-be35e843f974"
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
              src="https://images.unsplash.com/photo-1596436889106-be35e843f974"
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
              src="https://images.unsplash.com/photo-1596436889106-be35e843f974"
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
  );
};

export default Home;
