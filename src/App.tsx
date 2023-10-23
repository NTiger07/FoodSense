import './App.css'
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import SideBar from './components/SideBar'
import DashBoard from './pages/dashboard/DashBoard'
import Inventory from './pages/dashboard/Inventory';
import Assistant from './pages/dashboard/Assistant';
import Education from './pages/dashboard/Education';
import Analytics from './pages/dashboard/Analytics';

function App() {
  return (
    <div className='relative w-[100vw] flex text-[#fff]'>
      <div className='absolute'>
        <ToastContainer position='top-center'/>
      </div>
      <div className='w-[5%]'>
        <SideBar />
      </div>
      <div className='w-[95%] h-[100vh] overflow-y-scroll bg-[#263238]'>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/assistant' element={<Assistant />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </div>

    </div>


  )
}

export default App
