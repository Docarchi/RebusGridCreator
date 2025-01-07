export function HomePage() {
    return <section className="hero" style={{}}>
        <div className="hero-body" style={{top:'50%', left:'50%', textAlign: "center", position:'absolute', transform:'translate(-50%, -50%)'}}>
            <p className="title">Bienvenue sur Rébus</p>
            <p className="subtitle">Créez dès maintenant vos propres grilles !</p>
            <button className="button is-link">Créer une grille</button>
        </div>
    </section>
}