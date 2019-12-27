import React from 'react';
import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div >
            <div className={cl.phot}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmvbpSkAKUpzeR5Sx-ZTnJR9NQatBHVlkQiU40CnMgnenVsed"/>
            </div>
            <div>
                <div className={cl.descriptionBlock}>ava + Baga</div>
                <div></div>
            </div>
        </div>
    )
}
export default ProfileInfo;