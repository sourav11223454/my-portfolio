import './App.css'

function App() {

  return (
    <>
      <div>
        {/* nav-bar */}
        <nav className="navbar navbar-expand-lg bg-body px-5">
          <div className="container-fluid ">
            <a className="navbar-brand fw-bold" href="#">My-PortFolio</a>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* home-page */}
        <section className='home-text'>
          <h4 className='intro'>Hey, My name is Sourav and I am a</h4>
          <div>
            <h1 className='mern'>MERN STACK</h1>
            <h1 className='dev'>DEVELOPER</h1>
          </div>
          <img className='photo' src="photo.png" alt="" />
          <div className="buttons">
            <button className="btn dark">Download CV</button>
            <button className="btn light">View my Projects</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
