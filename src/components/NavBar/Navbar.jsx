import React from 'react';
import cl from './NavBar.module.css';


const NavBar = () => {
    return(
        <nav className={cl.nav}>
            <div className={`${cl.item} ${cl.active}`}>
                <a>Profile</a>
            </div>
            <div className={cl.item}>
                <a>Messages</a>
            </div>
            <div className={cl.item}>
                <a>News</a>
            </div>
            <div className={cl.item}>
                <a>Music</a>
            </div>
            <div className={cl.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}
export default NavBar;