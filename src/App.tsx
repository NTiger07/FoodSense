import './App.css'
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import DashBoard from './pages/dashboard/DashBoard'
import Inventory from './pages/dashboard/Inventory';
import Assistant from './pages/dashboard/Assistant';
import Education from './pages/dashboard/Education';
import Analytics from './pages/dashboard/Analytics';
import Login from './pages/auth/Login';
import { AuthProvider } from './context/auth';
import Register from './pages/auth/Register';

function App() {

  return (
    <AuthProvider>
      <div className='relative w-[100vw] flex text-[#fff]'>
        <div className='absolute'>
          <ToastContainer position='top-center' />
        </div>
        <div className='w-[100%] h-[100vh] overflow-y-scroll bg-[#263238]'>
          <Routes>
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/assistant' element={<Assistant />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/education' element={<Education />} />
          </Routes>
        </div>

      </div>
    </AuthProvider>
    


  )
}

export default App
