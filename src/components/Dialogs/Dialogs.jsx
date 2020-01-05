import React from 'react'
import cl from './Dialogse.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Baga'},
        {id: 2, name: 'shal'},
        {id: 3, name: 'Nurken'},
        {id: 4, name: 'Abdu'},
        {id: 5, name: 'Maga'},
        {id: 6, name: 'Rus'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages.map(m => <Message message={m.message}/>);

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