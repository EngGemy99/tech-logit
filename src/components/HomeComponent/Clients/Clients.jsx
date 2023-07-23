import React from "react";
import { images } from "../../../constants";
import MainTitle from "../../../common/MainTitle/MainTitle";
import MotionWrap from "../../../Wrapper/MotionWrap";
import "./style.scss";
function Clients() {
  const data = [
    {
      img: images.Infosys,
    },
    {
      img: images.Red,
    },
    {
      img: images.Zara,
    },
    {
      img: images.amazon,
    },
    {
      img: images.google,
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
      <MainTitle text="Our" coloredText="Clients" />
      <div className="container">
        <div className="row text-center">
          {data.map((item, index) => (
            <div className="col mb-4" key={index}>
              <img src={item.img} alt="brand" className="brandImage" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Clients);
