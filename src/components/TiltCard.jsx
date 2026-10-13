import { useRef } from 'react'
import './TiltCard.css'

// Wraps a card and tilts it towards the mouse
function TiltCard({ as: Tag = 'div', className = '', maxTilt = 7, children }) {
    const cardRef = useRef(null)

    const handlePointerMove = (event) => {
        const card = cardRef.current

        // Only tilt with a mouse, not with touch
        if (!card || event.pointerType !== 'mouse') return

        // Do not tilt if the user prefers less motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const rect = card.getBoundingClientRect()

        // Mouse position inside the card, from 0 to 1
        const x = (event.clientX - rect.left) / rect.width
        const y = (event.clientY - rect.top) / rect.height

        card.style.setProperty('--tilt-x', `${(0.5 - y) * maxTilt * 2}deg`)
        card.style.setProperty('--tilt-y', `${(x - 0.5) * maxTilt * 2}deg`)
        card.style.setProperty('--glare-x', `${x * 100}%`)
        card.style.setProperty('--glare-y', `${y * 100}%`)
    }

    // Move the card back to its normal position
    const resetTilt = () => {
        const card = cardRef.current

        if (!card) return

        card.style.setProperty('--tilt-x', '0deg')
        card.style.setProperty('--tilt-y', '0deg')
    }

    return (
        <Tag
            ref={cardRef}
            className={`tilt-card ${className}`}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
        >
            {children}
        </Tag>
    )
}

export default TiltCard