import myimage from '/32.png'
import { Link } from 'react-router-dom'

export function HomePage() {
    return <section className="hero" style={{}}>
        <div className="hero-body" style={{top:'50%', left:'50%', textAlign: "center", position:'absolute', transform:'translate(-50%, -50%)'}}>
            <figure className="image is-128x128">
                <img src={myimage}/>
            </figure>
            <p className="title">Bienvenue sur Rébus</p>
            <p className="subtitle">Créez dès maintenant vos propres grilles !</p>
            <Link to={'/GridCreation/'}>
            <button className="button is-link">Créer une grille</button>
            </Link>
        </div>
    </section>
}