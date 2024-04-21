import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { housings } from '../../datas/housings'
import arrowBack from '../../assets/arrow-carrousel/arrow_back.png'
import arrowNext from '../../assets/arrow-carrousel/arrow_forward.png'

export default function Slideshow() {
  const { id } = useParams()
  const currentHousing = housings.find((housing) => housing.id === id)

  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex((index) => {
      if (index === currentHousing.pictures.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return currentHousing.pictures.length - 1
      return index - 1
    })
  }

  return (
    <section aria-label="slider">
      <article className="slider__container">
        {/* Map through pictures and render each image */}
        {currentHousing.pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`intérieur de ${picture.title}`}
            aria-hidden={imageIndex !== index}
            className="slider__image"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        {/* Render arrow buttons if there's more than one image */}
        {currentHousing.pictures.length > 1 && (
          <div>
            <button
              onClick={showPrevImage}
              className="slider__btn left"
              aria-label="View Previous Image"
            >
              <img src={arrowBack} alt="bouton précédent" />
            </button>
            <button
              onClick={showNextImage}
              className="slider__btn right"
              aria-label="View Next Image"
            >
              <img src={arrowNext} alt="bouton suivant" />
            </button>
          </div>
        )}
      </article>
    </section>
  )
}
