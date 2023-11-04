import './App.css'
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
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
import SideBar from './components/SideBar';

function App() {
  const userDataLocal = localStorage.getItem('persist:foodsense');
  const userDataLocalJSON = JSON.parse(userDataLocal);


  const removeTrailers = () => {
    const newObj = {};
    for (const key in userDataLocalJSON) {
      if (userDataLocalJSON.hasOwnProperty(key)) {
        let value = userDataLocalJSON[key];
        if (typeof value === 'string' && value.length >= 2 && value[0] === '"' && value[value.length - 1] === '"') {
          // Remove quotes from the string if it has trailing quotes
          value = value.slice(1, -1);
        }
        newObj[key] = value;
      }
    }
    return newObj;
  }

  const trimmedUserData = removeTrailers()
  const location = useLocation()



  return (
    <Provider store={store1}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='relative w-[100vw] flex text-[#fff] h-[100vh] overflow-hidden font-lexend'>
          <div className='absolute'>
            <ToastContainer position='top-center' />
          </div>
          <div className={`${location.pathname == "/auth/login" || location.pathname == "/auth/register" ? "w-[0%]": "w-[5%]"}`}>
            <SideBar />
          </div>
          <div className={`${location.pathname == "/auth/login" || location.pathname == "/auth/register" ? "w-[100%]" : "w-[95%]"} h-[100vh] overflow-x-hidden bg-[#263238]`}>
            <Routes>
              <Route path='/auth/login' element={<Login />} />
              <Route path='/auth/register' element={<Register />} />
              <Route path='/dashboard' element={<DashBoard userData={trimmedUserData} />} />
              <Route path='/inventory' element={<Inventory userData={trimmedUserData} />} />
              <Route path='/assistant' element={<Assistant userData={trimmedUserData} />} />
              <Route path='/analytics' element={<Analytics userData={trimmedUserData} />} />
              <Route path='/education' element={<Education userData={trimmedUserData} />} />
            </Routes>
          </div>
        </div>
      </PersistGate>

    </Provider>




  )
}

export default App
