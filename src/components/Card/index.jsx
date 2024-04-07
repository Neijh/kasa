import { NavLink } from 'react-router-dom'
import { housings } from '../../datas/housings'

function Card() {
  return (
    <section className="housing">
      {housings.map((housing) => (
        <NavLink to={`/accommodation/${housing.id}`} key={housing.id} className="housing__link">
          <article>
            <p>{housing.title}</p>
            <img src={housing.cover} alt={housing.title} />
          </article>
        </NavLink>
      ))}
    </section>
  )
}

export default Card
