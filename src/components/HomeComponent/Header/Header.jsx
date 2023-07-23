import React, { useCallback } from "react";
import { images } from "../../../constants";
import "./style.scss";
import ParticlesContainer from "../ParticlesContainer";
function Header() {
  return (
    <div className="hero">
      <div className="heroparticles" id="heroparticles">
        <ParticlesContainer />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7  col-md-12 position-relative">
            <div className="intro">
              <h2>
                Transform your ideas into reality with our full-service Design
                to Development team.
              </h2>
              <h4>
                Odio venenatis a, non egestas ut ultrices ultrices quis orci
                ipsum eu tellus tempor sed amet mauris pellentesque ut vitae
                lorep ipsum.
              </h4>
              <button className="started button-animation">
                Get started
                <i className="fa-solid fa-arrow-right mx-1"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 loadAnimation">
            <img src={images.header} alt="" />
          </div>
        </div>
      </div>
      <div className="left text-center">
        <ul className="social">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </ul>
        <div className="mail">INFO@TECHLOGIT</div>
      </div>
      <div
        className=" right"
        onClick={() => {
          window.scroll({
            top: 750,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        SCROLL DOWN
      </div>
    </div>
  );
}

export default Header;
