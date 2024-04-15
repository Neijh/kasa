import activeStar from '../../assets/star/star-active.png'
import inactiveStar from '../../assets/star/star-inactive.png'

function StarRate({currentRate}) {
        const ratings = [1, 2, 3, 4, 5]
    
        return (
          <div>
            {ratings.map((rate) =>
              currentRate >= rate ? (
                <img key={rate.toString()} src={activeStar} alt="star-icon" />
              ) : (
                <img key={rate.toString()} src={inactiveStar} alt="star-icon" />
              ),
            )}
          </div>
        )
}

export default StarRate