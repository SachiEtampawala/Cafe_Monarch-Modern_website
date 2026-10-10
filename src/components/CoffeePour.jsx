import { useEffect, useRef } from 'react'
import './CoffeePour.css'

function CoffeePour() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current

    if (!section || !video) return

    video.pause()

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollableDistance = section.offsetHeight - window.innerHeight

      if (scrollableDistance <= 0 || !video.duration) return

      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollableDistance),
      )

      video.currentTime = progress * video.duration
    }

    const handleMetadata = () => {
      handleScroll()
    }

    video.addEventListener('loadedmetadata', handleMetadata)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="coffee-pour-section" ref={sectionRef}>
      <div className="coffee-pour-sticky">
        <video
          ref={videoRef}
          className="coffee-pour-video"
          src="/videos/coffee-pour.mp4"
          muted
          playsInline
          preload="auto"
          aria-label="Coffee being poured into a cup"
        />

        <div className="coffee-pour-overlay">
          <p className="coffee-pour-label">THE ART OF COFFEE</p>

          <h2>
            Every cup
            <br />
            tells a <span>story.</span>
          </h2>

          <p className="coffee-pour-hint">SCROLL TO EXPERIENCE ↓</p>
        </div>
      </div>
    </section>
  )
}

export default CoffeePour