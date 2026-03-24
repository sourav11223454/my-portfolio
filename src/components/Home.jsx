import React from 'react'

function Home() {
  return (
    <>
     <div>
        <section id='home' className='home-text'>
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

export default Home