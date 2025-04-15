import React from 'react'
import "../../assets/Css/About.css";
import HOC from '../Main/HOC';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <>
            <div className="lending_sec text-center text-white position-relative" style={{ background: "var(--dark)" }}>
                <div className="lendingSec_bg m-0 p-0 d-flex justify-content-center align-items-center text-center flex-column">
                    <h1 className="fw-bold lh-base mt-5">About Us</h1>
                    <div className="mt-2 fw-bold"><Link to={"/"} className='text-decoration-none'><span className='infocolor'>Home</span></Link> / About Us</div>
                </div>
                <div>
                    <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(13, 202, 240, 0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(13, 202, 240, 0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(13, 202, 240, 0.87)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default HOC(AboutPage)