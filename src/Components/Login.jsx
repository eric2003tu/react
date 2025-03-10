import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginMessageColor, setLoginMessageColor] = useState('red');
    const [emailBorder, setEmailBorder] = useState('darkBlue');
    const [passwordBorder, setPasswordEBorder] = useState('darkBlue')
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleLogin = function(event){
        setLoading(true)
        event.preventDefault();
        if(!email){
            setLoginError("");
            setEmailError("Please fill the Email first.");
            setEmailBorder("red");
            setPasswordEBorder("darkBlue");
            setPasswordError("");
            setLoading(false)
            return;
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setLoginError("");
            setEmailError("invalid Email address.");
            setEmailBorder("red");
            setPasswordEBorder("darkBlue");
            setPasswordError("");
            setLoading(false)
            return;
        }
        else if(!password){
            setLoginError("");
            setEmailError("");            
            setEmailBorder("darkBlue");
            setPasswordEBorder("red");
            setPasswordError("Fill in the password first");
            setLoading(false)
            return;
        }
        fetch("https://library-management-6x6d.onrender.com/api/user/login", {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            credentials : "include",
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then(function(response){
            if(!response.ok){
                if(response.status === 404){
                    setLoginError("User does not exist! check your inputs and try again.");
                    setLoginMessageColor('red');
                    setPasswordEBorder("darkBlue");   
                    setEmailError("");
                    setEmailBorder("darkBlue");
                    setPasswordError("");
                    setLoading(false)
                    setTimeout(function(){
                        setLoginError('')
                    },4000)
                    throw new Error("User does not exist! check your inputs and try again.");
            }
            else if(response.status === 500){
                setLoginError("Internal server Error!");
                setEmailError("");
                setPasswordError("");
                setPasswordEBorder("darkBlue");
                setEmailBorder("darkBlue");
                setLoginMessageColor('red');
                setLoading(false)
                setTimeout(function(){
                    setLoginError('')
                },4000)
                throw new Error("Internal server Error!")
            }
            else if(response.status === 401){
                setLoginError("Authorisation Error")
                setEmailError("")
                setPasswordError("");
                setPasswordEBorder("darkBlue");
                setEmailBorder("darkBlue");
                setLoginMessageColor('red');
                setLoading(false)
                setTimeout(function(){
                    setLoginError('')
                },4000)
                throw new Error("Authorization Error!");
                
            }
            return;
        }
        return response.json();
        })
        .then(function(data){
            if(!data){
                setLoginError("Wrong Credentials");
                setLoginMessageColor('red');
                setEmailError("");
                setPasswordError("");
                setPasswordEBorder("darkBlue");
                setEmailBorder("darkBlue");
                setLoading(false)
                setTimeout(function(){
                    setLoginError('')
                },4000)
                return;
            }
            setLoginError("Login was successfully done!!");
            localStorage.setItem("isLogedIn",true);
            setLoginMessageColor('green');
            setEmailError("");
            setPasswordError("");
            setEmailBorder("darkBlue");
            setPasswordEBorder("darkBlue");
            setLoading(false)
            setTimeout(function(){
                navigate('/dashboard');
            },4000)
        })
        .catch(function(error){
            console.error("Failed to login: ", error);
            setLoginError("Failed to login");
            setLoginMessageColor('red');
            setEmailError("");
            setPasswordError("");
            setPasswordEBorder("darkBlue");
            setEmailBorder("darkBlue");
            setLoading(false)
            setTimeout(function(){
                setLoginError('')
            },4000)
        })

    }
    return(
      <div className='max-h-fit h-fit '>
        <form
  onSubmit={handleLogin}
  id="loginForm"
  className="grid grid-cols-1 sm:grid-cols-1 gap-1 mt-[100px] sm:w-[70%] lg:w-[50%] lg:justify-self-center md:w-fit p-[20px] border-[2px] border-gray-400 rounded-4xl shadow-[2px_3px_10px]"
>
  {/* Header */}
  <h1
    id="signUpHeader"
    className="text-[29px] text-blue-500 font-bold mb-[18px] col-span-full text-center"
  >
    Login Form
  </h1>

  {/* Error Message */}
  <p style={{ color: loginMessageColor }} className="col-span-full">
    {loginError}
  </p>

  {/* Email */}
  <label htmlFor="Email" className="text-black font-bold">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={email}
    placeholder="Enter Email address"
    style={{ borderColor: emailBorder }}
    onChange={(values) => setEmail(values.target.value)}
    className="w-full p-4 mt-2 border rounded-lg focus:outline-none"
  />
  <p style={{ color: "red" }} className="col-span-full">
    {emailError}
  </p>

  {/* Password */}
  <label htmlFor="Password" className="text-blach font-bold">
    Password
  </label>
  <input
    type="password"
    id="password"
    name="password"
    value={password}
    placeholder="Enter password"
    style={{ borderColor: passwordBorder }}
    onChange={(data) => setPassword(data.target.value)}
    className="w-full p-4 mt-2 border rounded-lg focus:outline-none"
  />
  <p style={{ color: "red" }} className="col-span-full">
    {passwordError}
  </p>

  {/* Submit Button */}
  <button
    type="submit"
    id="submitButton"
    name="submit"
    className={
      loading === false
        ? "col-span-full font-bold text-white text-[22px] cursor-pointer bg-blue-500 hover:bg-blue-600 hover:text-[24px] pr-[25px] pl-[25px] pt-[10px] pb-[10px] rounded-[10px] justify-self-start mt-[18px] active:bg-green-300"
        : "col-span-full cursor-not-allowed bg-blue-200 pr-[25px] pl-[25px] pt-[10px] pb-[10px] rounded-[10px] justify-self-start mt-[18px] font-bold text-white text-[22px]"
    }
  >
    Login{" "}
    <div
      className={
        loading === true
          ? "animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full ml-[50%] justify-center"
          : "hidden"
      }
    ></div>
  </button>
</form>
<div id='footer' className="">
<div id="footer" className="bg-[#a59c9c] max-w-[100%] left-0 right-0 w-full p-4 text-center absolute mt-[10%]">
  <p className="font-bold text-center">© 2025 E-library. All Rights Reserved.</p>
</div>

</div>
</div>
    )
}
export default Login;