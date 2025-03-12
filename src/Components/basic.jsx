import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaRegQuestionCircle } from "react-icons/fa";
import {AiOutlineClose, AiOutlineMenu,AiOutlineSetting} 
from 'react-icons/ai';
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";

function Basic() {
    const navigate = useNavigate();
    const [nav, setNav] = useState(true);
    const handleHide = function(){
        setNav(!nav)
    }
    return (
        <div className="min-h-screen bg-gray-100 max-w-full w-full m-0">
            <nav className="w-full bg-blue-600 text-white p-4 fixed top-0 z-[1000] right-0 m-0">
                <ul className="hidden container mx-auto lg:flex md:flex justify-around sm:hidden">
                    <li><Link to='/' className="hover:text-blue-300">Home</Link></li>
                    <li><Link to='/login' className="hover:text-blue-300">Login</Link></li>
                    <li><Link to='/register' className="hover:text-blue-300">Register</Link></li>
                    <li><Link to='/dashboard' className="hover:text-blue-300">Dashboard</Link></li>
                </ul>
                <div onClick={handleHide} className='block md:hidden lg:hidden sm:block'>
                     {!nav ? <AiOutlineClose size={30} className='text-white font-bold cursor-pointer justify-end justify-self-end'/> : <AiOutlineMenu size={30} className='text-white font-bold cursor-pointer justify-end justify-self-end'/> }
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
            <div className="container mx-auto pt-20 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h1 className="bg-blue-900 text-white font-bold p-2 rounded-t-lg">HOW CAN I?</h1>
                    <ul className="space-y-2 mt-2">
                        {["Learn the Library", "Signup for a library workshop", "Access Refworks", "Request interlibrary loan items", "Test my library Skills", "Access alumni resources"].map((item, index) => (
                            <li key={index} className="text-blue-500 hover:text-blue-700 p-2 border-b border-gray-200">
                                <Link to='//'>{item}</Link>
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
                        <Link to='//' className="inline-block bg-black text-white font-bold p-2 rounded mt-2">INTERLIBRARY LOAN</Link>
                    </div>
                    <h1 className="bg-blue-900 text-white font-bold p-2 rounded-lg">POPULAR LIBRARY WORKSHOPS</h1>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h1 className="bg-blue-900 text-white font-bold p-2 rounded-t-lg">NEED HELP? ASK US!</h1>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <FaRegQuestionCircle size={25} />
                        <span className="font-bold">Ask us</span>
                        <MdEmail size={25} />
                        <span className="font-bold">Email Us</span>
                        <span className="col-span-2 text-green-500">Email us with your question</span>
                        <BiSolidMessageRounded size={25} />
                        <span className="font-bold">Chat with Us</span>
                        <button className="col-span-2 bg-black text-white font-bold p-2 rounded">Chat with us</button>
                        <span className="col-span-2">Available during library staffed hours referenced below</span>
                        <IoIosPhonePortrait size={25} />
                        <span className="font-bold">Call Us</span>
                        <span className="col-span-2">Phone: +250788876534</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basic;