import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import ImgProfile from './Images/avataredited1.png';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import FlipMove from 'react-flip-move';
import { nanoid } from "nanoid" ;
import './Feed.css';

function Feed() {
     const [posts, setPosts] = useState([]);
     useEffect(() => {
         db.collection('posts').onSnapshot( snapshot => (
             setPosts(snapshot.docs.map(doc => doc.data()))
         ))
     }, [])
    return (
        <div className="feed">
            <div className="feed-header">
                <h2> Home</h2>
            </div>
            <TweetBox/>
            <FlipMove>
                {posts.map(post => (
                    <Post
                    key={nanoid()}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.true}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    />
                ))}
            </FlipMove>
            
        </div>
    )
}
export default Feed;