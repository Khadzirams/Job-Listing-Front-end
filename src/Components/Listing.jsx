import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'



const Listing = () => {
  const [JobList, setJobList] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/listing`)
             .then(resp => resp.json())
             .then(resp => {
              setJobList(resp.job_listing)
                 console.log(resp)
             })
             .catch(error => {
                 console.log(error)
             })
       }, [])
  return (
       <section>
       <div className="bg-black py-3">
      <div className="container mx-auto flex justify-between">
      <Link to='/'>
        <h1 className=" font-extrabold text-xl text-white"> Tech~Jobs</h1>
      </Link>

      <Link to='/PostJobs'>
      <div> <button className="border-2 py-2 px-4 font-bold rounded-2xl text-white cursor-pointer ">ADD NEW JOB</button></div>
      </Link>
      </div>
      </div>
      <div className=' container mx-auto mt-10'>
      <div>
        <h3 className="font-bold text-3xl cursor-pointer hover:bg-green"> Information Technology Jobs</h3>
        </div>
        <div className="flex  flex-col gap-10 mt-10">
        { JobList.map(Job => (
          <Link to={`/MoreInfo/${Job.job_title}/${Job.address}/${Job.about_company}/${Job.employement}/${Job.roles_responsibilities}/${Job.qualification}/${Job.experience}`}>
         <button className="border-2 py-2 px-4 font-bold rounded-2xl text-white bg-black cursor-pointer w-full "><span className="material-symbols-outlined align-middle" >
        work
        </span> {Job.job_title}:<span className="material-symbols-outlined align-middle">location_on</span>{Job.address}</button>
         </Link>    
                ) ) }
        </div>
      </div>
      </section>
  )
}

export default Listing
