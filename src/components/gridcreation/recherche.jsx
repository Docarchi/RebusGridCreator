/**
 * 
 * @param {*} onChange 
 * @returns 
 */

export function Recherche({onChange, inputSearch}) {

    return <div className="field">
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