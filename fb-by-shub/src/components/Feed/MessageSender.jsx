import React,{useState} from 'react'
import "./MessageSender.css"
import {Avatar} from "@mui/material"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../../StateProvider';


const MessageSender = () => {
const [{user},dispatch]= useStateValue();
const [input,setInput] = useState('')
const [imageUrl,setImageUrl] = useState('')

const handleSubmit = (e)=> {
e.preventDefault();

setInput("");
setImageUrl("");
}



  return (
    <div className="messageSender">
      <div className="messageSender_top">
      <Avatar src={user.photoURL}/>
          <form>
              <input type="text" placeholder={`What's on Your Mind ?${user.displayName}`}
              className="messageSender_input"
              value={input}
              onChange={(e)=>setInput(e.target.value)}/>
              <input value={imageUrl}
              onChange={(e)=>setImageUrl(e.target.value)} placeholder="image url (Optional)"/>
              <button type="submit" onClick={handleSubmit}>
                  Hidden Submit
              </button>
          </form>
      </div>
      <div className="messageSender_bottom">
          <div className="messageSender_option">
              <VideocamIcon style={{color:"red"}}/>
              <h3>Live Video</h3>

          </div>
          <div className="messageSender_option">
              <PhotoLibraryIcon style={{color:"green"}}/>
              <h3>Photo/Video</h3>

          </div>
          <div className="messageSender_option">
              <InsertEmoticonIcon style={{color:"orange"}}/>
              <h3>Feeling/Activity</h3>

          </div>


      </div>
    </div>
  )
}

export default MessageSender
