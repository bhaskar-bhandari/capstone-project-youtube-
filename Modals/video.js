
const { default: mongoose } = require('mongoose');
const Video = require('../Modals/video');
const { type } = require('os');

const videoSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }, 
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    videoLink:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    videoType:{
        type:String,
        default:"All"
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports = mongoose.model('video',videoSchema);


exports.uploadVideo = async (req,res)=>{
    try{
        const { title, description, videoLink, videoType,thumbnail }  = req.body;
        
         // please watch the video for the code

        res.status(201).json({ sucess: "true", videoUpload });


    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


exports.getAllVideo = async(req,res)=>{
    try{
        const videos = await Video.find().populate('user','channelName profilePic userName createdAt');
         // please watch the video for the code
        res.status(201).json({ sucess: "true", "videos": videos });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.getVideoById = async (req,res)=>{
    try{
        let {id} = req.params;
         // please watch the video for the code

        res.status(201).json({ sucess: "true", "video": video });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.getAllVideoByUserID = async(req,res)=>{
    try{
        let {userId} = req.params;
        const video = await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt about');
        res.status(201).json({ sucess: "true", "video": video });

    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}