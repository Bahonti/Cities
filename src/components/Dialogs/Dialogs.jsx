import React from 'react'
import cl from './Dialogse.module.css';

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog}>
                    Baga
                </div>
                <div className={cl.dialog}>
                    shal
                </div>
                <div className={cl.dialog}>
                    Nurken
                </div>
                <div className={cl.dialog}>
                    Abdu
                </div>
                <div className={cl.dialog}>
                    Maga
                </div>
                <div className={cl.dialog}>
                    Rus
                </div>
            </div>
            <div className={cl.messages}>
                <div className={cl.message}>Hi</div>
                <div className={cl.message}>How are you?</div>
                <div className={cl.message}>Yo</div>
            </div>
        </div>
    )
}
export default Dialogs;