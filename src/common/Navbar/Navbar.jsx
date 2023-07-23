import React, { useEffect, useState } from "react";

import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { images } from "../../constants";
function Navbar() {
  const Links = [
    "Home",
    "Services",
    "Our Project",
    "How It Work",
    "Contact Us",
  ];
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let nav = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        console.log(isActive);
        nav.classList.add("active");
      } else {
        console.log("navbar false");
        nav.classList.remove("active");
      }
    };

    if (isActive === false) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);
  return (
    <nav
      className={` ${
        isActive
          ? "active navbar navbar-expand-lg navbar-light"
          : "navbar navbar-expand-lg navbar-light"
      } `}
      id="navbar"
    >
      <div className="container">
        <div className="d-flex mobile-nav">
          <Link className="navbar-brand" to="/">
            <img src={images.logo} alt="logo" />
          </Link>
          <div className="left d-flex align-items-center justify-content-space-between">
            <Link className="nav-link  d-lg-none request px-2" href="#">
              <span className="me-3">Get A Quote</span>
            </Link>
            <button
              className="navbar-toggler"
              onClick={handleClick}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span
                className={`${
                  location.pathname !== "/" && "color-main"
                } line line1 d-sm-inline-block d-lg-none`}
              ></span>
              <span
                className={`${
                  location.pathname !== "/" && "color-main"
                } line line2 d-sm-inline-block d-lg-none`}
              ></span>
              <span
                className={`${
                  location.pathname !== "/" && "color-main"
                } line line3 d-sm-inline-block d-lg-none`}
              ></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4 ${location.pathname === "/" && "active"} `}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4  ${
                  location.pathname === "/services" && "active"
                }`}
                to="/services"
              >
                Services
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4 ${
                  location.pathname === "/SingleProduct" && "active"
                } `}
                to="/SingleProduct"
              >
                Our Projects
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4`}
                to="#"
              >
                How it Work
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4`}
                to="#"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item mob">
              <Link
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4`}
                to="#"
              >
                Login
              </Link>
            </li>
            <li className="nav-item mob signupBorder">
              <Link className={` nav-link left`} to="#">
                <span> Sign up</span>
              </Link>
            </li>
          </ul>
          <ul className="d-flex navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item desk">
              <a
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link login`}
                href="#"
              >
                Log in
              </a>
            </li>
            <li className="nav-item desk ms-lg-3">
              <a
                className={`${
                  location.pathname === "/" ? "text-white " : "text-main"
                } nav-link signup`}
                href="#"
              >
                Sign Up
              </a>
            </li>
            <li className="nav-item desk ms-lg-3 ">
              <a className="nav-link request px-2" href="#">
                <span className="me-3">
                  Request a Service
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
