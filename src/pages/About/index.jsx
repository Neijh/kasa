import Banner from '../../components/Banner'
import logo from '../../assets/Banner/banner-about.png'
import Collapse from '../../components/Collapse'

import aboutList from '../../datas/aboutList'

function About() {
  return (
    <div>
      <Banner>
        <p>Chez vous, partout et ailleurs</p>
        <div className="banner--darken"></div>
        <img src={logo} alt="falaise au bord de l'océan" />
      </Banner>

      {aboutList.map((item, index) => (
        <div key={index}>
          <Collapse title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  )
}

export default About
