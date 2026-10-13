import Reveal from './Reveal'
import './MenuPhotoStrip.css'

// Row of photo cards under the category bar.
// Clicking a card scrolls to that category.
function MenuPhotoStrip({ categories }) {
    return (
        <Reveal>
            <div className="menu-photo-strip">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        href={`#${category.id}`}
                        className="menu-photo-link"
                    >
                        <img
                            src={category.image}
                            alt=""
                            loading="lazy"
                            onError={(event) => {
                                // Hide the photo if the file is missing
                                event.currentTarget.style.display = 'none'
                            }}
                        />
                        <span>{category.label}</span>
                    </a>
                ))}
            </div>
        </Reveal>
    )
}

export default MenuPhotoStrip