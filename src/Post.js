import React, { forwardRef, useState } from "react";
import { Avatar } from '@material-ui/core';
import './Post.css';
import ImgProfile from './Images/avataredited1.png';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import { red } from "@material-ui/core/colors";

const  Post = forwardRef(({displayName, username, avatar, verified, image, text}, ref) => {
    const [likeCount, setlikeCount] = useState(0);
    const [retweetCount, setretweetCount] = useState(0); 

    const incrementMe = (e) => {
        let newCount = likeCount + 1;
        setlikeCount(newCount)
        e.target.style.color = "red";
    }
    const retweeted = (e) => {
        let newCount = retweetCount + 1;
        setretweetCount(newCount)
        e.target.style.color = "#50b7f5";   
    }

    return (
        <div className="post" ref={ref}>
            <div className="post-avatar">
            <Avatar src={avatar} />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>
                            {displayName}{' '}
                            <span className="post-headerSpecial">
                                {verified && <VerifiedUserIcon className="post-badge"/>}
                                <p>{username}</p>
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="post"/>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon 
                    onClick={retweeted}
                    fontSize="small"/><p className="incrementCount">{retweetCount}</p>
                    <FavoriteBorderIcon 
                    onClick={incrementMe}
                    fontSize="small"/><p className="incrementCount">{likeCount}</p>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
});
export default Post;