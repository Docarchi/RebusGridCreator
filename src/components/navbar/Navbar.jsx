import { Link } from 'react-router-dom'
import myicon from '/32.svg'

export function Navbar() {
    return <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/RebusGridCreator/Home/">
        <img src={myicon} width="80" height="160"/>
        </a>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/RebusGridCreator/RebusGridCreator/">
            Création de grilles
          </Link>
    
          <a className="navbar-item">
            À propos
          </a>
        </div>
    
      </div>
    </nav>
    
}