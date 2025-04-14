import React from 'react';
import CountUp from 'react-countup';
import { TiArrowForward } from 'react-icons/ti';

function Aboutus() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="h-100">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                About us
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                We Are Best Services provider
              </div>
              <div className="pera text-secondary py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco laboris sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco laboris sed
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 col-12 lh-lg span fw-bold">
                  <p className="pb-0 mb-0 pb-lg-1">
                    <TiArrowForward className="iconbg me-2 text-light" />
                    Product Quality
                  </p>
                </div>
                <div className="col-md-6 col-12 lh-lg span fw-bold">
                  <p className="pb-0 mb-0 pb-lg-1">
                    <TiArrowForward className="iconbg me-2 text-light" /> 24/7
                    Support
                  </p>
                </div>
                <div className="col-md-6 col-12 lh-lg span fw-bold">
                  <p className="pb-0 mb-0 pb-lg-1">
                    <TiArrowForward className="iconbg me-2 text-light" />Top
                    Manufacturer
                  </p>
                </div>
                <div className="col-md-6 col-12 lh-lg span fw-bold">
                  <p className="pb-0 mb-0 pb-lg-1">
                    <TiArrowForward className="iconbg me-2 text-light" /> Fair
                    Prices
                  </p>
                </div>
                <div className="col-md-6 col-12 lh-lg span fw-bold">
                  <p className="pb-0 mb-0 pb-lg-1">
                    <TiArrowForward className="iconbg me-2 text-light" /> Quick Answer
                  </p>
                </div>
                <div className="col-md-6 col-12 lh-lg span fw-bold">
                  <p className="pb-0 mb-0 pb-lg-1">
                    <TiArrowForward className="iconbg me-2 text-light" /> Popular Service
                  </p>
                </div>
              </div>
              <div>
                <button class="btncss fw-bold mt-2">About Us</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="h-100 position-relative">
              <div style={{ width: "65%" }} className="mx-auto position-relative">
                <img
                  src="https://t7w25cliques.netlify.app/static/media/painting.f74ca14c76c1ef845a0c.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ display: "block", width: "100%" }}
                />
                <div
                  className="  border-top border-4 border-info text-center text-info p-4 position-absolute"
                  style={{
                    width: "90%",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%) translateY(50%)",
                    zIndex: 2,
                    backgroundColor: "var(--dark)"
                  }}
                >
                  <h3 className="text-white">
                    17 Years Experience In Service Provider
                  </h3>
                  {/* <div className='pera'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iste.
        </div> */}
                  <h2>
                    <CountUp end={565} enableScrollSpy={true} separator="" />+
                  </h2>
                  <div>Happy CLients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus