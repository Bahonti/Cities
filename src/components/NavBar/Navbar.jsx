import React from 'react';
import cl from './NavBar.module.css';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <Link to="/profile" activeClassName={cl.active}>Profile</Link>
            </div>
            <div className={cl.item}>
                <Link to="/dialogs">Messages</Link>
            </div>
            <div className={cl.item}>
                <Link to="/news">News</Link>
            </div>
            <div className={cl.item}>
                <Link to="/music">Music</Link>
            </div>
            <div className={cl.item}>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    )
}
export default NavBar;