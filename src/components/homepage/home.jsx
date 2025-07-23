import { Link } from 'react-router-dom'
import { RandomRebus } from './random-rebus'

export function HomePage() {
    return <section className="hero" style={{}}>
        <div className="hero-body" style={{top:'50%', left:'50%', textAlign: "center", position:'absolute', transform:'translate(-50%, -50%)'}}>
            <RandomRebus/>
            <p className="title">Bienvenue sur Rébus</p>
            <p className="subtitle">Créez dès maintenant vos propres grilles !</p>
            <Link to={'/GridCreation/'}>
            <button className="button is-primary">Créer une grille</button>
            </Link>
        </div>
    </section>
}