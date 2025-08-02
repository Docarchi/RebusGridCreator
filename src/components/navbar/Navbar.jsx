import { Link } from 'react-router-dom'
import myicon from '/32.svg'

export function Navbar() {
    return <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to='/Home/'>
        <img src={myicon} width="80" height="160"/>
        </Link>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start" style={{margin:'auto'}}>
          <Link className="navbar-item" to='/Home/'>
            Accueil
          </Link>
          <Link className="navbar-item" to='/GridCreation/'>
            Créer une grille
          </Link>
          <Link className="navbar-item" to='/About/'>
            À propos
          </Link>
        </div>
    
      </div>
    </nav>
    
}