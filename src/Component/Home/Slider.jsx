import React from 'react'
import 'animate.css';

function Slider() {
    return (
        <div>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active clicque">
                        <div
                            className="bg-slide"
                            style={{
                                backgroundImage: `url(https://t3.ftcdn.net/jpg/04/80/48/10/360_F_480481061_rld9llq95TvFSMM3vAcacadXeVtiAYa6.jpg)`
                            }}
                        ></div>
                        <div className="carousel-caption d-none d-md-block animate__animated animate__bounceInLeft animate__slow">
                            <h5 className="display-3 fw-bold">First slide label</h5>
                            <p className="fs-4">Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item clicque">
                        <div
                            className="bg-slide"
                            style={{
                                backgroundImage: `url(https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D)`
                            }}
                        ></div>
                        <div className="carousel-caption d-none d-md-block animate__animated animate__bounceInLeft animate__slow">
                            <h5 className="display-3 fw-bold">Second slide label</h5>
                            <p className="fs-4">Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item clicque">
                        <div
                            className="bg-slide"
                            style={{
                                backgroundImage: `url(https://cdn.prod.website-files.com/63501eb57ab02026df8ab1d3/635af21ceeb8ef54a82645e2_shutterstock_2010435512-optimized.webp)`
                            }}
                        ></div>
                        <div className="carousel-caption d-none d-md-block animate__animated animate__bounceInLeft animate__slow">
                            <h5 className="display-3 fw-bold">Third slide label</h5>
                            <p className="fs-4">Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider