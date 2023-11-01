import './App.css'
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import DashBoard from './pages/dashboard/DashBoard'
import Inventory from './pages/dashboard/Inventory';
import Assistant from './pages/dashboard/Assistant';
import Education from './pages/dashboard/Education';
import Analytics from './pages/dashboard/Analytics';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { Provider } from 'react-redux';
import store1, { persistor } from "../src/redux/store"
import { PersistGate } from 'redux-persist/es/integration/react';

function App() {

  return (
    <Provider store={store1}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
      
    </Provider>




  )
}

export default App
