import React from 'react';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ProFile from "./components/ProFile";


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
