import React from "react";
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender";
import Post from "./Post"
const Feed = () => {
  return(
    <div className="feed">
        <StoryReel/>
        <MessageSender/> 
        {/* <Post
        key={id}
        profilePic={profilePic}
        message={message}
        timestamp={timestamp}
        username={username}
        image={image}
        />  */}
        <Post
        profilePic="https://avatars.githubusercontent.com/u/94439105?v=4"
        message="this is a post!"
        // timestamp=""
        username="Shubham"
        image="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/280614749_3234925750167847_5149730103490425969_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=5cd70e&_nc_ohc=ma80VmjUerAAX9zBVzN&tn=0L53bHHrXFmAKf_C&_nc_ht=scontent-del1-2.xx&oh=00_AT8k4-eEQT_qg2h2LwbecWvfdlbUkIVpOs7p-5O_zxUXLw&oe=62874250"
        /> 
        <Post/> 
      </div>
  );

};

export default Feed;
