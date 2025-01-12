import { AffichageImage } from "./affichage-images"
import { Recherche } from "./recherche"
import { AffichageGrille } from "./affichage-grille"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import { useState } from "react"
import { ExportButton, GrilleDescription, GrilleObjectif, GrilleTitle } from "./grille-text"
import { GrilleForm } from "./grille-form"

export function GridCreation() {

    const [inputSearch, setInputSearch] = useState('')

    const [sizeColumn, setSizeColumn] = useState(4)
    const [sizeLine, setSizeLine] = useState(4)

    const [arrayImages, setArrayImages] = useState(initiateArray(sizeColumn, sizeLine))

   const [objectif2, setObjectif2] = useState(0)
   const [objectif3, setObjectif3] = useState(0)
   const [objectif4, setObjectif4] = useState(0)
   const [objectif5, setObjectif5] = useState(0)
   const [objectif6, setObjectif6] = useState(0)

   const objectives = [objectif2, objectif3, objectif4, objectif5, objectif6]
   const objectivesSetter = [setObjectif2, setObjectif3, setObjectif4, setObjectif5, setObjectif6]

   const [activeId, setActiveId] = useState(null)


    return <DndContext onDragStart={(e)=>setActiveId(e.active.id)} onDragEnd={(e)=>handleDragEnd(e, setArrayImages, arrayImages)}>
        <div className="columns">
            <div className="column is-one-quarter">
                <Recherche onChange={setInputSearch} inputSearch={inputSearch}/>
                <AffichageImage filtered={inputSearch}/>
            </div>
            <div className="column">
                <AffichageGrille sizeColumn={sizeColumn} arrayImages={arrayImages}/>
            </div>
            <div className="column is-one-quarter">
                <GrilleTitle/>
                <GrilleDescription/>
                <GrilleForm onChangeColumn={setSizeColumn} onChangeLine={setSizeLine}/>
                <GrilleObjectif objectives={objectives} setter={objectivesSetter}/>
                <ExportButton/>
            </div>
    </div>

    <DragOverlay>
        {activeId ? (<figure className="image is-128x128">
        <img src={'/RebusGridCreator/images/'+activeId+'.png'} alt='image 1'/>
    </figure>): null}
    </DragOverlay>

    </DndContext>
    
}

function handleDragEnd(event, changeArray, currentArray) {
    console.log("image id : "+event.active.id)
    if (event.collisions.length > 0){
        const newArray = []
        for (let i = 1; i <= currentArray.length; i++){
            if (i == event.collisions[0].id){
                newArray.push(event.active.id)
            }
            else{
                newArray.push(currentArray[i-1])
            }
        }
        changeArray(newArray)
    }
}


function initiateArray(n_column, n_line){
    const lines = []
    for(let i = 0; i < n_line; i++){
        for(let j = 0; j < n_column; j++){
            lines.push(null)
        }
    }
    return lines
}