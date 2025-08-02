import { useDraggable } from '@dnd-kit/core'
import {lexique} from './lexique.js'

export function AffichageImage({filtered}) {

    const lexiqueFiltered = filtered !== '' ? lexique.filter(image => findWord(image.mots, filtered).length > 0 ? true:false):lexique

    const lexiqueItems = lexiqueFiltered.map(image => <div className='cell' key={image.id} style={{textAlign:'-moz-center'}}>
    <ImageDraggable image={image}/>
    </div>) 

    return <div className='grid is-col-min-5' style={{overflowY:"auto", overflowX:"auto", maxHeight:'80vh'}}>
        {lexiqueItems}
    </div>
}


function findWord(listWord, filtered){
    return listWord.filter(word => word.startsWith(filtered))
}


function ImageDraggable({image}) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id:image.id})
    const style = transform ? {transform: 'translate3d(${transform.x}px, ${transform.y}px, 0)',} : undefined

    return <figure className="image is-128x128" ref={setNodeRef} {...listeners} {...attributes}>
        <img src={'/RebusGridCreator/images/'+image.id+'.jpg'} alt='image 1' title={image.mots}/>
    </figure>
}