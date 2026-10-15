import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  const sectionRef = useRef(null)
  const stickyRef = useRef(null)
  const videoRef = useRef(null)

  // True once the visitor has started scrolling
  const [started, setStarted] = useState(false)

  // True when the video is almost finished: the text slides in
  const [showText, setShowText] = useState(false)

  // True if the video file could not be loaded
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const sticky = stickyRef.current
    const video = videoRef.current

    if (!section || !sticky || !video) return

    let targetTime = 0 // where the scroll wants the video to be
    let shownTime = 0 // where the video is moving to (eased)
    let lastSetTime = 0
    let frame = null

    // Moves the video smoothly towards the target time
    const render = () => {
      frame = null

      shownTime += (targetTime - shownTime) * 0.18

      if (Math.abs(targetTime - shownTime) < 0.01) shownTime = targetTime

      if (!video.seeking && Math.abs(shownTime - lastSetTime) > 0.02) {
        video.currentTime = shownTime
        lastSetTime = shownTime
      }

      const finished =
        shownTime === targetTime &&
        Math.abs(targetTime - lastSetTime) <= 0.02 &&
        !video.seeking

      if (!finished) frame = requestAnimationFrame(render)
    }

    // Works out how far the visitor has scrolled through the hero (0 to 1)
    const update = () => {
      if (!video.duration || !Number.isFinite(video.duration)) return

      const scrollDistance = section.offsetHeight - sticky.offsetHeight

      if (scrollDistance <= 0) return

      const rect = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance))

      targetTime = progress * video.duration

      setStarted(progress > 0.02)
      setShowText(progress >= 0.96)

      if (frame === null) frame = requestAnimationFrame(render)
    }

    video.pause()

    video.addEventListener('loadedmetadata', update)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    update()

    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      video.removeEventListener('loadedmetadata', update)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const classes = [
    'hero',
    showText ? 'hero-intro-done' : '',
    started ? 'hero-scrolling' : '',
    failed ? 'hero-failed' : '',
  ].join(' ')

  return (
    <section className={classes} ref={sectionRef}>
      <div className="hero-sticky" ref={stickyRef}>
        <video
          ref={videoRef}
          className="hero-video"
          src="/videos/hero-cafe.mp4"
          poster="/images/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={() => {
            setFailed(true)
            setShowText(true)
          }}
        />

        {/* Dark fade on the left that appears with the text */}
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

        {/* Hint shown before the visitor starts scrolling */}
        <div className="hero-cue" aria-hidden="true">
          SCROLL TO PLAY <span>↓</span>
        </div>
      </div>
    </section>
  )
}

export default Hero