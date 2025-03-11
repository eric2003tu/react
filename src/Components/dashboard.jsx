import React,{useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';  // ✅ Correct imports
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import {AiOutlineClose, AiOutlineMenu,AiOutlineSetting} 
from 'react-icons/ai';
import { IoSettingsOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import About from './about';
import Notifications from './notifications';
import Profile from './profile';
import Posts from './Posts';
import Greeting from './Greeting';
import Fetchusers from './Fetchusers';
import DashHome from './dashHome';
import Home from './Home';
function Dashboard(){
    const navigate = useNavigate();
    // if(localStorage.getItem("isLogedIn") !== 'true'){
    //     navigate('/');
    //     return;
    // }
    // else{
      const [nav, setNav] = useState(true);
      const handleHide = function(){
          setNav(!nav)
      }
return(
    <div >
    <nav className='md:w-full  pl-6 bg-[#38be4c] font-bold rounded-9xl text-10xl sm: w-full lg:w-full fixed top-0 right-0 justify-items-end'>
        <div id='links' className='justify-items-end md:w-full p-3 m-1 lg:w-full sm:w-full min-w-full bg-green-400 rounded-2xl text-gray-800'>
        <p className=' flex justify-self-start justify-between text-blue-500 font-bold text-[24px] '>Dashboard</p>
            <ul className='p-1.5 hidden sm:hidden  gap-5 lg:flex md:flex'>
       <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'>
        <Link to='/dashboard' id='home'><MdOutlineHome />
        </Link>
        </li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'>
            <Link to = '/dashboard/notifications' id='notifications'>
        <IoNotificationsOutline />
        </Link>
        </li>
       <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'>
        <Link  id='profile' >
        <CgProfile />
        </Link>
        </li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'>
            <Link to = '/dashboard/about' id='link'>About</Link>
        </li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'>
            <Link to='/dashboard/users' id='link'>Users</Link> 
        </li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'>
            <Link to ='/dashboard/posts' id='link'>Posts</Link>
        </li>
        <li className='text-blue-500 text-[24px] cursor-pointer hover:text-blue-400 active:text-blue-300'>
            <Link to ='/' id='logout' className='logout' onClick={function(){
            localStorage.setItem("isLogedIn",false);
            navigate('/');
        }}>
            <IoMdLogOut />
        </Link>
        </li>
        </ul>
        <div onClick={handleHide} className='block md:hidden lg:hidden sm:block'>
        
              {!nav ? <AiOutlineClose size={30} className='text-blue-500 font-bold cursor-pointer justify-end justify-self-end'/> : <AiOutlineMenu size={30} className='text-blue-500 font-bold cursor-pointer justify-end justify-self-end'/> }
        </div>
        <div className={!nav ? 'fixed h-fit justify-items-start left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#f9f7fc] ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'fixed left-[-100%]' }>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Dash board</h1>
        <ul className='uppercase w-full' >
            <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}><Link to='/dashboard' className=''>Home</Link></li>
            <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}>           
                <Link to = '/dashboard/notifications' id='notifications'>
                    Notifications
                </Link>
            </li>
            <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={handleHide}>
                <Link to='/dashboard/profile' >
                    Profile
                </Link>
            </li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'onClick={handleHide}>
                <Link to = '/dashboard/about' id='link'>
                About
                </Link>
            </li >
            <li className='p-4 border-b border-gray-600 cursor-pointer'onClick={handleHide}>
            <Link to='/dashboard/users' id='link'>Users</Link> 
            </li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'onClick={handleHide}>
            <Link to ='/dashboard/posts' id='link'>Posts</Link>
            </li>
            <li className='p-4 border-b border-gray-600 cursor-pointer'onClick={handleHide}>
                <Link to ='/' id='logout' className='logout' onClick={function(){
                localStorage.setItem("isLogedIn",false);
                navigate('/');
                }}>
                Logout
                </Link>
            </li>
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
</nav>
    <Routes>
        <Route index element = {<Home/>}/>
        <Route path ='about' element = {<About/>}/>
        <Route path = 'notifications' element = {<Notifications/>}/>
        <Route path=' profile' element = {<Profile/>}/>
        <Route path = 'users' element = {<Fetchusers/>}/>
        <Route path = 'posts' element = {<Posts/>}/>
        <Route path ='greeting' element = {<Greeting/>}/>
    </Routes>
    </div>
);}

export default Dashboard;