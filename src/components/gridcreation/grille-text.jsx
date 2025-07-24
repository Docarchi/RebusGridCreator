export function GrilleTitle({onChange, initText}) {
    return <div className="field" style={{marginTop:'0.75rem'}}>
        <label htmlFor="grilletitle" className="label">Titre de la grille</label>
        <div className="control">
            <input className="input" defaultValue={initText != 'undefined'? initText:""} type="text" id="grilletitle" placeholder="Titre..." onChange={(e)=>onChange(e.target.value)}/>
        </div>
  </div>
}

export function GrilleDescription({onChange, initText}){
    return <div className="field">
        <label htmlFor="grilledescription" className="label">Description de la grille</label>
        <div className="control">
            <textarea className="textarea" id="grilledescription" defaultValue={initText != 'undefined'? initText:""} placeholder="Description..." onChange={(e)=>onChange(e.target.value)}></textarea>
        </div>
  </div>
}

export function GrilleObjectif({objectives , setter}) {

    const objectivesItems = []
    for (let i = 0; i < objectives.length; i++) {
        objectivesItems.push(
            <Objectif nombre={i+2} value={objectives[i]} onClick={setter[i]} key={i+2}/>
        )
        
    }

    return <table className="table" style={{margin:'auto'}}>
        <thead>
            <tr>
                <th style={{textAlign:'center'}}>taille du rébus</th>
                <th style={{textAlign:'center'}}>nombre</th>
            </tr>
        </thead>
        <tbody>
            {objectivesItems}
        </tbody>
</table>
}

function Objectif({nombre, value, onClick}) {
    return <tr>
    <td style={{textAlign:'center', verticalAlign:'middle'}}>{nombre} images</td>
    <td>
        <div className="field has-addons">
            <div className="control">
                <div className="button" onClick={() => onClick(Math.max(value-1, 0))}>
                    <span className="icon is-small">
                        <i className="fa-solid fa-minus"></i>
                    </span>
                </div>
            </div>
            <div className="control">
                <div className="button is-static" type="text">{value}</div>
            </div>
            <div className="control">
                <div className="button" onClick={() => onClick(value+1)}>
                    <span className="icon is-small">
                        <i className="fa-solid fa-plus"></i>
                    </span>
                </div>
            </div>
            
        </div>
    </td>
</tr>
}

export function ExportButton({onClick, data}) {
    return <div className="field">
        <button className="button is-primary is-fullwidth" style={{margin:'auto'}} onClick={() => onClick({data})}>
            Télécharger la grille
        </button>
    </div>   
}

export function ResetButton({onClick, data}) {
    return <div className="field">
        <button className="button is-danger is-fullwidth" style={{margin:'auto'}} onClick={() => onClick(data)}>
            Réinitialiser la grille
        </button>
    </div>   
}