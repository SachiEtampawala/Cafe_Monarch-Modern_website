import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  const videoRef = useRef(null)

  // True if the visitor asked their device for less motion
  const [reduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  // True when the intro video is finished and the text can appear
  const [introDone, setIntroDone] = useState(reduceMotion)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    // Less motion: no autoplay, show the last frame of the video
    if (reduceMotion) {
      const showLastFrame = () => {
        video.currentTime = video.duration
      }

      if (video.readyState >= 1) {
        showLastFrame()
      } else {
        video.addEventListener('loadedmetadata', showLastFrame, { once: true })
      }

      return () => video.removeEventListener('loadedmetadata', showLastFrame)
    }

    // If the browser blocks autoplay, show the text straight away
    video.play().catch(() => setIntroDone(true))
  }, [reduceMotion])

  // Skip button: jump to the end of the video
  const skipIntro = () => {
    const video = videoRef.current

    if (video && video.duration) {
      video.pause()
      video.currentTime = video.duration
    }

    setIntroDone(true)
  }

  return (
    <section className={`hero ${introDone ? 'hero-intro-done' : ''}`}>
      <video
        ref={videoRef}
        className="hero-video"
        src="/videos/hero-cafe.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay={!reduceMotion}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={() => setIntroDone(true)}
        onError={() => setIntroDone(true)}
      />

      {/* Dark fade on the left that appears after the video */}
      <div className="hero-shade"></div>

      <div className="hero-content">
        <p className="hero-label hero-reveal" style={{ '--delay': '0.1s' }}>
          A NEW KIND OF COFFEE EXPERIENCE
        </p>

        <h1>
          <span className="hero-line hero-reveal" style={{ '--delay': '0.25s' }}>
            Coffee for
          </span>
          <span className="hero-line hero-reveal" style={{ '--delay': '0.4s' }}>
            the moments
          </span>
          <span
            className="hero-line hero-line-accent hero-reveal"
            style={{ '--delay': '0.55s' }}
          >
            that matter.
          </span>
        </h1>

        <p
          className="hero-description hero-reveal"
          style={{ '--delay': '0.7s' }}
        >
          Discover exceptional coffee, thoughtful craftsmanship,
          and moments worth slowing down for.
        </p>

        <div className="hero-reveal" style={{ '--delay': '0.85s' }}>
          <Link to="/menu" className="hero-button">
            EXPLORE OUR MENU <span>↗</span>
          </Link>
        </div>
      </div>

      <div className="hero-bottom hero-reveal" style={{ '--delay': '1s' }}>
        <span>CRAFTED WITH PASSION</span>
        <span>EST. 2026</span>
        <a href="#coffee-collection">SCROLL TO DISCOVER ↓</a>
      </div>

      {!introDone && (
        <button className="hero-skip" type="button" onClick={skipIntro}>
          SKIP INTRO
        </button>
      )}
    </section>
  )
}

export default Hero