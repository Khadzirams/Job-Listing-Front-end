import React from 'react'
import { Link } from 'react-router-dom'
import PostJobs from '../Pages/PostJobs'
import ListingPage from '../Pages/ListingPage'
import logo from "../assets/job-logo.png"
import heroImg from "../assets/pexels-photo-9832700.jpeg"

const Home = () => {
  return (
    <div className="bg-black py-3">
      <div className="container mx-auto flex  justify-between">
        <Link to='/'>
        <h1 className=" font-extrabold text-xl text-white">Tech~Jobs</h1>
        </Link>
        <Link to='/PostJobs'>
        <button className="border-2 py-2 px-4 font-bold rounded-2xl text-white cursor-pointer "> POST JOB</button>
        </Link>
        <Link to='/ListingPage'>
        <button className="border-2 py-2 px-4 font-bold rounded-2xl text-white cursor-pointer "> JOB LIST</button>
        </Link>
      
      </div>
      </div>
  
  
  )
}

export default Home

