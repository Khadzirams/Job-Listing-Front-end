import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListingPage from "../Pages/ListingPage";

function useForm({ additionalData }) {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/ListingPage')
    setStatus('loading');
    setMessage('');
    

    const finalFormEndpoint = e.target.action;
    const data = Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

    if (additionalData) {
      Object.assign(data, additionalData);
    }

    fetch(`${import.meta.env.VITE_API_URL}/job_listing`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("Job posted successfully.");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
  };

  return { handleSubmit, status, message };
}

export default useForm;