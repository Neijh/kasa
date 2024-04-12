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
      // if (index === currentHousing.pictures.length - 1) return 0
      // return index + 1
      setImageIndex(index === currentHousing.pictures.length -1 ? 0 : index + 1)
    })
  }

  function showPrevImage() {
    setImageIndex((index) => {
      // if (index === 0) return currentHousing.pictures.length - 1
      // return index - 1
      setImageIndex(index === 0 ? currentHousing.pictures.length -1 : index - 1)
    })
  }

  return (
    <section aria-label="slider">
      <article className="slider__container">
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

// function Slideshow() {
//   const { id } = useParams()
//   const currentHousing = housings.find((housing) => housing.id === id)

//   const [slide, setSlide] = useState(0)

//   const nextSlide = () => {
//     setSlide(slide === currentHousing.pictures.length -1 ? 0 : slide + 1)
//   }

//   const prevSlide = () => {
//     setSlide(slide === 0 ? currentHousing.pictures.length - 1 : slide - 1)
//   }

//   return (
//     <div>
//       <section className="carousel">
//         {currentHousing.pictures.map((picture, index) => (
//             <img key={`${picture}-${index}`} src={picture} alt={`intérieur de ${picture.title}`}
//           // className={slide === index ? "carousel__slide active" : "carousel__slide hidden"}
//           // className={`carousel__slide ${slide === index ? '' : 'hidden'}`}
//           // style={{transform: `translateX(${-100 * slide}%)`}} />
//           className="carousel__slide"
//       style={{ transform: `translateX(${100 * (index - slide)}%)`, opacity: slide === index ? 1 : 0 }} // Adjust opacity dynamically
//             />

//           // <article key={`${picture}-${index}`} className='carousel__slider'>
//           //   <img  src={picture} alt={`intérieur de ${picture.title}`}
//           // className={slide === index ? "carousel__slide active" : "carousel__slide hidden"}
//           // style={{translate: `${-100 * slide}%`}} />
//           // </article>
//         ))}
//       <button className="carousel__btn--prev" onClick={prevSlide}>
//         <img src={arrowBack} alt="bouton précédent" />
//       </button>
//       <button className="carousel__btn--next" onClick={nextSlide}>
//         <img src={arrowNext} alt="bouton suivant" />
//       </button>
//       </section>
//         <h1>page {id}</h1>
//     </div>
//   )
// }

// export default Slideshow
