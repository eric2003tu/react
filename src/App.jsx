import React ,{useState}from 'react'
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
  <nav className="w-full bg-blue-600 text-white p-4 fixed top-0 z-[1000] right-0 m-0 sm:pb-[55px] sm:pr-[7px]">
                  <ul className="hidden container mx-auto lg:flex md:flex justify-around sm:hidden">
                      <li><Link to='/' className="hover:text-blue-300">Home</Link></li>
                      <li><Link to='/login' className="hover:text-blue-300">Login</Link></li>
                      <li><Link to='/register' className="hover:text-blue-300">Register</Link></li>
                      <li><Link to='/dashboard' className="hover:text-blue-300">Dashboard</Link></li>
                  </ul>
                  <div onClick={handleHide} className='block md:hidden lg:hidden sm:block sm:pb-[55px] sm:pr-[7px]'>
                       {!nav ? <AiOutlineClose size={30} className='text-white font-bold cursor-pointer justify-end justify-self-end fixed [10px] mt-[18px]'/> : <AiOutlineMenu size={30} className='text-white font-bold cursor-pointer justify-end justify-self-end fixed [10px] mt-[18px]'/> }
                  </div>
                  <div className={!nav ? 'fixed h-fit justify-items-start left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#2f163c] ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'fixed left-[-100%]' }>
                     <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Home page</h1>
                      <ul className="uppercase w-ull space-3 border border-gray-500">
                      <li><Link to='/' className="hover:text-blue-300 p-4 border-b border-gray-600 cursor-pointer" onClick={handleHide}>Home</Link></li>
                          <li><Link to='/login' className="hover:text-blue-300 p-4 border-b border-gray-600 cursor-pointer" onClick={handleHide}>Login</Link></li>
                          <li><Link to='/register' className="hover:text-blue-300 p-4 border-b border-gray-600 cursor-pointer" onClick={handleHide}>Register</Link>
                          </li>
                          <li><Link to='/dashboard' className="hover:text-blue-300 p-4 border-b border-gray-600 cursor-pointer" onClick={handleHide}>Dashboard</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
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
