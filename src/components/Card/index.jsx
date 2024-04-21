import { NavLink } from 'react-router-dom'
import { housings } from '../../datas/housings'

function Card() {
  return (
    <section className="housing">
      {/* Mapping through housings data to render cards, each card is a link*/}
      {housings.map((housing) => (
        <NavLink
          to={`/accommodation/${housing.id}`}
          key={housing.id}
          className="housing__link"
        >
          <article>
            {/* This displays the title of the housing. */}
            <p>{housing.title}</p>
            <div className="housing--gradient"></div>
            {/* This displays the cover image of the housing */}
            <img src={housing.cover} alt={housing.title} />
          </article>
        </NavLink>
      ))}
    </section>
  )
}

export default Card
