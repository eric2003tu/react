import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import {AiOutlineClose, AiOutlineMenu,AiOutlineSetting} 
from 'react-icons/ai';

function Dashhome() {
    const navigate = useNavigate();
    const [nav, setNav] = useState(true);
    const handleHide = function(){
        setNav(!nav);
    }
    return (
        <div className="min-h-screen bg-gray-100 max-w-full w-full m-0">
            <nav className="w-full bg-blue-600 text-white p-4 fixed top-0 z-[1000] right-0 m-0 flex justify-between items-center">
            <h1 className="font-bold">E-LIBRARY</h1>
                <ul className="hidden container mx-auto lg:flex md:flex justify-around sm:hidden">
                    <li><Link to='/dashboard' className="hover:text-blue-300">Home</Link></li>
                    <li><Link to='/dashboard/notifications' className="hover:text-blue-300">Notification</Link></li>
                    <li><Link to='/dashboard/profile' className="hover:text-blue-300">Profile</Link></li>
                    <li><Link to='/dashboard/posts' className="hover:text-blue-300">Posts</Link></li>
                    <li><Link to='/dashboard/users' className="hover:text-blue-300">Users</Link></li>
                    <li><Link to ='/' id='logout' className='text-red-600 font-bold hover:text-red-400' onClick={() => navigate('/')}>Logout</Link></li>
                </ul>
                <div onClick={handleHide} className='block md:hidden lg:hidden sm:block ml-auto'>
                    {!nav ? <AiOutlineClose size={30} className='text-white font-bold cursor-pointer'/> : <AiOutlineMenu size={30} className='text-white font-bold cursor-pointer'/> }
                </div>
            </nav>
            <div className={!nav ? 'fixed h-fit justify-items-start left-0 mt-[32px] pb-[10px] w-[40%] border-r border-r-gray-900 bg-[#5147d9] ease-in-out duration-600 sm:fixed flex-wrap md:hidden lg:hidden' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-[14px] font-bold text-[#00df9a]'>Dash board</h1>
                <ul className="uppercase w-full">
                    <li className="border-b border-t border-gray-400 w-full pb-[10px]"><Link to='/dashboard' className="text-white hover:text-green-300" onClick={handleHide}>Home</Link></li>
                    <li className="border-b border-gray-400 w-full pb-[10px]"><Link to='/dashboard/notifications' className="text-white hover:text-green-300" onClick={handleHide}>Notification</Link></li>
                    <li className="border-b border-gray-400 w-full pb-[10px]"><Link to='/dashboard/profile' className="text-white hover:text-green-300" onClick={handleHide}>Profile</Link></li>
                    <li className="border-b border-gray-400 w-full pb-[10px]"><Link to='/dashboard/posts' className="text-white hover:text-green-300" onClick={handleHide}>Posts</Link></li>
                    <li className="border-b border-gray-400 w-full pb-[10px]"><Link to='/dashboard/users' className="text-white hover:text-green-300" onClick={handleHide}>Users</Link></li>
                    <li className="border-b border-gray-400 w-full pb-[10px]"><Link to ='/' id='logout' className='text-red-600 font-bold hover:text-red-400' onClick={() => navigate('/')}>Logout</Link></li>
                </ul>
            </div>
            <div className="container mx-auto pt-20 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h1 className="bg-blue-900 text-white font-bold p-2 rounded-t-lg">HOW CAN I?</h1>
                    <ul className="space-y-2 mt-2">
                        {["Learn the Library", "Signup for a library workshop", "Access Refworks", "Request interlibrary loan items", "Test my library Skills", "Access alumni resources"].map((item, index) => (
                            <li key={index} className="text-blue-500 hover:text-blue-700 p-2 border-b border-gray-200">
                                <Link to='/'>{item}</Link>
                            </li>
                        ))}
                    </ul>
                    <h1 className="bg-blue-900 text-white font-bold p-2 rounded-b-lg mt-4">RESOURCE OF THE MONTH</h1>
                </div>
                <div className="col-span-2 bg-white p-4 shadow rounded-lg">
                    <h1 className="font-black text-xl">NorthCentral University Library</h1>
                    <div className="flex flex-wrap gap-2 my-4">
                        {["Roadrunner search", "Find a resource", "Library guides", "Ask librarian"].map((item, index) => (
                            <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4 my-4">
                        <select className="border-2 border-gray-400 p-2 rounded-md">
                            <option value="Key1">Key1</option>
                            <option value="Key2">Key2</option>
                            <option value="Key3">Key3</option>
                        </select>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="fullText" />
                            <label htmlFor="fullText">Full Text</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="peers" />
                            <label htmlFor="peers">Peers</label>
                        </div>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                    <div className="text-right">
                        <Link to="/dash" className="text-blue-600 hover:text-blue-800 font-bold">Advanced Search</Link>
                    </div>
                    <div className="bg-indigo-900 text-white p-4 rounded-lg my-4">
                        <h1 className="font-bold">CAN'T FIND IT IN THE LIBRARY?</h1>
                        <p>WE WILL GET IT FOR YOU.</p>
                        <Link to='/' className="inline-block bg-black text-white font-bold p-2 rounded mt-2">INTERLIBRARY LOAN</Link>
                    </div>
                    <h1 className="bg-blue-900 text-white font-bold p-2 rounded-lg">POPULAR LIBRARY WORKSHOPS</h1>
                </div>
            </div>
        </div>
    );
}
export default Dashhome;
