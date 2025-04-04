import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const testimonials = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            name: "Jane Doe",
            image: "https://images.unsplash.com/photo-1563715992566-7ad5cf5b71d3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            name: "Jane Doe",
            image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400"
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            name: "Jane Doe",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400"
        }
    ];

    return (
        <>
            <div className='testimonial_bg my-5'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-12 col-lg-4 p-4 ms-2 ms-lg-0 ms-md-0'>
                            <div className='h-100'>
                                <div className='text-white display-3'><FaQuoteLeft /></div>
                                <div
                                    className="font_stroke"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-once="true"
                                >
                                    Testimonial
                                </div>
                                <div
                                    className="ftittle text-white"
                                    data-aos="fade-down"
                                    data-aos-duration="1500"
                                    data-aos-once="true"
                                >
                                    What Our Customers Say
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-8 p-4'>
                            <div className='h-100'>
                                <Slider {...settings} className="testimonial-slider">
                                    {testimonials.map((item) => (
                                        <div key={item.id}>
                                            <div className="testimonial-card bg-white rounded-4 d-flex flex-column mx-2">
                                                <div className="pera text-secondary p-4" style={{ wordBreak: "break-all" }}>
                                                    {item.text}
                                                    <FaQuoteRight className="testi_quote display-1 darkcolor" />
                                                </div>
                                                <div className="testi_bg_content position-relative">
                                                    <div
                                                        className="testi_image d-flex justify-content-center"
                                                        style={{
                                                            background: `url(${item.image}) no-repeat center/cover`,
                                                        }}
                                                    ></div>
                                                    <h3 className="testi_person text-white fw-bold text-medium">{item.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial