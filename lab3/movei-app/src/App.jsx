import './App.css';
import React from "react";
import NavBar from './components/NavBar';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from "react-router";
import Movie from './components/Movie';
import Favourite from './pages/Favourite';
import Form from './pages/Form';


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <div className="container my-5">
      <Routes>
        <Route path="/" element={<Movie/>} />
        <Route path="/movie-details/:id" element={<Details/>} />
        <Route path="/Favourite" element={<Favourite/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
   
    </div>

    
    </BrowserRouter>
   

    </>
  )
}

export default App
