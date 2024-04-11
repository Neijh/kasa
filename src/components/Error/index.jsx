import logo from '../../assets/error-logo.png'

function Error() {
    return (
        <div className='error'>
            <img src={ logo } alt="Erreur 404" />
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <p>Retourner sur la page d'accueil</p>
        </div>
    )
}
 
export default Error