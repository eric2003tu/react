import React from 'react'
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
return (
<Router>
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
