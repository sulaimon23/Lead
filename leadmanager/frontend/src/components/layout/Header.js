import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

export class Header extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };


  render() {
    
    const { isAuthenticated,user } = this.props.auth;

  const authLinks = (
    <ul className="navbar-nav ml-auto">
     <li className="nav-item">
      <span className="navbar-text mr-3 ">
        <strong>
        {user ? `Welcome ${user.username}` : ''}
        </strong>
      </span>
       <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
         Logout
       </button>
     </li>
    </ul>
  )

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
     <li className="nav-item">
       <Link to="/register" className="nav-link">Sign Up</Link>
     </li>
     <li className="nav-item">
     <Link to="/login" className="nav-link">Login</Link>
     </li>
    </ul>
  )




  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Lead Manager</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  {isAuthenticated ? authLinks : guestLinks}
  </div>
  </nav>
  )
 }
}

const mapStateToProps = state => ({
  auth: state.auth
}); 


export default connect(mapStateToProps, {logout})(Header)
