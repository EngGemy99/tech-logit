import React, { useState } from "react";
import MotionWrap from "../../../Wrapper/MotionWrap";
import MainTitle from "../../../common/MainTitle/MainTitle";
import { images } from "../../../constants";
import { motion } from "framer-motion";

import "./style.scss";
function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  let items = [
    {
      title: "Landeing Page",
      tag: "Frontend",
      img: images.portfolio,
    },
    {
      title: "Salla Form",
      tag: "Frontend",
      img: images.portfolio,
    },
    {
      title: "Admin Dashboard",
      tag: "React JS",
      img: images.portfolio,
    },
    {
      title: "Saraha App",
      tag: "Backend",
      img: images.portfolio,
    },
    {
      title: "Amazon App",
      tag: "Backend",
      img: images.portfolio,
    },
    {
      title: "Twitter Clone",
      tag: "Backend",
      img: images.portfolio,
    },
    {
      title: "Movie Box",
      tag: "React JS",
      img: images.portfolio,
    },
  ];
  const [data, setData] = useState(items);
  const categories = ["All", "Frontend", "Backend", "React JS"];

  const handleWorkFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (category === "All") {
        setData(items);
      } else {
        setData((prev) => {
          return items.filter((item) => {
            console.log(item.tag === category);
            return item.tag === category;
          });
        });
      }
    }, 500);
  };
  return (
    <div className="portfolio py-5">
      <MainTitle text="Our" coloredText="Portfolio" />
      <div className="container">
        <p className="description text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sit
          blanditiis architecto dolorem earum quos recusandae provident
          excepturi ab quae?
        </p>
        <div className="app__work-filter">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item ${
                activeFilter === item && "item-active"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="row"
        >
          {/*//! put here data from api //*/}
          {data.map((item, index) => (
            <div className={`col-md-6 col-lg-4 mb-4`} key={index}>
              <div className="item text-center">
                <img src={item.img} alt={item.title} className="w-100" />
                <div className="info text-center mb-3">
                  <h5 className="title">{item.tag}</h5>
                  <h6 className="item-desc mx-auto my-2">{item.title}</h6>
                  <button className="item-btn button-animation">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MotionWrap(Portfolio);
