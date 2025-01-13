/**
 * 
 * @param {*} onChange 
 * @returns 
 */

export function Recherche({onChange, inputSearch}) {

    return <div className="field" style={{marginTop:'0.75rem'}}>
        <div className="control is-expanded">
            <input 
                className="input is-link" 
                type="text"
                value = {inputSearch}
                placeholder="Entrer un mot clé..."
                onChange={(e) => onChange(e.target.value)}/>
        </div>
    </div>
}