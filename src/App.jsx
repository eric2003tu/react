import React,{useState} from 'react'
import './App.css'
import './index.css'
import {AiOutlineClose, AiOutlineMenu,AiOutlineSetting} from 'react-icons/ai';
import { IoSettingsOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import Form from './Components/form'
import Register from './Components/register'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Login from './Components/Login'
import Dashboard from './Components/dashboard'
import Home from './Components/Home';

function App() {
  const [nav, setNav] = useState(true);
  const handleHide = function(){
      setNav(!nav)
  }

  return (
<Router>
  <div className='md:w-full  pl-6 bg-white font-bold rounded-9xl text-10xl sm: w-full lg:w-full fixed top-0 right-0 justify-items-end'>
    <div className='justify-items-end md:w-full p-6 m-2 lg:w-full sm:w-full min-w-full bg-white rounded-2xl text-gray-800'>
      <ul className='p-1.5 hidden sm:hidden  gap-5 lg:flex md:flex'>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-green-400 active:text-blue-300'><Link to='/' className=''>Home</Link></li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-green-400 active:text-blue-300'><Link to='/register'>Regiter</Link></li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-green-400 active:text-blue-300'><Link to='/login'>Login</Link></li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-green-400 active:text-blue-300'><Link to='/form'>Form</Link></li>
      </ul>
      <div onClick={handleHide} className='block md:hidden lg:hidden sm:block'>

      {!nav ? <AiOutlineClose size={30} className='text-blue-500 font-bold cursor-pointer'/> : <AiOutlineMenu size={30} className='text-blue-500 font-bold cursor-pointer'/> }
     </div>
     <div className={!nav ? 'fixed h-full justify-items-start left-0 top-0 w-[60%] border-r border-r-gray-900 bg-yellow-100 ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'fixed left-[-100%]' }>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Find us</h1>
    <ul className='uppercase w-full' >
      <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}><Link to='/' className=''>Home</Link></li>
      <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}><Link to='/register'>Regiter</Link></li>
      <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}><Link to='/login'>Login</Link></li>
      <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}><Link to='/form'>Form</Link></li>
      <li className='p-4 border-b border-gray-600 cursor-pointer'onClick={handleHide}>Contact</li>
    </ul>
    <p className={!nav ? 'w-[60%] flex h-full justify-items-start bg-yellow-100 ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'hidden' }>
      You can reach out to us, and we are ready to support everyone. the below are all possible means to reach us out. we are here for every single person.
      <dv className={ !nav ? 'mt-[240] fixed max-w-[100%] p-[3px] bg-emerald-800' : 'hidden'}>
      <h1 className=' mt-[240px] fixed sm:fixed ml-[12%] cursor-pointer text-blue-500 font-[auto] hover:text-[23px]'>
        Settings
      </h1>
      <IoSettingsOutline size={30} className= {!nav ? ' cursor-pointer hover:size-9.5 hover:mr[15px] mt-[240px] ml-[5%] text-blue-500 fixed justify-items-start bg-yellow-100 ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'hidden' } /> 
      <h1 className=' mt-[240px] fixed ml-[38%] cursor-pointer text-blue-500 font-[auto] hover:text-[23px]'>
      Contact us
      </h1>
          <MdContactMail size={30} className= {!nav ? 'z-[-1000] b-[0px] cursor-pointer hover:size-9.5 hover:mr-[15px] mt-[240px] ml-[30%] text-blue-500 fixed justify-items-start bg-yellow-100 ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'hidden' } />
    </dv>
    </p> 
  </div>
  </div>
  </div>
  <Routes>
    <Route path='/' element=  {<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/form' element = {<Form/>}/>
    <Route path='/login' element= {<Login/>}/>
    <Route path='/dashboard/*' element={<Dashboard/>}/>

  </Routes>
</Router>
  )
}

export default App
