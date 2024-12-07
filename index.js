const express = require('express')
const app = express()
const port = 4000
const cookieParser = require('cookie-parser')
const cors = require('cors')



app.use(cors({
    origin: 'http://localhost:5173', // Your React app's URL
    credentials: true
  }))


app.use(express.json())
app.use(cookieParser())
require('./Connection/conn')

const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');
const CommentRoutes = require('./Routes/comment');

app.use('/auth',AuthRoutes);
app.use('/api',VideoRoutes);
app.use('/commentApi',CommentRoutes);



app.listen(port,()=>{
    console.log('port is listening')
})