import './App.css';
import React, { Suspense, useState} from "react";
import {useSelector } from "react-redux";
//import NavBar from './components/NavBar';
//import Details from './pages/Details';
//import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from "react-router";
import LanguageContext from './Context/LanguageContext';

//import Movie from './components/Movie';
//import Favourite from './pages/Favourite';
//import Form from './pages/Form';

const NavBar  = React.lazy(()=>import ('./components/NavBar'));
const Details = React.lazy(()=>import ('./pages/Details'));
const NotFound  = React.lazy(()=>import ('./pages/NotFound'));
const Movie  = React.lazy(()=>import ('./components/Movie'));
const Favourite  = React.lazy(()=>import ('./pages/Favourite'));
const Form  = React.lazy(()=>import ('./pages/Form'));

function App() {

  const [lang, setLang] = useState("en");
  //const language = useSelector((state) => state.language.currentLanguage);
  return (
    <>
    <BrowserRouter>
    <LanguageContext.Provider value={{lang,setLang}}>
    <div dir={lang === "ar" ? "rtl" : "ltr"}
          className={lang === "ar" ? "text-right" : "tet-left"}
    >
    <NavBar/>
    <div className="container my-5">
      <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route path="/" element={<Movie/>} />
        <Route path="/movie-details/:id" element={<Details/>} />
        <Route path="/Favourite" element={<Favourite/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
   
    </div>
    </div>
    </LanguageContext.Provider>
    </BrowserRouter>
   

    </>
  )
}

export default App
