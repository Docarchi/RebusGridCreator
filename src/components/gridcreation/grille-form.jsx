export function GrilleForm({onChangeColumn, onChangeLine, initColumn, initLine}) {

    const column_max = 6
    const line_max = 6

    const column_array = []
    const line_array = []

    for(let i=1; i<column_max+1;i++){column_array.push(<option key={i} value={i}>nombre de colonnes : {i}</option>)}
    for(let i=1; i<line_max+1;i++){line_array.push(<option key={i} value={i}>nombre de lignes : {i}</option>)}

    return <div className="field">
            <GrilleSizeSelection dropdown={column_array} onChange={onChangeColumn} initSize={initColumn}></GrilleSizeSelection>
            <GrilleSizeSelection dropdown={line_array} onChange={onChangeLine} initSize={initLine}></GrilleSizeSelection>
    </div>
    
}

function GrilleSizeSelection({dropdown, onChange, initSize}){
    return <div className="control is-expanded">
        <div className="select is-fullwidth">
            <select onChange={(e) => onChange(e.target.value)} defaultValue={initSize} style={{textAlign:'center'}}>
                {dropdown}
            </select>
        </div>
    </div>
}