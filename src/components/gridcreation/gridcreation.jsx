import { AffichageImage } from "./affichage-images"
import { Recherche } from "./recherche"
import { AffichageGrille } from "./affichage-grille"
import { DndContext } from "@dnd-kit/core"
import { useState } from "react"
import { ExportButton, GrilleDescription, GrilleObjectif, GrilleTitle } from "./grille-text"
import { GrilleForm } from "./grille-form"

export function GridCreation() {

    const [inputSearch, setInputSearch] = useState('')

    const [sizeColumn, setSizeColumn] = useState(4)
    const [sizeLine, setSizeLine] = useState(4)

   const [objectif2, setObjectif2] = useState(0)
   const [objectif3, setObjectif3] = useState(0)
   const [objectif4, setObjectif4] = useState(0)
   const [objectif5, setObjectif5] = useState(0)
   const [objectif6, setObjectif6] = useState(0)

   const objectives = [objectif2, objectif3, objectif4, objectif5, objectif6]
   const objectivesSetter = [setObjectif2, setObjectif3, setObjectif4, setObjectif5, setObjectif6]


    return <DndContext onDragEnd={null}>
        <div className="columns">
            <div className="column is-one-quarter">
                <Recherche onChange={setInputSearch} inputSearch={inputSearch}/>
                <AffichageImage filtered={inputSearch}/>
            </div>
            <div className="column">
                <AffichageGrille sizeColumn={sizeColumn} sizeLine={sizeLine} onChangeColumn={setSizeColumn} onChangeLine={setSizeLine}/>
            </div>
            <div className="column is-one-quarter">
                <GrilleTitle/>
                <GrilleDescription/>
                <GrilleForm onChangeColumn={setSizeColumn} onChangeLine={setSizeLine}/>
                <GrilleObjectif objectives={objectives} setter={objectivesSetter}/>
                <ExportButton/>
            </div>
    </div>
    </DndContext>
    
}