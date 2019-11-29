import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";
import ProFile from "./components/ProFile/ProFile";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <ProFile/>
    </div>
  );
}

export default App;
