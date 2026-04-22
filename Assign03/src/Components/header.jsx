import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container-fluid d-flex justify-content-between align-items-center py-3 px-4 sticky-top bg-white">
        <div className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
            alt="logo"
            height="32"
            className="align-items-center m-3"
          />
        </div>

        <div className="d-flex align-items-center gap-4 fw-semibold">
          <Link to="/" className="text-decoration-none text-dark">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1018/1018675.png"
              alt="Home"
              height={40}
              className="align-items-center m-2 hover-Scale-Animation"
            />
            Homes
          </Link>

          <Link to="/experience" className="text-decoration-none text-dark ">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1514/1514192.png"
              alt="Experiences"
              height={40}
              className="align-items-center m-2 "
            />
            Experiences
          </Link>

          <Link to="/services" className="text-decoration-none text-dark">
            <img
              src="https://cdn-icons-png.flaticon.com/128/16447/16447117.png"
              alt="Services"
              height={40}
              className="align-items-center m-2"
            />
            Services
          </Link>
        </div>

        <div className="d-flex align-items-center gap-3 cursor-pointer">
          <span className="">Become a host</span>

          <button className="btn btn-light rounded-circle border-0 d-flex align-items-center p-2 justify-content-center">
            <FontAwesomeIcon icon={faGlobe} />
          </button>

          <button className="btn btn-light rounded-circle border-0 d-flex align-items-center p-2 justify-content-center">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      <hr className="my-3 opacity-25 shadow-sm" />
    </>
  );
};

export default Navbar;
