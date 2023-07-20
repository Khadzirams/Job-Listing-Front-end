import { Link, useNavigate } from "react-router-dom";
import useForm from "./useForm";
import ListingPage from "../Pages/ListingPage";

const FORM_ENDPOINT =`${import.meta.env.VITE_API_URL}/job_listing`; 

const Form = () => {
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    additionalData,
  });

  if (status === "success") {

    return (
      <>
        <div className="text-md">{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div className="text-2xl">Something bad happened!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  return (
    <form className="bg-black pt-10"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    > 
      <div className=" flex justify-between mt-0 mx-5">
        <Link to='/'>
       <div> <h1 className=" font-extrabold text-xl text-white">K~Tech~Jobs</h1></div>
       </Link>

       <Link to='/ListingPage'>
       <div><button className="border-2 py-2 px-4 font-bold rounded-2xl text-white cursor-pointer "> JOB LIST</button></div>
       </Link>
       </div>
      <div className=" mt-10 ">
        <label className="text-white">Job Title</label>
        <input
          type="text"
          placeholder="job_title"
          name="job_title"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <label className="text-white">Address</label>
        <input
          type="text"
          placeholder="address"
          name="address"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <label  className="text-white">About Company</label>
        <input
          type="text"
          placeholder="about_company"
          name="about_company"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <label  className="text-white">Employement</label>
        <input
          type="text"
          placeholder="employement"
          name="employement"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <label  className="text-white">Roles and Responsibilities</label>
        <input
          type="text"
          placeholder="roles_responsibilities"
          name="roles_responsibilities"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 flex flex-col">
      <label  className="text-white">Experience</label>
        <input
          type="text"
          placeholder="experience"
          name="experience"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <label  className="text-white">Qualifications</label>
        <textarea
          placeholder="qualification"
          name="qualification"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      {status !== "loading" && (
        <div className="mb-3  align-middle">
          <button
            className="border-2 py-2 px-8 font-bold rounded-2xl text-white cursor-pointer "
            type="submit"
          >
           Post Job
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;