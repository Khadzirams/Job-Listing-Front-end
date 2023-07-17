import React from 'react'
import JobImg from "../assets/istockphoto-693293382-612x612.jpg"


function JobSection() {
  return (
    <div>
      <section className="pt-20">
            <div className="container mx-auto">
                <div className="mb-9">
                    <h2 className="text-3xl font-extrabold ">GET YOUR DREAM JOB TODAY</h2>
                </div>
                <div className="grid grid-cols-3 gap-10">
                   
                    <img src={JobImg} alt="JOB-IMG"/>  
                    <img src={JobImg} alt="JOB-IMG"/>
                    <img src={JobImg} alt="JOB-IMG"/>
                   
                </div>
            </div>
        </section>
    </div>
  )
}

export default JobSection
