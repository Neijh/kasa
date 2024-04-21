import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import { housings } from '../../datas/housings'
import StarRate from '../../components/Star'


function Accommodation() {
  const { id } = useParams()
  const currentHousing = housings.find((housing) => housing.id === id)

  if (!currentHousing) {
    // Redirect to error page if currentHousing is undefined
    return <Navigate to="/error" replace={true} />
  }

  return (
    <div>
      <section>
        <Slideshow />
      </section>
      <section>
        <div className="details">
          <div className="details__container1">
            <div >
              <h2>{currentHousing.title}</h2>
              <p>{currentHousing.location}</p>
            </div>

            <div className="details__tags">
              {currentHousing.tags.map((tag, index) => (
                <p key={index}>
                  {tag}
                </p>
              ))}
            </div>
          </div>

          <div className="details__container2">
            <div className="details__container2__host">
              <p>{currentHousing.host.name}</p>
              <img
                src={currentHousing.host.picture}
                alt="hôte du logement"
              />
            </div>
            <div className="details__container2__host__star">
              <StarRate currentRate={currentHousing.rating} />
            </div>
          </div>
        </div>
        <div className="housing__collapse">
          <Collapse
            title={'Description'}
            content={currentHousing.description}
          />
          <Collapse 
          title={'Equipements'} 
          content={currentHousing.equipments} 
          className='content__equipment'
          />
        </div>
      </section>
    </div>
  )
}

export default Accommodation
