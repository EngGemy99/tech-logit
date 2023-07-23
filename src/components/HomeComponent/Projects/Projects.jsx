import React from "react";
import { images } from "../../../constants";
import MotionWrap from "../../../Wrapper/MotionWrap";
import MainTitle from "../../../common/MainTitle/MainTitle";
import "./style.scss";
function Projects() {
  const data = [
    {
      title: "Food Delivery App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: images.project1,
    },
    {
      title: "E-Pay App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: images.project2,
    },
    {
      title: "Podcast App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: images.project3,
    },
    {
      title: "Service Provider App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: images.project4,
    },
  ];
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        background: "#fff",
      }}
    >
      <MainTitle text="Our Latest" coloredText="Projects" />
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="project">
                <img src={item.img} alt={item.title} />
                <div className="bottom">
                  <div className="title">{item.title}</div>
                  <div className="description">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Projects);
