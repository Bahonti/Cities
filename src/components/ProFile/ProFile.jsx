import React from 'react';
import cl from './ProFile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const ProFile = () => {
    return(
        <div className={cl.content}>
            <div className={cl.phot}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmvbpSkAKUpzeR5Sx-ZTnJR9NQatBHVlkQiU40CnMgnenVsed"/>
            </div>
            <div>
                <div className={cl.phot}><img src="https://d1qhd0c0zfn8ct.cloudfront.net/wp-content/uploads/2017/09/Apple-Logo-black.png"/></div>
                <div></div>
            </div>
            <MyPosts/>
        </div>
    )
}
export default ProFile;