import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk, FaTwitter } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';

function Footer() {
  let linklist = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Service", path: "/" },
    { name: "Contact Us", path: "/" },
  ]
  let servicelist = [
    { name: "Plumbing", path: "/" },
    { name: "Electrical Work", path: "/" },
    { name: "Painting", path: "/" },
    { name: "Cleaning", path: "/" },
    { name: "Tutoring", path: "/" },
    { name: "Security", path: "/" },
  ]
  return (
    <div className='footer_bg'style={{marginTop:"100px"}}>
      <div className="container p-3">
        <div className="row border-bottom border-secondary border-1">
          <div className="col-12 col-md-6 col-lg-3 py-3" style={{marginTop:"-100px"}}>

            <div className="h-100 p-3 rounded-3" style={{ backgroundColor: "#1F2330" }}>
              <div className='text-white'>
                <h1>CLIQUES</h1>
              </div>
              <div className='text-secondary fw-medium pera'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, officiis.
              </div>
              <div className="d-flex align-items-center  pt-3 py-2">
                <div className="text-info text-decoration-none fs-4">
                  <FaMapLocationDot />
                </div>
                <div className="lightgray ps-3 pera">
                  <Link
                    to={
                      "/"
                    }
                    className="text-decoration-none lightgray link_hover py-1 text-white"
                    target="_blank"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center   py-2">
                <div className="text-info text-decoration-none fs-4">
                  <FaMailBulk />
                </div>
                <div className="lightgray ps-3 pera">
                  <Link
                    to={
                      "/"
                    }
                    className="text-decoration-none lightgray link_hover py-1 text-white"
                    target="_blank"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center  py-2">
                <div className="text-info text-decoration-none fs-4">
                  <BiSolidPhoneCall />
                </div>
                <div className="lightgray ps-3 pera">
                  <Link
                    to={
                      "/"
                    }
                    className="text-decoration-none lightgray link_hover py-1 text-white"
                    target="_blank"
                  >
                    +(91) 12345 67890
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 py-3 ps-lg-5 ps-3">
            <div className="h-100  ps-lg-5 ps-0">
              <h3 className='text-white  border-bottom pb-1 border-info mb-3' style={{width:"fit-content"}}>QUICK LINKS</h3>
              <div>
                {
                  linklist.map((x, i) => {
                    return (
                      <div className="d-flex align-items-center ">
                        <div className="text-info text-decoration-none fs-5">
                          <RxDoubleArrowRight />
                        </div>
                        <div className="  ps-2 pera pt-1 link_hover">
                          <Link
                            to={
                              x.path
                            }
                            className="text-decoration-none link_hover text-white fw-medium "

                          >
                            {x.name}
                          </Link>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 py-3 ps-lg-5 ps-3">
            <div className="h-100  ps-lg-3 ps-0">
              <h3 className='text-white  border-bottom pb-1 border-info mb-3' style={{width:"fit-content"}}>SERVICES</h3>
              <div>
                {
                  servicelist.map((x, i) => {
                    return (
                      <div className="d-flex align-items-center ">
                        <div className="text-info text-decoration-none fs-5">
                          <RxDoubleArrowRight />
                        </div>
                        <div className="  ps-2 pera pt-1 link_hover">
                          <Link
                            to={
                              x.path
                            }
                            className="text-decoration-none link_hover text-white fw-medium "

                          >
                            {x.name}
                          </Link>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 py-3">
            <div className="h-100  ">
            <div className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quae.</div>
            <div className='mt-2 mt-lg-4'>
                <div data-aos="fade-up" data-aos-duration="2000">
                  <div className="d-flex fs-4 my-3 ">
                    <Link
                      to={"/"}
                      target="_blank"
                      className="footericon text-center p-1 mx-2  ms-0 d-flex text-decoration-none text-white facebookicon">
                      <FaFacebookF />
                    </Link>

                    <Link
                      to={"/"}
                      className="footericon text-center p-1  mx-2 d-flex text-decoration-none text-white instaicon">
                      <FaInstagram />
                    </Link>
                    <Link
                      to={"/"}
                      className="footericon text-center p-1  mx-2 d-flex text-decoration-none text-white twittericon">
                      <FaTwitter />
                    </Link>
                    <Link
                      to={
                        "/"
                      }
                      target="_blank"
                      className="footericon text-center p-1  mx-2 d-flex text-decoration-none text-white linkicon">
                      <FaLinkedinIn />
                    </Link>

                  </div>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      <div className='text-white pera p-2 text-center'>© 2025 CLIQUES. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
