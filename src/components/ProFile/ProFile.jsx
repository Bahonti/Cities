import React from 'react';
import cl from './ProFile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProFile = (props) => {

    return(
        <div >
            <ProfileInfo/>
            <MyPosts post={props.profilePage.post}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
export default ProFile;