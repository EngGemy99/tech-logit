import React from "react";
import "./style.scss";
import { images } from "../../../constants";
import MotionWrap from "../../../Wrapper/MotionWrap";
function About() {
  return (
    <div
      className="about py-5"
      style={{
        backgroundImage: `url(${images.bg1}), url(${images.bg2})`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container my-4 projectWidth">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center w-100 h-100">
              <img src={images.about} alt="about" className="w-100" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="info">
              <h2 className="title ">About Us</h2>
              <p>
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business
              </p>
              <p>
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have.
              </p>
              <button className="about-btn button-animation">About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(About);
