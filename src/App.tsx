import './App.css'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'; import HeadBoard from './components/HeadBoard'
import SideBar from './components/SideBar'
import MainDashBoard from './components/MainDashBoard'

function App() {

  return (
    <div className='w-[100vw] flex'>
      <div className='w-[18%]'>
        <SideBar />
      </div>
      <div className='w-[82%] h-[13vh]'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainDashBoard />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>


  )
}

export default App
