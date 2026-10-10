import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current

    if (!section || !video) return

    let animationFrame

    const updateVideo = () => {
      cancelAnimationFrame(animationFrame)

      animationFrame = requestAnimationFrame(() => {
        if (!video.duration || !Number.isFinite(video.duration)) return

        const rect = section.getBoundingClientRect()
        const scrollDistance = section.offsetHeight - window.innerHeight

        if (scrollDistance <= 0) return

        const progress = Math.min(
          1,
          Math.max(0, -rect.top / scrollDistance),
        )

        const targetTime = progress * video.duration

        if (Math.abs(video.currentTime - targetTime) > 0.04) {
          video.currentTime = targetTime
        }
      })
    }

    video.pause()

    video.addEventListener('loadedmetadata', updateVideo)
    window.addEventListener('scroll', updateVideo, { passive: true })
    window.addEventListener('resize', updateVideo)

    updateVideo()

    return () => {
      cancelAnimationFrame(animationFrame)
      video.removeEventListener('loadedmetadata', updateVideo)
      window.removeEventListener('scroll', updateVideo)
      window.removeEventListener('resize', updateVideo)
    }
  }, [])

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-sticky">
        <video
          ref={videoRef}
          className="hero-video"
          src="/videos/coffee-pour.mp4"
          muted
          playsInline
          preload="auto"
          aria-label="Coffee being poured into a cup"
        />

        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-label">A NEW KIND OF COFFEE EXPERIENCE</p>

            <h1>
              Coffee for
              <br />
              the moments
              <br />
              <span>that matter.</span>
            </h1>

            <p className="hero-description">
              Discover exceptional coffee, thoughtful craftsmanship,
              and moments worth slowing down for.
            </p>

            <a href="/menu" className="hero-button">
              EXPLORE OUR MENU <span>↗</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span>CRAFTED WITH PASSION</span>
            <span>EST. 2026</span>
            <span>SCROLL TO DISCOVER ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero