import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {Avatar,IconButton} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { useStateValue } from '../../StateProvider';
const Header = () => {

  const [{user},dispatch]= useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png" alt="" />
        <div className="header_input">
        <SearchIcon/>
        <input type="text" placeholder='Search Facebook'/>
        </div>
        
      </div>
      
      <div className="header_center">
            <div className="header_option header_option--active">
              <HomeIcon fontSize="large"/>
            </div>
            <div className="header_option ">
              <OndemandVideoIcon fontSize="large"/>
            </div>
            <div className="header_option">
              <StorefrontIcon fontSize="large"/>
            </div>
            <div className="header_option">
              <GroupsIcon fontSize="large"/>
            </div>
            <div className="header_option">
              <SportsEsportsIcon fontSize="large"/>
            </div>
      </div>
      
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <EmailIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <IconButton>
        <ExpandCircleDownSharpIcon/>
        </IconButton>


      </div>
    </div>
  )
}

export default Header
