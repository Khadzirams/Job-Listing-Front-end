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
        <h1 className=" font-extrabold text-xl text-white"> K~Tech~Jobs</h1>
        </Link>
        <Link to='/ListingPage'>
        <button className="border-2 py-2 px-4 font-bold rounded-2xl text-white cursor-pointer "> BACK</button>
        </Link>
        </div>
        <div className="flex  flex-col gap-10 mt-10 ">
               <button className="border-2 py-2 px-4 font-bold rounded-2xl text-white bg-black cursor-pointer w-50% align-middle">Job-title:{job_title}<br/>Job-Address:{address}<br/>About-company:{about_company}<br/>Employement-Type:{employement}<br/>Roles and responsibilities{roles_responsibilities}<br/>Qualification:{qualification}<br/>Experience:{experience}</button>     
        </div>
      </div>
  
  )
}

export default MoreInfo
