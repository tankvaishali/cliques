import React from 'react'
import { LiaMailBulkSolid } from 'react-icons/lia'
import { LuPhoneCall } from 'react-icons/lu'
import { SlLocationPin } from 'react-icons/sl'

function ContactInfo() {
    return (
        <>
            <div className='container'>
                <div className='main-contact row mb-5'>
                    <div className='col-12 col-lg-4 col-md-6 p-3'>
                        <div className='Contact_main h-100 text-center p-5'>
                            <div className="Contact-iconbg mx-auto d-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: '100px', height: '100px' }}>
                                <LuPhoneCall className="Contact_icon darkcolor" style={{ fontSize: "45px" }} />
                            </div>
                            <h3 className="Contact_tittle fw-bold text-medium my-3">Phone No.</h3>
                            <div className='Contact_cont pera'>(+91) 12345 67890</div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6 p-3'>
                        <div className='Contact_main h-100 text-center p-5 move-up_lg'>
                            <div className="Contact-iconbg mx-auto d-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: '100px', height: '100px' }}>
                                <SlLocationPin className="Contact_icon darkcolor" style={{ fontSize: "45px" }} />
                            </div>
                            <h3 className="Contact_tittle fw-bold text-medium my-3">Address</h3>
                            <div className='Contact_cont pera'>5604 Willow Crossing Ct, Clifton, United State.</div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6 p-3'>
                        <div className='Contact_main h-100 text-center p-5'>
                            <div className="Contact-iconbg mx-auto d-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: '100px', height: '100px' }}>
                                <LiaMailBulkSolid className="Contact_icon darkcolor" style={{ fontSize: "45px" }} />
                            </div>
                            <h3 className="Contact_tittle fw-bold text-medium my-3">E-mail</h3>
                            <div className='Contact_cont pera'>abc123@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo