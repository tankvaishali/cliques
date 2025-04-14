import React from 'react';
import { FaPeopleGroup, FaShieldHalved } from 'react-icons/fa6';
import { LiaStarSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

function WhyChoose() {

  let whydata = [
    {
      icon: <FaShieldHalved />,
      name: "Certified Experts",
      pera: "All our professionals are certified, trained, and experienced."
    },
    {
      icon: <FaPeopleGroup />,
      name: "Reliable Services",
      pera: "We ensure timely and top-quality service, every single time."
    },
    {
      icon: <LiaStarSolid />,
      name: "Customer Satisfaction",
      pera: "We prioritize our customers by providing the best experience possible."
    },
  ]

  return (
    <div className="py-4">
      <div className='row w-100 my-5'>
        <div className="col-12 col-lg-6 m-0 p-0 z-0 overflow-hidden position-relative">
          <div className="img_choose w-100" style={{ height: '100%', minHeight: '500px' }}>
            {/* Background image should be added via CSS or inline */}
          </div>

          <div
            className="bg-info px-4 py-2 py-lg-4 p-lg-4 fw-bold profit_cont text-dark position-absolute bottom-0 start-0 w-100"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
            style={{ zIndex: 1 }}
          >
            Connect instantly with top professionals for any service.
            <div className="pera text-white fw-medium py-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, deserunt.
            </div>

            <Link to={"/"} className="text-decoration-none">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text fs-5 fw-medium">Learn More</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="col-12 col-lg-6 m-0 p-lg-5 p-3">
          <div className="h-100 ">
            <div className='widthset mx-auto'>
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Why choose us
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                The Fastest  Service Provider
              </div>
              <div className="pera text-secondary py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco laboris sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco laboris sed
              </div>

              {
                whydata.map((x, i) => {
                  return (
                    <div className="border-bottom border-secondary pb-2  my-3 my-lg-5">
                      <div className="d-flex align-items-center " key={i}>
                        <h1 className="text-info text-decoration-none ">
                          {x.icon}
                        </h1>
                        <h2 className="  ps-2 text-medium pt-1 darkcolor">
                          {x.name}
                        </h2>
                      </div>
                      <div className="text-secondary pera">
                        {x.pera}
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;