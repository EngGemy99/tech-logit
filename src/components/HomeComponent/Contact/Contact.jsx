import React from "react";
import MotionWrap from "../../../Wrapper/MotionWrap";
import { images } from "../../../constants";
import MainTitle from "../../../common/MainTitle/MainTitle";
import "./style.scss";
function Contact() {
  return (
    <div
      className="contact py-5 "
      style={{
        backgroundImage: `url(${images.bg1}), url(${images.bg2})`,
        backgroundSize: "cover",
      }}
    >
      <MainTitle text="What Our" coloredText="Touch" />
      <div className="container">
        <div className="row ">
          <div className="col-lg-5">
            <div className="left">
              <h2> Contact Information</h2>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="contact">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <span className="info">+1012 3456 789</span>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa-solid fa-message"></i>
                    </div>
                    <span className="info">demo@gmail.com</span>
                  </li>
                  <li className="lastli">
                    <div className="icon ">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <span className="info">
                      132 Dartmouth Street Boston, Massachusetts 02156 United
                      States
                    </span>
                  </li>
                </ul>
                <div className="social d-flex align-items-center justify-content-flex-start gap-3">
                  <i className="fa-brands fa-twitter -mb-2 social-icons"></i>
                  <i className="fa-brands fa-instagram -mb-2 social-icons"></i>
                  <i className="fa-brands fa-discord -mb-2 social-icons"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="right">
              <form className="form">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="form-control" id="fname" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" className="form-control" id="lname" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="service">What service do you need?</label>
                    <select className="form-control" id="service">
                      <option value="s1">s1</option>
                      <option value="s2">s2</option>
                      <option value="s3">s3</option>
                      <option value="s4">s4</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="msg">Message</label>
                    <textarea className="form-control" id="msg"></textarea>
                  </div>
                </div>
                <div className="form-group mt-4">
                  <button className="submit submit-animation button-animation">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Contact);
