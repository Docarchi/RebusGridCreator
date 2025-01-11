import {lexique} from './lexique.js'

export function AffichageImage({filtered}) {

    const lexiqueFiltered = filtered !== '' ? lexique.filter(image => findWord(image.mots, filtered).length > 0 ? true:false):lexique

    const lexiqueItems = lexiqueFiltered.map(image => 
        <div className='cell' key={image.id} style={{textAlign:'-moz-center'}}>
            <figure className="image is-128x128">
                <img src={'/RebusGridCreator/images/'+image.id+'.png'} alt='image 1'/>
            </figure>
        </div>)

    return <div className='grid is-col-min-5' style={{overflowY:"auto", overflowX:"auto", maxHeight:'80vh'}}>
        {lexiqueItems}
    </div>
}


function findWord(listWord, filtered){
    return listWord.filter(word => word.startsWith(filtered))
}