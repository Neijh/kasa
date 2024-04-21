// This Banner component accepts children for the text, image, and opacity as props.
function Banner({ children, image, opacity }) {
    
    return (
        <section className='banner'>
            { children }
            <div className="banner--darken" style={{ opacity: opacity }}></div>
            <img src={image} alt="falaise au bord de l'océan" />
        </section>
    )
}

export default Banner