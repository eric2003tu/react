import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
        <form
  onSubmit={handleLogin}
  id="loginForm"
  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[100px] sm:w-[80%] lg:w-[50%] lg:justify-self-center md:w-fit md:justify-self-center p-[20px] border-[2px] border-gray-400 rounded-4xl shadow-[2px_3px_10px]"
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
  <label htmlFor="Email" className="text-green-500 font-bold">
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
    className="p-[7px] w-full rounded-2xl mb-[27px] border-2 border-green-300"
  />
  <p style={{ color: "red" }} className="col-span-full">
    {emailError}
  </p>

  {/* Password */}
  <label htmlFor="Password" className="text-green-500 font-bold">
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
    className="p-[7px] w-full rounded-2xl mb-[27px] border-2 border-green-300"
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
    )
}
export default Login;