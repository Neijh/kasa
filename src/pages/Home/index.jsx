import Banner from '../../components/Banner'
import aboutImage from '../../assets/Banner/banner-home.png'
import Card from '../../components/Card'

function Home() {
  return (
    <div>
      {/* Banner Component */}
      <Banner image={aboutImage} opacity={0.6}>
      <div className="banner__text">
        <p>Chez vous, partout et ailleurs</p>

        </div>
      </Banner>
      {/* Card Component */}
      <Card />
    </div>
  )
}

export default Home
