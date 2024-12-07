# YouTube Clone

A fully functional YouTube clone built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

-User authentication (signup, login, logout)

-Video upload and streaming

-Commenting on videos

-Video listing and individual video details

-Subscription and liking system (partial implementation)

## Tech Stack

## Frontend

- React for building user interfaces

- React Router for routing

- Axios for HTTP requests

- Material-UI Icons for UI components

## Backend

- Node.js and Express.js for building the API

- MongoDB as the database

- Mongoose for object data modeling

- bcrypt.js for password hashing

- jsonwebtoken for authentication

- cookie-parser for handling cookies

- Setup and Installation

## Prerequisites

- Node.js and npm installed

- MongoDB server running locally or a connection string to a MongoDB database

## Steps to Run

## Clone the repository:

- git clone <repository-url>
- cd <repository-directory>

## Install dependencies for both frontend and backend:

- cd frontend
- npm install

- cd ../backend
- npm install

## Configure the backend:

- In the backend directory, configure your MongoDB connection in Connection/conn.js.

- Update the secret keys and any environment-specific settings.

## Start the backend server:

- cd backend
- node index.js

## Start the frontend development server:

- cd frontend
- npm run dev

## Open the application in your browser at http://localhost:5173 (default React development server port).

## API Endpoints

## Auth

- POST /auth/signup: Register a new user

- POST /auth/signin: Login

- POST /auth/logout: Logout

## Videos

- GET /api/getAllVideo: Fetch all videos

- GET /api/getVideoById/:id: Fetch video by ID

- POST /api/uploadVideo: Upload a video

- GET /api/getAllVideoByUserID/:userId: Fetch all videos uploaded by a specific user

## Comments

- POST /commentApi/addComment: Add a comment to a video

- GET /commentApi/comment/:videoId: Fetch all comments for a specific video


