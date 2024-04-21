import Banner from '../../components/Banner'
import homeImage from '../../assets/Banner/banner-about.png'
import Collapse from '../../components/Collapse'

import aboutList from '../../datas/aboutList'

function About() {
  return (
    <div>
      {/* Banner Component */}
      <Banner image={homeImage} opacity={0.3}>
      </Banner>

      {/* Mapping over the aboutList data and rendering Collapse component for each item */}
      {aboutList.map((item, index) => (
        <div key={index} className="collapse__text">
          <Collapse title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  )
}

export default About
