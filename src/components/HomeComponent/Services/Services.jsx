import React from "react";
import MainTitle from "../../../common/MainTitle/MainTitle";
import { images } from "../../../constants";
import "./style.scss";
import MotionWrap from "../../../Wrapper/MotionWrap";
function Services() {
  const data = [
    {
      title: "Mobile Apps Development",
      description:
        "We follow the first and foremost priority of gathering requirements",
      img: images.service1,
    },
    {
      title: "Mobile Apps Development",
      description:
        "We follow the first and foremost priority of gathering requirements",
      img: images.service2,
    },
    {
      title: "Mobile Apps Development",
      description:
        "We follow the first and foremost priority of gathering requirements",
      img: images.service3,
    },
    {
      title: "Mobile Apps Development",
      description:
        "We follow the first and foremost priority of gathering requirements",
      img: images.service4,
    },
    {
      title: "Mobile Apps Development",
      description:
        "We follow the first and foremost priority of gathering requirements",
      img: images.service5,
    },
    {
      title: "Mobile Apps Development",
      description:
        "We follow the first and foremost priority of gathering requirements",
      img: images.service6,
    },
  ];
  return (
    <div
      className="container"
      style={{
        position: "relative",
        zIndex: 1,
        background: "#fff",
      }}
    >
      <div className="">
        <MainTitle text="Our" coloredText="Services" />
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="service">
                <img src={item.img} alt={item.title} />

                <div className="bottom">
                  <h2 className="title">{item.title}</h2>
                  <p className="description">{item.description}</p>
                  <button className="button-animation">
                    Show more
                    <i className="fa-solid fa-arrow-right mx-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Services);
