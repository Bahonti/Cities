import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return(
        <div className={c.item}>
            <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"/>
            <span>{props.massage}</span>
            <div>
                <span>like </span>{props.likesCount}
            </div>
        </div>
    )
}
export default Post;