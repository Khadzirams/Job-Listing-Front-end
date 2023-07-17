import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import HomePage from "./HomePage";
import ListingPage from "./ListingPage";


const MoreInfo =() => {
  let {job_title,address,about_company,employement,roles_responsibilities,qualification,experience}= useParams()
  

  return (
       <div>
        <div className=" flex justify-between  bg-black py-3">
          <Link to='/'>
        <h1 className=" font-extrabold text-xl text-white">Tech~Jobs</h1>
        </Link>
        <Link to='/ListingPage'>
        <button className="border-2 py-2 px-4 font-bold rounded-2xl text-white cursor-pointer "> BACK</button>
        </Link>
        </div>
        <div className="flex  flex-col gap-10 mt-10">
               <button className="border-2 py-2 px-4 font-bold rounded-2xl text-white bg-black cursor-pointer w-50% ">{job_title}<br/>{address}<br/>{about_company}<br/>{employement}<br/>{roles_responsibilities}<br/>{qualification}<br/>{experience}</button>     
        </div>
      </div>
  
  )
}

export default MoreInfo
