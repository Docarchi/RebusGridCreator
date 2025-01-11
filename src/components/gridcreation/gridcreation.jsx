import { AffichageImage } from "./affichage-images"
import { Recherche } from "./recherche"
import { AffichageGrille } from "./affichage-grille"
import { DndContext } from "@dnd-kit/core"
import { useState } from "react"

export function GridCreation() {

    const [inputValue, setInputValue] = useState('')

    const [sizeColumn, setSizeColumn] = useState(4)
    const [sizeLine, setSizeLine] = useState(4)

    return <DndContext onDragEnd={null}>
        <div className="columns">
            <div className="column is-one-quarter">
                <Recherche onChange={setInputValue} inputSearch={inputValue}/>
                <AffichageImage filtered={inputValue}/>
            </div>
            <div className="column">
                <AffichageGrille sizeColumn={sizeColumn} sizeLine={sizeLine} onChangeColumn={setSizeColumn} onChangeLine={setSizeLine}/>
            </div>
    </div>
    </DndContext>
    
}