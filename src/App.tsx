import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard'
import Inventory from './pages/dashboard/Inventory';
import Assistant from './pages/dashboard/Assistant';
import Education from './pages/dashboard/Education';
import Analytics from './pages/dashboard/Analytics';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import SideBar from './components/Common/SideBar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate()
  const user = useSelector(state => state.user);

  // useEffect(() => {
  //   if (user == null) {
  //     navigate("/auth/login")
  //   }
  // }, [])
  
  const location = useLocation()



  return (
    <div className='relative w-[100vw] flex text-[#fff] h-[100vh] overflow-hidden font-lexend'>
      <div className='absolute'>
        <ToastContainer position='top-center' />
      </div>
      <div className={`${location.pathname == "/auth/login" || location.pathname == "/auth/register" ? "w-[0%]" : "w-[5%]"}`}>
        <SideBar />
      </div>
      <div className={`${location.pathname == "/auth/login" || location.pathname == "/auth/register" ? "w-[95%]" : "w-[100%]"} h-[100vh] overflow-x-hidden bg-[#263238]`}>
        <Routes>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard userData={user} />} />
          <Route path='/inventory' element={<Inventory userData={user} />} />
          <Route path='/assistant' element={<Assistant userData={user} />} />
          <Route path='/analytics' element={<Analytics userData={user} />} />
          <Route path='/education' element={<Education userData={user} />} />
        </Routes>
      </div>
    </div>


  )
}

export default App
