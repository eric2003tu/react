import React from 'react';
import {AiOutlineClose, AiOutlineUser} from 'react-icons/ai';

const Form = () => {
  return (
    <div className='mt-[120px] border-white border-[3px] rounded-2xl m-t[3px] flex lg:w-[50%] md:w-full sm:w-full bg-[#fff] m-auto h-fit justify-self-center justify-items-center shadow-lg p-[20px] flex-col'>
        <h1 className='text-[#7254a6] font-bold text-3xl w-1/2 ml-[30%] '>REGISTER HERE</h1>
    <form className='mt-[26px] border-[#f3f3c7] border-[3px] pt-[1px] w-full h-fit flex flex-col justify-items-center rounded-2xl bg-[#e9efe9] shadow-lg lg:w-full md:w-full sm:w-full'>
        <AiOutlineClose size={35} className='text-[green] ml-[93%] bg-[black] mt-[0] rounded-2xl'/>
    <label htmlFor='Name' className='font-bold text-2xl '>Name</label>
        <input type='text' name='Name' placeholder='Enter some text here.'  className='w-[40%] border-[white] border-b-2 ml-[30%] focus:border-green-500 hover:border-cyan-300 p-1.5 justify-items-center rounded-[7px] sm:w-[60%] lg:w-[30%] md:w-[40%]' />
        <label htmlFor='Name' className='font-bold text-2xl '>Name</label>
        <input type='text' name='Name' placeholder='Enter some text here.'  className='w-[40%] border-[white] border-b-2 ml-[30%] focus:border-green-500 hover:border-cyan-300 p-1.5 justify-items-center rounded-[7px] sm:w-[60%] lg:w-[30%] md:w-[40%]' />
        <label htmlFor='Name' className='font-bold text-2xl '>Name</label>
        <input type='text' name='Name' placeholder='Enter some text here.'  className= 'w-[40%] border-[white] border-b-2 ml-[30%] focus:border-green-500 hover:border-cyan-300 p-1.5 justify-items-center rounded-[7px] sm:w-[60%] lg:w-[30%] md:w-[40%]'/>
        <label htmlFor='Name' className='font-bold text-2xl '>Name</label>
        <input type='text' name='Name' placeholder='Enter some text here.'  className='w-[40%] border-[white] border-b-2 ml-[30%] focus:border-green-500 hover:border-cyan-300 p-1.5 justify-items-center rounded-[7px] sm:w-[60%] lg:w-[30%] md:w-[40%]' />
        <label htmlFor='Name' className='font-bold text-2xl '>Name</label>
        <input type='text' name='Name' placeholder='Enter some text here.'  className='w-[40%] border-[white] border-b-2 ml-[30%] focus:border-b-green-500 hover:border-b-cyan-300 p-1.5 justify-items-center rounded-[7px] sm:w-[60%] lg:w-[30%] md:w-[40%]' />
        <button type='submit'className='ml-[30%] mt-[10px] inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 w-fit'
>
  Submit
</button>
    </form>
    </div>
  );
};

export default Form; 