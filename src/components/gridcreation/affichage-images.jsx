import {lexique} from './lexique.js'

export function AffichageImage() {
    console.log(lexique)
    /*const listLexique = lexique.map((image)=>{image})*/
    const listFiltered = lexique.filter(image => image.mots.includes("bus"))
    console.log(listFiltered)
    return <div>
        <figure className="image is-128x128">
                <img src='/RebusGridCreator/images/176.png' alt='image 1'/>
        </figure>
    </div>
}