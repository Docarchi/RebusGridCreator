import { AffichageImage } from "./affichage-images"
import { Recherche } from "./recherche"
import { DndContext } from "@dnd-kit/core"

export function GridCreation() {
    return <DndContext onDragEnd={null}>
        <div className="columns">
            <div className="column is-one-quarter">
                <Recherche/>
                <AffichageImage/>
            </div>
            <div className="column">Auto</div>
    </div>
    </DndContext>
    
}