import React from 'react'
import cl from './../Dialogse.module.css';

const Message = (props) => {
    return(
        <div className={cl.message}>{props.message}</div>
    )
}

export default Message;