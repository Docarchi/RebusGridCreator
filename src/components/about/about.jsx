import { Footer } from "../footer/footer"

export function About() {
    return <section className="hero is-fullheight-with-navbar">
        <div className='hero-body'>
            <div className="container has-text-centered">
                <div className="fixed-grid has-2-cols">
                    <div className="grid">
                        <div className="cell">
                            <figure className="image is-128x128" style={{margin:'auto'}}>
                                <img className="is-rounded" src='/RebusGridCreator/images/henri.jpg' alt="photo Henri"/>
                            </figure>
                        </div>
                        <div className="cell">
                            <figure className="image is-128x128" style={{margin:'auto'}}>
                                <img className="is-rounded" src='/RebusGridCreator/images/gaspard.jpg' alt="photo Gaspard"/>
                            </figure>
                        </div>
                        <div className="cell"> texte 1</div>
                        <div className="cell"> texte 2</div>  
                    </div>              
            </div>

            </div>
        </div>
        <Footer/>
    </section>
}