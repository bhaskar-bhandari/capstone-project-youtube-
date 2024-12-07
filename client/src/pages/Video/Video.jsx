import React, { useEffect, useState } from 'react'
import './video.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Video = () => {

  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [videoUrl, setVideoURL] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const fetchVedioById = async () => {
    await axios.get(`http://localhost:4000/api/getVideoById/${id}`).then((response) => {
      console.log(response.data.video);
      setData(response.data.video)
      setVideoURL(response.data.video.videoLink)
    }).catch(err => {
      console.log(err);
    })
  }

  const getCommentByVideoId = async () => {
    await axios.get(`http://localhost:4000/commentApi/comment/${id}`).then((response) => {
      console.log(response);
      setComments(response.data.comments)
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchVedioById();
    getCommentByVideoId();
  }, [])

  return (
    <div className='video'>
      <div className="videoPostSection">
        <div className="video-youtube">
          {
            data && <video width="400" controls autoPlay className='video-youtube-video'>
            <source src={videoUrl} type='video/mp4' />
            <source src={videoUrl} type='video/webm' />

            your browser does not support
          </video>
          }
          <video width="400" controls autoPlay className='video-youtube-video'>
            <source src="https://www.youtube.com/embed/i0hcUGj6uoQ?si=lkczpypXIU3g2RRE" type='video/mp4' />
            <source src="https://www.youtube.com/embed/i0hcUGj6uoQ?si=lkczpypXIU3g2RRE" type='video/webm' />

            your browser does not support
          </video>
        </div>

        <div className="video-youtubeAbout">
          <div className="video-utubeTitle">{"Volkswagen India Gets $1.4 Billion Tax Evasion Notice by Centre | Explained By Ankit Agarwal"}</div>
          <div className="youtube-video-profileBlock">
            <div className="youtube-video-profileBlock-left">
              <Link to={'/user/2'} className="youtube-video-profileBlock-left-img">
                <img className='youtube-video-profileBlock-left-image' src={"https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj"} alt="" />
              </Link>
              <div className="youtubeVideo-subsView">
                <div className="youtubePostProfileName">{"User1"}</div>
                <div className="youtubePostProfileSubs">{"2027-07-09"}</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>

            </div>

            <div className="youtube-video-likeBlock">
              <div className="youtube-video-likeBlock-like">
                <ThumbUpOffAltIcon />
                <div className="youtube-video-likeBlock-noOfLikes">{32}</div>
              </div>
              <div className="youtubeVideoDivider"></div>
              <div className="youtube-video-likeBlock-like">
                <ThumbDownOffAltIcon />
              </div>
            </div>
          </div>
          <div className="youtube-video-about">
            <div>2024-9-30</div>
            <div>Know Your Company</div>
          </div>
        </div>

        <div className="youtubeCommentSection">
          <div className="youtubeCommentSectionTitle">2 Comments</div>

          <div className="youtubeSelfComment">
            <img className='video-youtubeSelfCommentProfile' src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="" />

            <div className="addAComment">
              <input type="text" className='addACommentInput' placeholder='add a comment' />
              <div className="cancelSubmitComment">
                <div className="cancelComment">Cancel</div>
                <div className="cancelComment">Comment</div>
              </div>
            </div>
          </div>

          <div className="youtubeOthersComments">

            <div className="youtubeSelfComment">
              <img className='video-youtubeSelfCommentProfile' src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="" />
              <div className="others-commentSection">
                <div className="others-commentSectionHeader">
                  <div className="channelName-comment">UserName</div>
                  <div className="commentTimmingOthers">2024-0-8</div>
                </div>

                <div className="otherCommentSectionComment">
                  hello this is good
                </div>
              </div>
            </div>

            <div className="youtubeSelfComment">
              <img className='video-youtubeSelfCommentProfile' src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="" />
              <div className="others-commentSection">
                <div className="others-commentSectionHeader">
                  <div className="channelName-comment">UserName</div>
                  <div className="commentTimmingOthers">2024-0-8</div>
                </div>

                <div className="otherCommentSectionComment">
                  hello this is good
                </div>
              </div>
            </div>

            <div className="youtubeSelfComment">
              <img className='video-youtubeSelfCommentProfile' src="https://yt3.googleusercontent.com/QPIqzejjM8oT7WTEMeDe6NgkKtuHYVFs_ReoQK3lMohik9L4Z3cExDzzeCG-wwGEFCgFV6itww=s160-c-k-c0x00ffffff-no-rj" alt="" />
              <div className="others-commentSection">
                <div className="others-commentSectionHeader">
                  <div className="channelName-comment">UserName</div>
                  <div className="commentTimmingOthers">2024-0-8</div>
                </div>

                <div className="otherCommentSectionComment">
                  hello this is good
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="videoSuggestions">
        <div className="videoSuggestionsBlock">
          <div className="video_suggetion_thumbnail">
            <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
            <div className="video_suggetions_About_Profile">Cricket 320</div>
            <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggetion_thumbnail">
            <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
            <div className="video_suggetions_About_Profile">Cricket 320</div>
            <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="video_suggetion_thumbnail">
            <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
            <div className="video_suggetions_About_Profile">Cricket 320</div>
            <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Video
