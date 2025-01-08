
import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from '../Context/LanguageContext';


export default function NavBar() {
  

  const { lang, setLang } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

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
            <Link className="nav-link" to="/Favourite">
               favourite
            </Link>
            <Link className="nav-link" to="/Form">
               form
            </Link>
          </div>
        </div>
        <div className="dropdown">
            <select
              className="form-select"
             value={lang}
             onChange={handleLanguageChange}
              style={{ width: "100px" }}
            >
              <option value="en" >EN</option>
              <option value="ar">AR</option>
            </select>
          </div>

      </div>
    </nav>
  

    </>
  );
}
