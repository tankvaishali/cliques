import React from 'react'

function ContactForm() {
    return (
        <>
            {/* map */}
            <div className='container' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                <div className='my-5'>
                    <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29752.700882695055!2d72.8291723!3d21.228374199999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdfc718eb4b%3A0xcf5efb27dfe048c5!2sBelpatra%20Pharmachem!5e0!3m2!1sen!2sin!4v1740025356298!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='shadow-lg'></iframe>
                </div>
            </div>

            <div className='ContactForm_bg p-3 p-lg-5 p-md-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-4 px-4 py-0 pt-2'>
                            <div className='h-100'>
                                <div
                                    className="font_stroke"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-once="true"
                                >
                                    Contact us
                                </div>
                                <div
                                    className="ftittle"
                                    data-aos="fade-down"
                                    data-aos-duration="1500"
                                    data-aos-once="true"
                                >
                                    Get In Touch With Us
                                </div>
                                <div className="pera text-secondary py-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ab omnis odit, modi qui amet harum deleniti tempora et maxime.
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-8 p-4'>
                            <div className='h-100'>
                                <div>
                                    <div className='w-100'>
                                        <label htmlFor="">Name</label>
                                        <input type="text" name="name" className='d-block w-100 rounded mt-1 py-1 px-2 border border-1 border-secondary' style={{ outline: "none" }} id="" />
                                    </div>
                                    <div className='d-lg-flex d-md-flex gap-3'>
                                        <div className='w-100 w-lg-50 w-md-50 my-2'>
                                            <label htmlFor="">E-mail</label>
                                            <input type="text" name="email" className='d-block w-100 rounded mt-1 py-1 px-2 border border-1 border-secondary' style={{ outline: "none" }} id="" />
                                        </div>
                                        <div className='w-100 w-lg-50 w-md-50 my-2'>
                                            <label htmlFor="">Phone No.</label>
                                            <input type="number" name="phoneno" className='d-block w-100 rounded mt-1 py-1 px-2 border border-1 border-secondary' style={{ outline: "none" }} id="" />
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <label htmlFor="">Message</label>
                                        <textarea name="message" rows={5} placeholder='Write Your Message Here...' className='d-block w-100 rounded mt-1 py-1 px-2 border border-1 border-secondary' style={{ outline: "none" }} id=""></textarea>
                                    </div>
                                    <div className='mt-2'>
                                        <button class="btncss fw-bold mt-2">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm