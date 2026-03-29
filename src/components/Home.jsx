import React from 'react'

function Home() {
  return (
    <>
     <div>
        <section id='home' className='min-h-screen home-text'>
          <h4 className='intro'>Hey, My name is Sourav and I am a</h4>
          <div>
            <h1 className='mern'>MERN STACK</h1>
            <h1 className='dev'>DEVELOPER</h1>
          </div>
          <img className='photo' src="photo.png" alt="" />
          <div className="buttons">
            <button className="btn dark">Download CV</button>
            <a href='#projects'><button className="btn light">View my Projects</button></a>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home