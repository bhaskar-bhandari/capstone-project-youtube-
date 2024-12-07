const mongoose = require("mongoose");

// youtube-backend

mongoose
  .connect('mongodb://localhost:27017/youtube-backend')
  .then(() => console.log('DB connection successful!')).catch(err=>{
    console.log(err)
  });