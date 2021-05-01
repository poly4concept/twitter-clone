import { Avatar, Button } from '@material-ui/core';
import React, { useState }from "react";
import './TweetBox.css';
import db from './firebase'
import ImgProfile from './Images/avataredited1.png';

function TweetBox() {
    const [tweetMessage, settweetMessage] = useState("");
    const [tweetImage, settweetImage] = useState("");


    const onChangeMessage = (e => settweetMessage(e.target.value));
    const onChangeImage = (e => settweetImage(e.target.value));
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Alhazan Mubarak',
            username: 'alhazanM',
            verified: 'true',
            text: tweetMessage,
            avatar: 'https://pbs.twimg.com/profile_images/1294687929256890369/DZmb8MIv.jpg',
            image: tweetImage
        });

        settweetImage('');
        settweetMessage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox-input">
                    <Avatar src='https://pbs.twimg.com/profile_images/1294687929256890369/DZmb8MIv.jpg'/>
                    <input
                     onChange={onChangeMessage}
                     value={tweetMessage} 
                     placeholder="what's happening" 
                     type="text"/> 
                </div>
                <input 
                value={tweetImage}
                onChange={onChangeImage}
                placeholder="image url:optional" 
                className="tweetBox-imageinput" 
                type="text"/>
                <Button 
                type='submit' onClick={sendTweet} className="tweetBox-tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox;