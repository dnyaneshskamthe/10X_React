import React from "react";
import LandingPage from "./components/LandingPage";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Postview from './components/Postview';
import './App.css';
export default function App(){
    return(
        <div className="wrapper">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/PostView' element={<Postview />}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}
