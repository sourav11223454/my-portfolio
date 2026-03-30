import React from 'react'
import { motion } from 'framer-motion'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const isMobile = window.innerWidth < 768;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: isMobile ? 0.6 : 0.9,
    delay,
    ease: [0.22, 1, 0.36, 1]
  },
  viewport: { once: true }
});

function Contact() {
  return (
    <>
      <section id='Contact' className="container py-5">

        <motion.h2 {...fadeUp(0.1)} className="text-center mb-2">
          Get in Touch
        </motion.h2>

        <motion.h5 {...fadeUp(0.2)} className="text-center mb-5">
          Feel free to reach out anytime
        </motion.h5>

        <motion.div {...fadeUp(0.3)} className="p-4 shadow">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-md-5 border" style={{ borderRadius: '15px', padding: '15px' }}>

              <motion.div {...fadeUp(0.4)} className="contact-item d-flex flex-column flex-md-row p-3 mb-3 border" style={{ borderRadius: '20px' }}>
                <div className="icon me-3" style={{ color: 'white' }}>
                  <MdEmail />
                </div>
                <div className="text">
                  <p className="label mb-1">Email:</p>
                  <p className="value mb-0">souravvs2255@gmail.com</p>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.5)} className="contact-item d-flex align-items-center p-3 mb-3 border" style={{ borderRadius: '20px' }}>
                <div className="icon me-3" style={{ color: 'white' }}>
                  <FaLocationDot />
                </div>
                <div className="text">
                  <p className="label mb-1">Location</p>
                  <p className="value mb-0">India</p>
                </div>
              </motion.div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-md-7 g-3">
              <form action="https://formspree.io/f/mdapgeke" method="POST">

                <motion.input
                  {...fadeUp(0.4)}
                  className="form-control mb-3"
                  placeholder="Name"
                  type='text'
                  name='name'
                  required
                />

                <motion.input
                  {...fadeUp(0.5)}
                  className="form-control mb-3"
                  placeholder="Email"
                  type='email'
                  name='email'
                  required
                />

                <motion.textarea
                  {...fadeUp(0.6)}
                  className="form-control mb-3"
                  rows="3"
                  placeholder="Message"
                  name='message'
                  required
                />

                <motion.button
                  {...fadeUp(0.7)}
                  type='submit'
                  className="btn btn-dark px-5 w-lg-100 w-md-auto"
                >
                  Send
                </motion.button>
              </form>

            </div>

          </div>
        </motion.div>

      </section>
    </>
  )
}

export default Contact