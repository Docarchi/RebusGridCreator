import { AffichageImage } from "./affichage-images"
import { Recherche } from "./recherche"
import { DndContext } from "@dnd-kit/core"
import { useState } from "react"

export function GridCreation() {

    const [inputValue, setInputValue] = useState('')

    return <DndContext onDragEnd={null}>
        <div className="columns">
            <div className="column is-one-quarter">
                <Recherche onChange={setInputValue} inputSearch={inputValue}/>
                <AffichageImage filtered={inputValue}/>
            </div>
            <div className="column">Auto</div>
    </div>
    </DndContext>
    
}