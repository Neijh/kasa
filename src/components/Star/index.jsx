import activeStar from '../../assets/star/star-active.png'
import inactiveStar from '../../assets/star/star-inactive.png'

function StarRate({ currentRate }) {
  const ratings = [1, 2, 3, 4, 5]

  return (
    <div>
      {/* Map through ratings array */}
      {ratings.map((rate) =>
        currentRate >= rate ? ( // If current rate is greater than or equal to the current rating
          // Render active star icon
          <img key={rate.toString()} src={activeStar} alt="star-icon" />
        ) : (
          // Otherwise, render inactive star icon
          <img key={rate.toString()} src={inactiveStar} alt="star-icon" />
        ),
      )}
    </div>
  )
}

export default StarRate
