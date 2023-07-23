import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
const Slider = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 700 },
      items: 2,
    },
    small: {
      breakpoint: { max: 700, min: 450 },
      items: 1,
    },
    verysmall: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
    >
      {data.map((item) => (
        <div className="slide-item " key={item.rating}>
          <div className="row g-0">
            <div className="col-md-4 col-4">
              <img className="h-100" src={item.img} alt="" />
            </div>
            <div className="col-md-8 col-8 cardBody">
              <div className="rating">
                <div className="name ">{item.name}</div>
                <div className="jobTitle mb-3">{item.jobTitle}</div>
                {[..."r".repeat(item.rating)].map((item) => (
                  <i
                    className="fa-solid fa-star"
                    style={{
                      color: "#d6c912",
                    }}
                  ></i>
                ))}
              </div>
              <div className="desc">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
