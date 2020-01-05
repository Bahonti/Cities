import React from 'react'
import cl from './../Dialogse.module.css';
import { Link } from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return(
        <div className={cl.dialog + ' ' + cl.active}>
            <Link to={path}> {props.name} </Link>
        </div>
    )
}
export default DialogItem;