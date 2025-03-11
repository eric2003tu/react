import React,{useState} from 'react'
import './App.css'
import './index.css'
import {AiOutlineClose, AiOutlineMenu,AiOutlineSetting} from 'react-icons/ai';
import { IoSettingsOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import Form from './Components/Form'
import Register from './Components/register'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Login from './Components/Login'
import Dashboard from './Components/dashboard'
import Home from './Components/Home';
import Basic from './Components/basic';

function App() {
  const [nav, setNav] = useState(true);
  const handleHide = function(){
      setNav(!nav)
  }

  return (
<Router>
  {/* <div className='md:w-full  pl-6 bg-[#38be4c] font-bold rounded-9xl text-10xl sm: w-full lg:w-full fixed top-0 right-0 justify-items-end'>
    <div className='justify-items-end md:w-full p-3 m-1 lg:w-full sm:w-full min-w-full bg-green-400 rounded-2xl text-gray-800'>
      <p className=' flex justify-self-start justify-between text-blue-500 font-bold text-[24px] '>E-library</p>
      <ul className='p-1.5 hidden sm:hidden  gap-5 lg:flex md:flex'>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'><Link to='/' className=''>Home</Link></li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'><Link to='/register'>Regiter</Link></li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'><Link to='/login'>Login</Link></li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'>
          <Link to ='/dashboard'>Dashboard</Link>
        </li>
      </ul>
      <div onClick={handleHide} className='block md:hidden lg:hidden sm:block'>

      {!nav ? <AiOutlineClose size={30} className='text-blue-500 font-bold cursor-pointer justify-end justify-self-end'/> : <AiOutlineMenu size={30} className='text-blue-500 font-bold cursor-pointer justify-end justify-self-end'/> }
     </div>
     <div className={!nav ? 'fixed h-fit justify-items-start left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#f9f7fc] ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'fixed left-[-100%]' }>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Find us</h1>
    <ul className='uppercase w-full' >
      <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}><Link to='/' className=''>Home</Link></li>
      <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}><Link to='/register'>Regiter</Link></li>
      <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}><Link to='/login'>Login</Link></li>
      <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}>
          <Link to ='/dashboard'>Dashboard</Link>
        </li>
      <li className='p-4 border-b border-gray-600 cursor-pointer'onClick={handleHide}>Contact</li>
      <li className=' justify-between grid grid-cols-2 gap- border-b border-gray-600 cursor-pointer '>
      <h1 className='m-auto cursor-pointer text-[blue]'>
        Settings
      </h1>
      <h1><IoSettingsOutline size={30} className=' text-[blue] m-auto'/> </h1>
      <h1 className=' m-auto cursor-pointer text-[#675df1] '>
      Contact
      </h1>
         <h1><MdContactMail size={30} className=' text-[#675df1] m-auto'/>
         </h1>
      </li>
    </ul>
  </div>
  </div>
  </div> */}
  <Routes>
    <Route path='/' element=  {<Basic/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/form' element = {<Form/>}/>
    <Route path='/login' element= {<Login/>}/>
    <Route path='/dashboard/*' element={<Dashboard/>}/>

  </Routes>
</Router>
  )
}

export default App
