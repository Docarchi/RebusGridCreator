import { GrilleForm } from "./grille-form"

export function AffichageGrille({sizeColumn, sizeLine, onChangeColumn, onChangeLine}) {

    const nb_column = sizeColumn
    const nb_line = sizeLine

    const lines = []
    for(let i = 0; i < nb_line; i++){
        for(let j = 0; j < nb_column; j++){
            lines.push(<div className="cell" key={i.toString()+j.toString()} style={{border:"1px solid black", width:'128px', height:'128px'}}>Cell {i}{j}</div>)
        }
    }

    return <div>
        <GrilleForm onChangeColumn={onChangeColumn} onChangeLine={onChangeLine}/>
        <div className={'fixed-grid has-'+nb_column+'-cols'}>
            <div className="grid" style={{width:(8*nb_column+0.75*(nb_column-1)).toString()+'rem', margin:"auto"}}>
                {lines}
            </div>
        </div>
    </div>
}