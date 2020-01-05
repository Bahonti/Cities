import React from 'react'
import cl from './Dialogse.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;