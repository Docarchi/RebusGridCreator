export function GrilleForm({onChangeColumn, onChangeLine}) {

    const column_max = 6
    const line_max = 6

    const column_array = []
    const line_array = []

    for(let i=1; i<column_max+1;i++){column_array.push(<option key={i} value={i}>{i}</option>)}
    for(let i=1; i<line_max+1;i++){line_array.push(<option key={i} value={i}>{i}</option>)}

    return <div className="fixed-grid">
        <div className="grid">
            <GrilleSizeSelection label="nombre de colonnes :" dropdown={column_array} onChange={onChangeColumn}></GrilleSizeSelection>
            <GrilleSizeSelection label="nombre de lignes :" dropdown={line_array} onChange={onChangeLine}></GrilleSizeSelection>
        </div>
    </div>
    
}

function GrilleSizeSelection({label, dropdown, onChange}){
    return <div className="cell" key={label} style={{justifySelf:"center"}}>
        <div className="field has-addons">
            <div className="button is-ghost">{label}</div>
            <div className="select is-link">
                <select onChange={(e) => onChange(e.target.value)} defaultValue={4}>
                    {dropdown}
                </select>
            </div>
        </div>
    </div>
}