import React,{useEffect,useState} from 'react'
import './homePage.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = ({ sideNavbar }) => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:4000/api/allVideo').then(res => {
      console.log(res.data.videos)
      setData(res.data.videos);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  const options = ["All", "React", 'Javascript', "Gaming", 'Democracy', "cricket", 'iskon', 'ipl', 'Dynamic cables', 'Podcast', 'Comedy', 'Mixes', 'Recently Uploaded', 'Stock Market', 'PodCast', 'Portfolio', 'Movies']

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>

      <div className='homePage-options'>
        {
          options.map((item, index) => {
            return (
              <div key={index} className="homePage-option">
                {item}
              </div>
            )
          })
        }

      </div>

      <div className={sideNavbar ? "home-mainPage" : 'home-mainPageWithoutLink'}>

        {
          data?.map((item,ind)=>{
            return (
              <Link to={`/watch/${item._id}`} className="youtubeVideo">

              <div className="youtube-thumbnailBox">
                <img src={item.thumbnail} alt="thumbnail" className="youtube-thumnailPic" />
                <div className="youtube-timingThumbnail">
                  33
                </div>
              </div>
    
              <div className="youtube-titleBox">
                <div className="youtube-titleBoxProfile">
                  <img src={item?.user?.profilePic} alt="profile" className="youtube-thumbnail-profile" />
                </div>
                <div className="youtube-titleBox-title">
                  <div className="youtube-videoTitle">{item?.title}</div>
                  <div className="youtube-channelName">{item?.user?.channelName}</div>
                  <div className="youtubeVideo-views">{item?.like}</div>
                </div>
    
              </div>
    
            </Link>
            )
          })
        }

  

        <Link to={'/watch/2'} className="youtubeVideo">

          <div className="youtube-thumbnailBox">
            <img src="https://img.youtube.com/vi/i0hcUGj6uoQ/maxresdefault.jpg" alt="thumbnail" className="youtube-thumnailPic" />
            <div className="youtube-timingThumbnail">
              33
            </div>
          </div>

          <div className="youtube-titleBox">
            <div className="youtube-titleBoxProfile">
              <img src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtube-titleBox-title">
              <div className="youtube-videoTitle">User1</div>
              <div className="youtube-channelName">Study iq</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>

          </div>

        </Link>


        <Link to={'/watch/2'} className="youtubeVideo">

          <div className="youtube-thumbnailBox">
            <img src="https://img.youtube.com/vi/i0hcUGj6uoQ/maxresdefault.jpg" alt="thumbnail" className="youtube-thumnailPic" />
            <div className="youtube-timingThumbnail">
              33
            </div>
          </div>

          <div className="youtube-titleBox">
            <div className="youtube-titleBoxProfile">
              <img src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtube-titleBox-title">
              <div className="youtube-videoTitle">User1</div>
              <div className="youtube-channelName">Study iq</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>

          </div>

        </Link>
        <Link to={'/watch/2'} className="youtubeVideo">

          <div className="youtube-thumbnailBox">
            <img src="https://img.youtube.com/vi/i0hcUGj6uoQ/maxresdefault.jpg" alt="thumbnail" className="youtube-thumnailPic" />
            <div className="youtube-timingThumbnail">
              33
            </div>
          </div>

          <div className="youtube-titleBox">
            <div className="youtube-titleBoxProfile">
              <img src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtube-titleBox-title">
              <div className="youtube-videoTitle">User1</div>
              <div className="youtube-channelName">Study iq</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>

          </div>

        </Link>

        <Link to={'/watch/2'} className="youtubeVideo">

          <div className="youtube-thumbnailBox">
            <img src="https://img.youtube.com/vi/i0hcUGj6uoQ/maxresdefault.jpg" alt="thumbnail" className="youtube-thumnailPic" />
            <div className="youtube-timingThumbnail">
              33
            </div>
          </div>

          <div className="youtube-titleBox">
            <div className="youtube-titleBoxProfile">
              <img src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtube-titleBox-title">
              <div className="youtube-videoTitle">User1</div>
              <div className="youtube-channelName">Study iq</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>

          </div>

        </Link>

        <Link to={'/watch/2'} className="youtubeVideo">

          <div className="youtube-thumbnailBox">
            <img src="https://img.youtube.com/vi/i0hcUGj6uoQ/maxresdefault.jpg" alt="thumbnail" className="youtube-thumnailPic" />
            <div className="youtube-timingThumbnail">
              33
            </div>
          </div>

          <div className="youtube-titleBox">
            <div className="youtube-titleBoxProfile">
              <img src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="profile" className="youtube-thumbnail-profile" />
            </div>
            <div className="youtube-titleBox-title">
              <div className="youtube-videoTitle">User1</div>
              <div className="youtube-channelName">Study iq</div>
              <div className="youtubeVideo-views">3 Likes</div>
            </div>

          </div>

        </Link>


      </div>


    </div>
  )
}

export default HomePage


// [ { "videoId": "video01", "title": "Learn React in 30 Minutes", "thumbnailUrl":
//   "https://example.com/thumbnails/react30min.png", "description": "A quick tutorial to get started
//   with React.", "channelId": "channel01", "uploader": "user01", "views": 15200, "likes": 1023,
//   "dislikes": 45, "uploadDate": "2024-09-20", "comments": [ { "commentId": "comment01", "userId":
//   "user02", "text": "Great video! Very helpful.", "timestamp": "2024-09-21T08:30:00Z" } ] }