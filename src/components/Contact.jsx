import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <section id='Contact' className="container py-5">
        <h2 className="text-center mb-2">Get in Touch</h2>
        <h5 className="text-center mb-5">Feel free to reach out anytime</h5>

        <div className="p-4 shadow">
          <div className="row">

            <div className="col-md-5 border" style={{ borderRadius: '15px', padding: '15px' }}>
              <div className="contact-item d-flex align-items-center p-3 mb-3 border" style={{borderRadius:'20px'}}>

                <div className="icon me-3" style={{color:'white'}}>
                  <MdEmail/>
                </div>

                <div className="text">
                  <p className="label mb-1">Email:</p>
                  <p className="value mb-0">souravvs2255@gmail.com</p>
                </div>

              </div>
               <div className="contact-item d-flex align-items-center p-3 mb-3 border" style={{borderRadius:'20px'}}>

                <div className="icon me-3" style={{color:'white'}}>
                  <FaLocationDot />
                </div>

                <div className="text">
                  <p className="label mb-1">Location</p>
                  <p className="value mb-0">India</p>
                </div>

              </div>
            </div>
            

            <div className="col-md-7">
              <input className="form-control mb-3" placeholder="Name" />
              <input className="form-control mb-3" placeholder="Email" />
              <textarea className="form-control mb-3" rows="3" placeholder="Message"></textarea>
              <button className="btn btn-dark px-5">Send</button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact