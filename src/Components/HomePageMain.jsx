import React from "react";
import Slider from "react-slick";
import { useState } from "react";

const HomePageMain = () => {
  const [width, setWidth] = useState(400);

  // React Slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <label className="label-1">success stones</label>
        <label className="label-2">Every success journey</label>
        <label className="label-2">we've encountered.</label>

        <div className="main-grp">
          <img className="main-img" src="images/Mask group.png" alt="mask" />
          <div className="card-1">
            <img className="spark-img" src="images/spark.png" alt="spark" />
            <div className="label-grp-1">
              <label className="card-1-main-label">40%</label>
              <label className="card-1-sub-label">
                Achieved reduction in project execution time by optimising team
                availability
              </label>
            </div>
          </div>
          <div className="card-2">
            <img
              className="rocket-image"
              src="images/rocket.png"
              alt="rocket"
            />
            <div className="label-grp-2">
              <label className="card-2-main-label">10 Days</label>
              <label className="card-2-sub-label">Staff Deployment</label>
            </div>

            <div className="card-3">
              <div className="label-grp-3">
                <div>
                  <label className="card-3-main-label">$0.5 </label>
                  <label className="card-3-main-label-million">Million</label>
                </div>
                <label className="card-3-sub-label">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </label>
              </div>
            </div>
          </div>
          <div className="main-right-container">
            <div
              style={{
                width: width,
                fontSize: 40,
              }}
            >

              {/* implementing carousel using react slick */}
              <Slider {...settings}>
                <div>
                  <label>
                    Enhance fortune 50 company’s insights teams research
                    capabilities
                  </label>
                </div>
                <div>
                  <label>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </label>
                </div>
                <div>
                  <label>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip{" "}
                  </label>
                </div>
              </Slider>
            </div>
            <div className="main-button">
              <label>Explore More </label>
              <img className="right-arrow-img" src="images/arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageMain;
