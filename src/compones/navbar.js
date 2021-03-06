import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {/* <NavLink to="/" className=" nav-link ">Home</NavLink> */}

          {/* <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink> */}
        </li>
        <li className="nav-item">
          {/* <NavLink/> */}
          <NavLink to="/About" className="nav-link ">about</NavLink>

          {/* <NavLink className="nav-link" to="/">about</NavLink> */}
        </li>
        <li className="nav-item">
          {/* <NavLink className="nav-link" to="/"></NavLink> */}
          <NavLink to="/text" className=" nav-link ">text</NavLink>

        </li>
      </ul>
      <form className="d-flex">
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} mode</label>
      </div>
        
        {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    
  ) 
}
Navbar.propTypes = {
     title : PropTypes.string,
    contect: PropTypes.string.isRequired 
}
Navbar.defaultProps = {
  title : 'Set.Title',
  contect: 'Set.Contect'  
}