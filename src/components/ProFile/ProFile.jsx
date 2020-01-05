import React from 'react';
import cl from './ProFile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProFile = (props) => {

    return(
        <div >
            <ProfileInfo/>
            <MyPosts post={props.state.post}/>
        </div>
    )
}
export default ProFile;