import Banner from '../../components/Banner'
import logo from '../../assets/Banner/banner-home.png'
import Card from '../../components/Card'

function Home() {
  return (
    <div>
      <Banner>
      <p>Chez vous, partout et ailleurs</p>
            <div className='banner--darken'></div>
            <img src={logo} alt="falaise au bord de l'océan" />
      </Banner>
      <Card />
    </div>
  )
}

export default Home
