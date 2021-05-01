import React from "react";
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
                <div className="widgets-input">
                    <SearchIcon className="widgets-SearchIcon"/>
                    <input placeholder="Search Twitter" type="text"/>
                </div>
                <div className="widgets-widgetsContainer">
                    <h2>What's happening</h2>
                    <TwitterTweetEmbed
                        tweetId={'1351426107099246592'}
                    />
                    <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="alhazanM"
                    options={{height: 400}}
                    />
                    <TwitterMomentShare
                        momentId={'650667182356082688'}
                    />
                </div>
        </div>
    )
}
export default Widgets;