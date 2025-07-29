import { Link } from 'react-router-dom'
import { RandomRebus } from './random-rebus'
import { Footer} from '../footer/footer'

export function HomePage() {
    return <div>
        <section className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                <RandomRebus/>
                <p className="title">Bienvenue sur Rébus</p>
                <p className="subtitle">Créez dès maintenant vos propres grilles !</p>
                <Link to={'/GridCreation/'}>
                <button className="button is-primary">Créer une grille</button>
                </Link>
                </div>
            </div>
            <Footer/>
        </section>
    </div>
}