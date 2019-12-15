import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";
import ProFile from "./components/ProFile/ProFile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";



const App = props => {
    return (
        <BrowserRouter history={props.history}>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" component={ProFile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    {/*<Route path="/profile" component={News}/>
                    <Route path="/dialogs" component={Music}/>
                    <Route path="/dialogs" component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>);
}

export default App;