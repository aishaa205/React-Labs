
import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBar() {


  return (
    
    <>
    <nav style={{backgroundColor: "#acaaad",marginTop:"0px"}} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          Movie App
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              home
            </Link>
            <Link className="nav-link" to="/movie-details">
              details
            </Link>
            <Link className="nav-link" to="/watchList">
               watch list
            </Link>
          </div>
        </div>
      </div>
    </nav>
  

    </>
  );
}
