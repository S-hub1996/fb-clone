import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
const Sidebar = () => {
  return (
    <div className="sidebar">
    <SidebarRow Icon='' src='https://avatars.githubusercontent.com/u/94439105?v=4' title='Shubham'/>
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Info"/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Pages"/>
      <SidebarRow Icon={ExpandCircleDownOutlinedIcon} title="See More"/>
    </div>
  )
}

export default Sidebar
