import { Link } from 'react-router-dom'
import { RandomRebus } from './random-rebus'
import { Footer} from '../footer/footer'

export function HomePage() {
    return <section className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                <RandomRebus/>
                <p className="title">Bienvenue sur Raie-bus</p>
                <p className="subtitle">Créez dès maintenant vos propres grilles de rébus !</p>
                <Link to={'/GridCreation/'}>
                <button className="button is-primary">Créer une grille</button>
                </Link>
                </div>
            </div>
            <Footer/>
        </section>
}