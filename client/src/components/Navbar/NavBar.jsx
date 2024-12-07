import React, { useState,useEffect } from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link,useNavigate } from 'react-router-dom';
import LogIn from '../Login/LogIn';


const NavBar = ({setSideNavbarFunc,sideNavbar}) => {
  const [userPic, setUserPic] = useState("https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png")
  const [navbarModal, setNavbarModel] = useState(false)
  const [login,setLogin] = useState(false)
  const [isLogedIn,setIsLogedIn] = useState(false)

  const navigate = useNavigate()

  const handleClick = () => {
    setNavbarModel(prev => !prev)
  }
  
  const sideNavBarFunc = ()=>{
    setSideNavbarFunc(!sideNavbar)
  }

  const handleprofile = ()=>{
    let userId = localStorage.getItem("userId")
    navigate(`/user/${userId}`);

    navigate('/user/2')
    setNavbarModel(false)
  }

  const setLoginModal = ()=>{
    setLogin(false)
  }
  
  const onclickOfPopUpOption = (button) => {
    setNavbarModel(false)
     if(button === 'login'){
         setLogin(true)
     }
     else{
      localStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate('/')
        window.location.reload();
      }, 2000);
     }
  }

  const getLogoutFun = async()=>{
    axios.post("http://localhost:4000/auth/logout",{},{ withCredentials: true}).then((res)=>{
      console.log("Logout ")
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLogedIn(localStorage.getItem("userId")!==null?true:false);
    if(userProfilePic!==null){
      setUserPic(userProfilePic)
    }

  },[])

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className="navbarhamburger" onClick={sideNavBarFunc}>
          <MenuIcon sx={{ color: "white" }} />
        </div>

        <Link to={'/'} className="navbar-youtube-image">
          <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar-youtube-icon' />
          <div className="navbar-youtube-title">YouTube</div>
        </Link>

      </div>

      <div className="navbar-middle">
        <div className="navbar-searchBox">
          <input type="text" placeholder='Search' className='navbar-searchBoxInput' />
          <div className="navbar-searchIconBox">
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>
        </div>
      </div>

      <div className="navbar-right">
        <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <img src={userPic} onClick={handleClick} className='navbar-right-logo' alt="logo" />

        {navbarModal &&
          <div className="navbar-model">
            {isLogedIn &&  <div className="navbar-model-option" onClick={handleprofile}>Profile</div>}
            {isLogedIn && <div className="navbar-model-option" onClick={()=>onclickOfPopUpOption('logout')}>LogOut</div>} 
            {!isLogedIn && <div className="navbar-model-option" onClick={()=>onclickOfPopUpOption('login')}>LogIn</div>}
            
          </div>
        }
      </div>

      {
        login && <LogIn setLoginModal={setLoginModal}/>
      }
    </div>
  )
}

export default NavBar


//https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png