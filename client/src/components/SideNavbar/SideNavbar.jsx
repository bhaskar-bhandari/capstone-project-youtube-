import React from 'react'
import './sideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const SideNavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar?'home-sideNavbar':'homeSideNavbarHide'}>
      <div className="home-sideNavbarTop">
        <div className={`home-sideNavbarTopOption`}>
          <HomeIcon />
          <div className="home-sideNavbarTopOptionTitle">Home</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <VideocamIcon />
          <div className="home-sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <SubscriptionsIcon />
          <div className="home-sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>

      <div className="home-sideNavbarMiddle">
        <div className={`home-sideNavbarTopOption`}>
        <div className="home-sideNavbarTopOptionTitle">You</div>
          <ChevronRightIcon />  
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <RecentActorsIcon />
          <div className="home-sideNavbarTopOptionTitle">Your Channel</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <HistoryIcon />
          <div className="home-sideNavbarTopOptionTitle">History</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <PlaylistPlayIcon />
          <div className="home-sideNavbarTopOptionTitle">PlayList</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <SmartDisplayIcon />
          <div className="home-sideNavbarTopOptionTitle">Your Videos</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <MovieFilterIcon />
          <div className="home-sideNavbarTopOptionTitle">Your Movies</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <WatchLaterIcon />
          <div className="home-sideNavbarTopOptionTitle">Watch Later</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <ThumbUpAltIcon />
          <div className="home-sideNavbarTopOptionTitle">Liked Videos</div>
        </div>

      </div>

      <div className="home-sideNavbarMiddle">
        <div className="home-sideNavbarTopOption">
          <div className="home-sideNavbarTopOptionTitleHeader">Subscription</div>   
        </div>

        <div className="home-sideNavbarTop">
        <div className={`home-sideNavbarTopOption`}>
          <HomeIcon />
          <div className="home-sideNavbarTopOptionTitle">Home</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <VideocamIcon />
          <div className="home-sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className={`home-sideNavbarTopOption`}>
          <SubscriptionsIcon />
          <div className="home-sideNavbarTopOptionTitle">Subscription</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SideNavbar
