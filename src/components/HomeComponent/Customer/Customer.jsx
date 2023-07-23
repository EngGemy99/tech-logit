import React from "react";
import Slider from "../../../common/ImageSlider/Slider";
import { images } from "../../../constants";
import MainTitle from "../../../common/MainTitle/MainTitle";
import MotionWrap from "../../../Wrapper/MotionWrap";
function Customer() {
  const data = [
    {
      img: images.review,
      rating: 4,
      description: "this is nice design",
      name: "Ahmed",
      jobTitle: "Frontend Developer",
    },
    {
      img: images.review,
      rating: 2,
      description: "this is nice design",
      name: "Gamal",
      jobTitle: "Backend Developer",
    },
    {
      img: images.review,
      rating: 3,
      description: "this is nice design",
      name: "mohammed",
      jobTitle: "FullStack Developer",
    },
    {
      img: images.review,
      rating: 2.5,
      description: "this is nice design",
      name: "mohammed",
      jobTitle: "FullStack Developer",
    },
    {
      img: images.review,
      rating: 5,
      description: "this is nice design",
      name: "mohammed",
      jobTitle: "FullStack Developer",
    },
    {
      img: images.review,
      rating: 4.5,
      description: "this is nice design",
      name: "mohammed",
      jobTitle: "FullStack Developer",
    },
    {
      img: images.review,
      rating: 3.5,
      description: "this is nice design",
      name: "mohammed",
      jobTitle: "FullStack Developer",
    },
  ];
  return (
    <div
      className="testimonials p-5"
      style={{
        backgroundImage: `url(${images.bg1}), url(${images.bg2})`,
        backgroundSize: "cover",
      }}
    >
      <MainTitle text="What Our" coloredText="Customer Says" />
      <div className="container">
        <Slider data={data} />
      </div>
    </div>
  );
}

export default MotionWrap(Customer);
