import React from 'react';
import cl from './ProFile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProFile = () => {
    return(
        <div >
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
export default ProFile;