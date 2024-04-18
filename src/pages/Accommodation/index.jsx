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
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <div>
      <section>
        <Slideshow />
      </section>
      <section>
        <div className="informations">
          <div className="informations__details">
            <div >
              <h2 className="informations__details__title">{currentHousing.title}</h2>
              <p className="informations__details__location">{currentHousing.location}</p>
            </div>

            <div className="informations__tags">
              {currentHousing.tags.map((tag, index) => (
                <p key={index} className="informations__tags__tag">
                  {tag}
                </p>
              ))}
            </div>
          </div>

          <div className="informations__host">
            <div className="informations__host__container">
              <p>{currentHousing.host.name}</p>
              <img
                src={currentHousing.host.picture}
                alt="hôte du logement"
              />
            </div>
            <div className="host__star">
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
          />
        </div>
      </section>
    </div>
  )
}

export default Accommodation
