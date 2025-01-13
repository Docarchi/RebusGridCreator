import { useDroppable } from "@dnd-kit/core"

export function AffichageGrille({sizeColumn, arrayImages}) {
    
    const nb_column = sizeColumn

    const lines = []
    for(let i = 0; i < arrayImages.length; i++){
        lines.push(<CellDroppable i={i} imgId={arrayImages[i]}/>)
        }

    return <div>
        <div className={'fixed-grid has-'+nb_column+'-cols'}>
            <div className="grid" style={{width:(8*nb_column+0.75*(nb_column-1)).toString()+'rem', margin:"auto", marginTop:'0.75rem'}}>
                {lines}
            </div>
        </div>
    </div>
}


function CellDroppable({i, imgId}) {
    const id = (i+1).toString()
    const {isOver, setNodeRef} = useDroppable({id:id})
    const style = {
        color: isOver ? 'green' : undefined,
        border: isOver ? "2px solid green": "1px solid black", 
        width:'128px', 
        height:'128px',
        textAlign:'center',
    }

    const contenu = imgId !== null ? <figure className="image is-128x128">
    <img src={'/RebusGridCreator/images/'+imgId+'.png'} alt='image 1'/>
</figure>:<div style={{marginTop:'20%'}}>Case {id}<br/>Ajouter une image</div>

    return <div className="cell" key={id} style={style} ref={setNodeRef}>
        {contenu}

    </div>
}