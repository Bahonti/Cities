import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={cl.posts}>
                <Post massage='Hi, how are you?' likesCount='99'/>
                <Post massage="It's my first post" likesCount='13'/>
            </div>
        </div>
    )
}
export default MyPosts;