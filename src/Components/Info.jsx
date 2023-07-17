/* import { useEffect, useState } from "react";
import React from 'react'

const Info = () => {
  const [JobInfo, setJobInfo] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/listing')
             .then(resp => resp.json())
             .then(resp => {
              setJobInfo(resp.job_listing)
                 console.log(resp)
             })
             .catch(error => {
                 console.log(error)
             })
       }, [])
  return (
    <div>
      <div>
        <h1 className="font-bold"> JobInfo</h1>
        <ul>
        { JobInfo.map(Job => (
                        
                        <li>{Job.jc} {Job.address} {Job.about_company} {Job.employement}{Job.roles_responsibilities} {Job.qualification}{Job.experience}</li>
                   
                ) ) }
        </ul>
        
      </div>

    </div>
  )
}

export default Info
 */