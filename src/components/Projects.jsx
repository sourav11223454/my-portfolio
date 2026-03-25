import React from 'react'

function Projects() {
  return (
    <section id='projects'>
      <div className="container" style={{ marginTop: "10rem" }}>
        <h1 className='container about-title text-center'>Projects</h1>
        <div className="row g-4 mt-4">

          {/* BMI PROJECT */}
          <div className="col-md-6 " data-aos="fade-right">
            <div className="p-3 rounded shadow h-100 project-card">

              <img
                src="bm-cal.png"
                alt="BMI Calculator"
                className="img-fluid rounded mb-3"
              />

              <h4 className="fw-bold" style={{ color: '#3a3939' }}>
                BMI Calculator
              </h4>

              <p className="text-muted">
                A responsive BMI Calculator built using HTML, CSS, JavaScript, and Bootstrap.
                It allows users to calculate their Body Mass Index and understand their health
                category through an interactive interface.
              </p>

              {/* Tech Stack */}
              <div className="mb-3">
                <span className="badge bg-dark me-1">HTML</span>
                <span className="badge bg-secondary me-1">CSS</span>
                <span className="badge bg-primary me-1">JavaScript</span>
                <span className="badge bg-success">Bootstrap</span>
              </div>

              {/* <button className="btn btn-dark px-4 rounded-pill">
                Live Demo
              </button> */}
              <div className="overlay">
                <a href='https://bm-calculator-nine.vercel.app' target="_blank"><button className="btn btn-light">Live Demo</button></a>
                <a href='https://github.com/sourav11223454/BM-Calculator' target="_blank"> <button className="btn btn-dark">GitHub</button></a>
              </div>
            </div>
          </div>

          {/* WEATHER PROJECT */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="p-3 border rounded shadow h-100 project-card">

              <img
                src="weather.png"
                alt="Weather App"
                className="img-fluid rounded mb-3"
              />

              <h4 className="fw-bold" style={{ color: '#3a3939' }}>
                Weather App
              </h4>

              <p className="text-muted">
                A dynamic weather application that fetches real-time data using APIs and
                displays temperature, humidity, and weather conditions for any location.
                Built with HTML, CSS, JavaScript, and Bootstrap.
              </p>

              {/* Tech Stack */}
              <div className="mb-3">
                <span className="badge bg-dark me-1">HTML</span>
                <span className="badge bg-secondary me-1">CSS</span>
                <span className="badge bg-primary me-1">JavaScript</span>
                <span className="badge bg-success me-1">Bootstrap</span>
                <span className="badge bg-info text-dark">API</span>
              </div>

              {/* <button className="btn btn-dark px-4 rounded-pill">
                Live Demo
              </button> */}
              <div className="overlay">
                <a href='https://weatherchecking.vercel.app' target="_blank"><button className="btn btn-light">Live Demo</button></a>
                <a href='https://github.com/sourav11223454/Weather' target="_blank"> <button className="btn btn-dark">GitHub</button></a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects