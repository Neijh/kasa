import logo from '../../assets/Banner/banner-home.png'

function Banner() {
    return (
        <section className='banner'>
            <p>Chez vous, partout et ailleurs</p>
            <div className='banner--darken'></div>
            <img src={logo} alt="falaise au bord de l'océan" />
        </section>
    )
}

export default Banner