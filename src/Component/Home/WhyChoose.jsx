import React from 'react';
import { FaPeopleGroup, FaShieldHalved } from 'react-icons/fa6';
import { LiaStarSolid } from 'react-icons/lia';


function WhyChoose() {
    let whydata=[
        {
            icon:<FaShieldHalved/>,
            name:"Certified Experts",
            pera:"All our professionals are certified, trained, and experienced."
        },
        {
            icon:<FaPeopleGroup/>,
            name:"Reliable Services",
            pera:"We ensure timely and top-quality service, every single time."
        },
        {
            icon:<LiaStarSolid/>,
            name:"Customer Satisfaction",
            pera:"We prioritize our customers by providing the best experience possible."
        },
    ]
  return (
    <div className='row w-100'>
    <div className="col-12 col-lg-6 m-0 p-0">
    <div
                className="h-100 w-100 img_choose d-flex flex-column justify-content-end "
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div
                  className=" z-1 bg-info  p-4 fw-bold profit_cont text-dark"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Instantly connect with top professionals for any service you need.
                <div className="pera text-white fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, deserunt.</div>
               
<button class="learn-more ">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">Learn More</span>
</button>
                </div>
              </div>
    </div>
    <div className="col-12 col-lg-6 m-0 p-5">
<div className="h-100 ">
    <div className='w-75 mx-auto'>
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
  );
}

export default WhyChoose;
