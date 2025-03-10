import React from 'react';
import { FaFacebookF  } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
function Home(){
    return(
<div id='all' className='lg:w-full md:w-full sm:w-full mt-[100px]'>
<div id='contents' className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
<div id='words' className=''>
Welcome to [Your Company Name], where innovation meets excellence. We are dedicated to providing top-quality [products/services] tailored to meet your unique needs. Whether you're looking for [specific product/service] or seeking expert advice, our team is here to guide you every step of the way. Explore our offerings and discover how we can help you achieve your goals with ease and efficiency.<br/><br/>

At [Your Company Name], we believe in building lasting relationships with our clients. Our commitment to customer satisfaction drives everything we do. From the moment you reach out to us, you'll experience a level of service that sets us apart. We pride ourselves on delivering solutions that are not only effective but also sustainable, ensuring long-term success for you and your business.<br/><br/>

Join our growing community of satisfied customers who trust [Your Company Name] to deliver results. With years of experience and a passion for innovation, we are your trusted partner in [industry/field]. Let us help you navigate the challenges of today and unlock the opportunities of tomorrow. Get started today and see the difference we can make together.
</div>
<div id = 'image' className='sm:h-7'> <img id='img1' src='https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.jpg?s=612x612&w=0&k=20&c=vRcxdgfHSFJkow6DNPtaL9DT_ttdMGWel-qRLEzkQEI=' alt='images'/>
</div>
<div id='words'>
Welcome to [Your Company Name], where innovation meets excellence. We are dedicated to providing top-quality [products/services] tailored to meet your unique needs. Whether you're looking for [specific product/service] or seeking expert advice, our team is here to guide you every step of the way. Explore our offerings and discover how we can help you achieve your goals with ease and efficiency.<br/><br/>

At [Your Company Name], we believe in building lasting relationships with our clients. Our commitment to customer satisfaction drives everything we do. From the moment you reach out to us, you'll experience a level of service that sets us apart. We pride ourselves on delivering solutions that are not only effective but also sustainable, ensuring long-term success for you and your business.<br/><br/>

Join our growing community of satisfied customers who trust [Your Company Name] to deliver results. With years of experience and a passion for innovation, we are your trusted partner in [industry/field]. Let us help you navigate the challenges of today and unlock the opportunities of tomorrow. Get started today and see the difference we can make together.
</div>
<div id='image'>
    <img id='img2' src='https://images.pexels.com/photos/1837726/pexels-photo-1837726.jpeg' alt='book'/>
</div>
</div>
<div id= 'bottom'><p id='abouta' className='cursor-pointer text-blue-500 font-bold  hover:text-green-400 active:text-blue-300 justify-self-center text-[26px]'>About Us</p>
<div id ='about' className='grid lg:grid-cols-2 gap-2'>
    <div>
    We are E-library, a big company in charge of  library managemnts .
    we have invested our everything in having all Rwandans with a lot of opportunities to read books from wherever they may be.
     we offer services like borrowing, and magaging borrowed book for all kind of library like school libraries, 
     public library and private libraries! </div>
<div>
Get in touch with us through the Contact Us section, where you'll find all the ways to reach us. We're open 24/7, ready to assist every individual in sharpening their skills, expanding their knowledge, and advancing their research. Our dedicated team is always on standby to provide guidance, ensuring you receive the best support possible.
</div>
</div>
<p id='conta' className='cursor-pointer text-blue-500 font-bold  hover:text-green-400 active:text-blue-300 justify-self-center text-[26px]'>Contact Us</p>
<div id='contact' className='grid grid-cols-5 gap-[5px]  justify-items-center mt-[40px] justify-self-center mb-[40px]'>
<FaFacebookF size={35} className='text-blue-600'/>
<BsInstagram size={35} className='text-red-400'/>
<FaSquareWhatsapp size={35} className='text-green-500'/>
<FaSquareXTwitter size={35} className='text-black'/>
<IoCallSharp size={35} className='text-green-500'/>



</div>

</div>
<div id='footer'>
<div className='fixed bg-[#a59c9c] w-full  justify-center  right-0 bottom-0 left-0 p-4'>
  <p className='font-bold '>© 2025 E-library. All Rights Reserved.</p>
</div>
</div>

</div>
    )
}
export default Home;