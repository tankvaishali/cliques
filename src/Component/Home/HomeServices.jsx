import React from 'react'
import { FaRegSnowflake } from 'react-icons/fa'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { IoHomeOutline } from 'react-icons/io5'
import { LuWrench } from 'react-icons/lu'
import { RiComputerLine, RiRestaurantLine } from 'react-icons/ri'

function HomeServices() {

    const services = [
        {
            title: "Home Service",
            description: "Expert home maintenance, cleaning, and repair solutions to keep your house in perfect shape.",
            icon: <IoHomeOutline />,
            bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
        {
            title: "Food Service",
            description: "Delicious meals delivered to your doorstep, prepared by top chefs with fresh ingredients.",
            icon: <RiRestaurantLine />,
            bgImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        },
        {
            title: "Electronic Service",
            description: "Repair and maintenance for all your electronic appliances, from TVs to home theater systems.",
            icon: <RiComputerLine />,
            bgImage: "https://img.freepik.com/premium-photo/close-up-man-working-table_1048944-19508200.jpg?ga=GA1.1.960358020.1744003470&semt=ais_hybrid&w=740"
        },
        {
            title: "Plumber Service",
            description: "Professional plumbing solutions including leak repairs, installations, and maintenance.",
            icon: <LuWrench />,
            bgImage: "https://img.freepik.com/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?ga=GA1.1.960358020.1744003470&semt=ais_hybrid&w=740"
        },
        {
            title: "AC Repair",
            description: "Cooling system repairs, maintenance, and installation to keep your home comfortable year-round.",
            icon: <FaRegSnowflake />,
            bgImage: "https://img.freepik.com/premium-photo/worker-repairing-ceiling-air-conditioning-unit_656932-2704.jpg?ga=GA1.1.960358020.1744003470&semt=ais_hybrid&w=740"
        },
        {
            title: "All Kind Of Services",
            description: "From handyman services to deep cleaning, we provide everything to meet your needs.",
            icon: <HiOutlineWrenchScrewdriver />,
            bgImage: "https://img.freepik.com/free-photo/close-up-person-working-call-center_23-2149288220.jpg?ga=GA1.1.960358020.1744003470&semt=ais_hybrid&w=740"
        }
    ];

    return (
        <>
            <div className='container'>
                <div className='text-center mb-4'>
                    <div
                        className="font_stroke"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-once="true"
                    >
                        Our Service
                    </div>
                    <div
                        className="ftittle"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-once="true"
                    >
                        How We Make a Difference
                    </div>
                </div>
                <div className='row'>
                    {services.map((service, index) => (
                        <div className='col-12 col-lg-4 col-md-6 p-3' key={index}>
                            <div
                                className='Service_card h-100 rounded-4 position-relative p-1 overflow-hidden'>
                                <div
                                    className="bg-image position-absolute"
                                    style={{
                                        backgroundImage: `url(${service.bgImage})`,
                                        boxShadow: "inset 0px 0px 140px 1200px rgba(24, 28, 40, 0.82)",
                                        top: "0", bottom: "0", right: "0", left: "0", backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat", backgroundPosition: "center", transition: "all 0.5s ease-in-out",
                                        zIndex: "0"
                                    }}
                                />
                                <div className='position-relative z-1 text-white p-5'>
                                    <h3 className='fw-bold'>{service.title}</h3>
                                    <p className='pera fw-medium mt-3 mb-5' style={{ wordBreak: "break-all" }}>
                                        {service.description}
                                    </p>
                                </div>
                                <div className='Service_icon_wrapper'>
                                    {React.cloneElement(service.icon, {
                                        className: "Service_icon infocolor fw-bold fs-1 p-3 bg-white",
                                        style: { width: "70px", height: "70px" }
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeServices