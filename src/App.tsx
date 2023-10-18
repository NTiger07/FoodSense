import './App.css'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import MainDashBoard from './components/MainDashBoard'
import InventoryContainer from './components/InventoryContainer';

function App() {

  return (
    <div className='w-[100vw] flex'>
      <div className='w-[18%]'>
        <SideBar />
      </div>
      <div className='w-[82%] h-[13vh]'>
          <Routes>
            <Route path='/' element={<MainDashBoard />} />
            <Route path='/inventory' element={<InventoryContainer />} />
          </Routes>
      </div>
      
    </div>


  )
}

export default App
