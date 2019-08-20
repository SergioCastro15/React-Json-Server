import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Header = () =>{
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Sergio Games</Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" activeClassName="active" to="/">Games</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" activeClassName="active" to="/add">Add Games</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;