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
import Basic from './basic';
import Dashhome from './dashHome';
function Dashboard(){
    const navigate = useNavigate();
      const [nav, setNav] = useState(true);
      const handleHide = function(){
          setNav(!nav)
      }
return(
    <div>
        <nav className="w-full bg-blue-600 text-white p-4 fixed top-0 z-[1000] right-0 m-0">
                        <ul className="hidden container mx-auto lg:flex md:flex justify-around sm:hidden">
                            <li><Link to='/dashboard' className="hover:text-blue-300">Home</Link></li>
                            <li><Link to='/dashboard/notifications' className="hover:text-blue-300">Notification</Link></li>
                            <li><Link to='/dashboard/profile' className="hover:text-blue-300">Profile</Link></li>
                            <li><Link to='/dashboard/posts' className="hover:text-blue-300">Posts</Link></li>
                            <li><Link to='/dashboard/users' className="hover:text-blue-300">Users</Link></li>
                            <li><Link to ='/' id='logout' className='logout' onClick={function(){
                                navigate('/');
                            }}>
                            Logout
                            </Link></li>
                        </ul>
                        <div onClick={handleHide} className='block md:hidden lg:hidden sm:block'>
                        {!nav ? <AiOutlineClose size={30} className='text-white font-bold cursor-pointer justify-end justify-self-end'/> : <AiOutlineMenu size={30} className='text-white font-bold cursor-pointer justify-end justify-self-end'/> }
                        </div>
                        <div className={!nav ? 'fixed h-full justify-items-start left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#271246] ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'fixed left-[-100%]' }>
                        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Dash board</h1>
                        <ul className="uppercase w-full">
                            <li><Link to='/dashboard' className="hover:text-blue-300" onClick={handleHide}>Home</Link></li>
                            <li><Link to='/dashboard/notifications' className="hover:text-blue-300" onClick={handleHide}>Notification</Link></li>
                            <li><Link to='/dashboard/profile' className="hover:text-blue-300" onClick={handleHide}>Profile</Link></li>
                            <li><Link to='/dashboard/posts' className="hover:text-blue-300" onClick={handleHide}>Posts</Link></li>
                            <li><Link to='/dashboard/users' className="hover:text-blue-300" onClick={handleHide}>Users</Link></li>
                            <li><Link to ='/' id='logout' className='logout' onClick={function(){
                                 navigate('/');
                        }}>Logout</Link></li>
                        </ul>
                        </div>
                    </nav>
    <Routes>
        <Route index element = {<Dashhome/>}/>
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