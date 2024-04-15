import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import { housings } from '../../datas/housings'
import StarRate from '../../components/Star'


function Accommodation() {
  const { id } = useParams()
  const currentHousing = housings.find((housing) => housing.id === id)

  return (
    // className='accommodation'
    <div>
      <section>
        <Slideshow />
      </section>
      <section>
        <div className="info">
          <div className="info__1">
            <div className="info__title">
              <h2>{currentHousing.title}</h2>
              <p>{currentHousing.location}</p>
            </div>

            <div className="tags">
              {currentHousing.tags.map((tag, index) => (
                <p key={index} className="tag">
                  {tag}
                </p>
              ))}
            </div>
          </div>

          <div className="host__star">
            <div className="host">
              <p>{currentHousing.host.name}</p>
              <img
                src={currentHousing.host.picture}
                alt="hôte du logement"
                className="host__img"
              />
            </div>
            <div>
              <StarRate currentRate={currentHousing.rating} />
            </div>
          </div>
        </div>
        <div className="housing__collapse">
          <Collapse
            title={'Description'}
            content={currentHousing.description}
          />
          <Collapse title={'Equipements'} content={currentHousing.equipments} />
        </div>
      </section>
    </div>
  )
}

export default Accommodation
