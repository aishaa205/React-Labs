import './App.css';
import React from "react";
import NavBar from './components/NavBar';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from "react-router";

import Movie from './components/Movie';
import WatchList from './pages/WatchList';


function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <div className="container my-5">
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie-details/:id" element={<Details/>} />
        <Route path="/watchList" element={<WatchList/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
   
    </div>

    
    </BrowserRouter>
   

    </>
  )
}

export default App
