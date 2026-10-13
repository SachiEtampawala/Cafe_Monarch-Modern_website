import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import TiltCard from './TiltCard'
import './MenuMedia.css'

// Photo or video card for a menu category.
// Click it to open a bigger pop-up.
function MenuMedia({ category }) {
    const [open, setOpen] = useState(false)
    const [imageFailed, setImageFailed] = useState(false)
    const [videoFailed, setVideoFailed] = useState(false)

    const cardButtonRef = useRef(null)
    const closeButtonRef = useRef(null)
    const cardVideoRef = useRef(null)

    const hasVideo = Boolean(category.video) && !videoFailed
    const canOpen = hasVideo || !imageFailed

    // Play the small video only while it is on the screen
    useEffect(() => {
        const video = cardVideoRef.current

        if (!video) return

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches

        if (reduceMotion) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                video.play().catch(() => { })
            } else {
                video.pause()
            }
        })

        observer.observe(video)

        return () => observer.disconnect()
    }, [hasVideo])

    // While the pop-up is open: Esc closes it and the page cannot scroll
    useEffect(() => {
        if (!open) return

        const button = cardButtonRef.current

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setOpen(false)

            // The close button is the only button, so keep focus on it
            if (event.key === 'Tab') event.preventDefault()
        }

        document.addEventListener('keydown', onKeyDown)
        document.body.style.overflow = 'hidden'
        closeButtonRef.current?.focus()

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = ''
            button?.focus()
        }
    }, [open])

    const renderMedia = (isPopup) => {
        if (hasVideo) {
            return (
                <video
                    ref={isPopup ? null : cardVideoRef}
                    src={category.video}
                    poster={category.image}
                    muted
                    loop
                    playsInline
                    autoPlay={isPopup}
                    preload="metadata"
                    aria-label={category.imageAlt}
                    onError={() => setVideoFailed(true)}
                />
            )
        }

        return (
            <img
                src={category.image}
                alt={category.imageAlt}
                loading="lazy"
                onError={() => setImageFailed(true)}
                style={imageFailed ? { display: 'none' } : undefined}
            />
        )
    }

    const popup = open
        ? createPortal(
            <div
                className="menu-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={category.title}
                onClick={() => setOpen(false)}
            >
                <div
                    className="menu-lightbox-content"
                    onClick={(event) => event.stopPropagation()}
                >
                    <button
                        ref={closeButtonRef}
                        className="menu-lightbox-close"
                        type="button"
                        aria-label="Close"
                        onClick={() => setOpen(false)}
                    >
                        ×
                    </button>

                    <div className="menu-lightbox-media">{renderMedia(true)}</div>

                    <div className="menu-lightbox-caption">
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                    </div>
                </div>
            </div>,
            document.body,
        )
        : null

    return (
        <>
            <TiltCard className="menu-media" maxTilt={5}>
                <button
                    ref={cardButtonRef}
                    className="menu-media-button"
                    type="button"
                    disabled={!canOpen}
                    aria-label={`View ${category.title} larger`}
                    onClick={() => setOpen(true)}
                >
                    {renderMedia(false)}
                </button>

                {canOpen && (
                    <span className="menu-media-hint">
                        {hasVideo ? 'WATCH' : 'VIEW LARGER'}
                    </span>
                )}
            </TiltCard>

            {popup}
        </>
    )
}

export default MenuMedia