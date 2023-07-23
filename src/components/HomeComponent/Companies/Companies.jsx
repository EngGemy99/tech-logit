import React from "react";
import { images } from "../../../constants";
import MainTitle from "../../../common/MainTitle/MainTitle";
import "./style.scss";
import MotionWrap from "../../../Wrapper/MotionWrap";
function Companies() {
  let data = [
    {
      title: "Superior Designs",
      description:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
      icon: images.iconOne,
      bgIcon: images.iconBg1,
    },
    {
      title: "Superior Designs",
      description:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
      icon: images.iconTwo,

      bgIcon: images.iconBg2,
    },
    {
      title: "Superior Designs",
      description:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
      icon: images.iconThree,
      bgIcon: images.iconBg3,
    },
    {
      title: "Superior Designs",
      description:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
      icon: images.iconFour,
      bgIcon: images.iconBg4,
    },
  ];
  return (
    <div className="companies py-5">
      <MainTitle
        text="Companies choose us because of our "
        coloredText="Quality Services"
      />
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-7 order-sm-last order-lg-first">
            <div className="section">
              {/*//! here data from api //*/}
              {data.map((item, index) => (
                <div className="card mb-3" key={index}>
                  <div className="d-flex gap-1  g-0">
                    <div className="col-md-2">
                      <div
                        style={{
                          backgroundImage: `url(${item.bgIcon})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top center",
                          minHeight: "80px",
                        }}
                        className="img-container text-center "
                      >
                        <img
                          src={item.icon}
                          className="icon"
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 order-sm-first order-lg-last mb-4">
            <img className="w-100" src={images.companies} alt="companies" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Companies);
