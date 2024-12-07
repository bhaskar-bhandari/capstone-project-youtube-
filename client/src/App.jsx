import { useState,useEffect } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Video from './pages/Video/Video'
import Profile from './pages/Profile/Profile'
import SignUp from './pages/SignUp/SignUp'
import axios from 'axios'


function App() {
  const [sideNavbar, setSideNavbar] = useState(true)

  // useEffect(()=>{
  //    axios.get('http://localhost:4000/api/allVideo').then(res=>{
  //     console.log(res)
  //    }).catch(err=>{
  //     console.log(err)
  //    })
  // },[])

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value)
  }

  return (
    <div className='App'>
      <NavBar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path='/' element={<Home sideNavbar={sideNavbar} />} />
        <Route path='/watch/:id' element={<Video/>}/>
        <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar} />}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>

    </div>
  )
}

export default App


// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// import AppLayout from './components/AppLayout'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<AppLayout/>,
//     children:[
//       {

//       }
//     ]
//   }
// ])

// const App = () => {
//   return (
//     <>
//       < RouterProvider router = {router}/>
//     </>
//   )
// }

// export default App
