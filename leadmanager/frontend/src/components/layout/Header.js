import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
 render() {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Lead Manager</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     <li className="nav-item">
       <Link to="/register" className="nav-link">Sign Up</Link>
     </li>
     <li className="nav-item">
     <Link to="/login" className="nav-link">Login</Link>
     </li>
    </ul>
  </div>
</nav>
  )
 }
}

export default Header
