import React, { useEffect } from 'react'
import '../index.css'

const DigitalArts = () => {
  useEffect(() => {
    // Load particles.js from CDN
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: {
              type: 'circle',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 5 },
            },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: false, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <div className="maincontainer">
        <div className="container1 h-170 w-379 bg-black">
          <div id="particles-js" className="particles-container">
            <div className="coming-soon-content">
              <h1 className="coming-soon-heading">
                <span className="letter letter-1">C</span>
                <span className="letter letter-2">o</span>
                <span className="letter letter-3">m</span>
                <span className="letter letter-4">i</span>
                <span className="letter letter-5">n</span>
                <span className="letter letter-6">g</span>
                <span>&nbsp;</span>
                <span className="letter letter-7">S</span>
                <span className="letter letter-8">o</span>
                <span className="letter letter-9">o</span>
                <span className="letter letter-10">n</span>
              </h1>
              <p className="coming-soon-text">
                Something <span className="highlight">amazing</span> is on the way
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalArts