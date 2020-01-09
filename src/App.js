import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";
import ProFile from "./components/ProFile/ProFile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";



const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <ProFile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>} />
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    {/*<Route path="/profile" component={News}/>
                    <Route path="/dialogs" component={Music}/>
                    <Route path="/dialogs" component={Settings}/>*/}
                </div>
            </div>);
}

export default App;