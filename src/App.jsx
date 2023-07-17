import {Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage';
import PostJobs from './Pages/PostJobs';
import ListingPage from './Pages/ListingPage';
import MoreInfo from './Pages/MoreInfo';




function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage />} /> 
    <Route path='/PostJobs/' element={<PostJobs/>}/>
    <Route path='/ListingPage/' element={<ListingPage/>}/>
    <Route path='/MoreInfo/:job_title/:address/:about_company/:employement/:roles_responsibilities/:qualification/:experience' element={<MoreInfo/>}/>
    </Routes>
    </>
  )
}

export default App;
