import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import DashBoard from './pages/dashboard/DashBoard'
import Inventory from './pages/dashboard/Inventory';
import Assistant from './pages/dashboard/Assistant';
import Education from './pages/dashboard/Education';
import Analytics from './pages/dashboard/Analytics';

function App() {
  return (
    <div className='w-[100vw] flex'>
      <div className='w-[18%]'>
        <SideBar />
      </div>
      <div className='w-[82%] h-[13vh]'>
        <Router>
          <Routes>
            <Route path='/' element={<DashBoard />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/assistant' element={<Assistant />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/education' element={<Education />} />
          </Routes>
        </Router>

      </div>

    </div>


  )
}

export default App
