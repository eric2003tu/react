import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Register(){
    const [loading, setLoading] = useState(false);
        const [Fname, setFname] = useState('');
        const [Lname, setLname] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [phone, setPhone] = useState('');
        const [gender , setGender] = useState('');
        const [confirmpassword,setConfirmpassword] = useState('');
        const [FnameBorder , setFnameBorder] = useState('#ccc');
        const [LnameBorder, setLnameBorder] = useState('#ccc');
        const [emailBorder, setEmailBorder] = useState('#ccc');
        const [passwordBorder, setPasswordEBorder] = useState('#ccc');
        const [phoneBorder, setPhoneBorder] = useState('#ccc');
        const [confirmpasswordBorder, setConfirmpasswordBorder] = useState('#ccc');
        const [FnameError , setFnameError] = useState('');
        const [LnameError , setLnameError] = useState('');
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [confirmpasswordError, setConfirmpasswordError] = useState('');
        const [phoneError, setPhoneError] = useState('');
        const [genderError, setGenderError] = useState ('');
        const [registerMessage, setRegisterMessage] = useState('');
        const [errorColor, setErrorColor] = useState('red');
        const navigate = useNavigate();
    const handleRegister = function(event){
        setLoading(true);
        event.preventDefault();
        if(!Fname){
            setFnameError('Please this field must be filled first!');
            setLnameError('');
            setFnameBorder('red');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if(!Lname){
            setFnameError('');
            setLnameError('Please this field must be filled first!');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('red');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return; 
        }
        else if(!email){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('Please this field must be filled first!');
            setEmailBorder('red');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return; 
        }
        else if((!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('Enter a valid Email address!');
            setEmailBorder('red');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return; 
        }
        else if(!phone){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('Please this field must be filled first!');
            setPhoneBorder('red');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if (!/^\+?\d{10,15}$/.test(phone)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('Enter a valid phone number');
            setPhoneBorder('red');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if(!password){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('Please this field must be filled first!');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if (!/[a-z]/.test(password)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('You are missing a lower case letter in your password.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if (!/[A-Z]/.test(password)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('You are missing an uppercase letter in your password.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if(!/[0-9]/.test(password)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('You are missing atleast one digit in your password.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('You are missing a special character in your password.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if(password.length < 6){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('password must be at least 6 characters long.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if(!confirmpassword){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('Confirm password first');
            setConfirmpasswordBorder('red');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if(confirmpassword !== password){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('Password do not match, re-type your password correctly!');
            setConfirmpasswordBorder('red');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        else if(!gender){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('select the gender first.');
            setRegisterMessage('');
            setErrorColor('red');
            setLoading(false)
            return;
        }
        fetch('https://library-management-6x6d.onrender.com/api/user/register',{
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username: Fname,
                email: email,
                phone: phone,
                password: password,
            }),
        })
        .then(function(response){
            if(!response.ok){
                if(response.status === 404){
                    setFnameError('');
                    setLnameError('');
                    setFnameBorder('#ccc');
                    setLnameError('');
                    setLnameBorder('#ccc');
                    setEmailError('');
                    setEmailBorder('#ccc');
                    setPasswordError('');
                    setPasswordEBorder('#ccc');
                    setConfirmpasswordError('');
                    setConfirmpasswordBorder('#ccc');
                    setPhoneError('');
                    setPhoneBorder('#ccc');
                    setGenderError('');
                    setRegisterMessage('Invalid requests');
                    setErrorColor('red');
                    setLoading(false)
                    throw new Error("Invalid requests.");
                }
                else if(response.status === 500){
                    setFnameError('');
                    setLnameError('');
                    setFnameBorder('#ccc');
                    setLnameError('');
                    setLnameBorder('#ccc');
                    setEmailError('');
                    setEmailBorder('#ccc');
                    setPasswordError('');
                    setPasswordEBorder('#ccc');
                    setConfirmpasswordError('');
                    setConfirmpasswordBorder('#ccc');
                    setPhoneError('');
                    setPhoneBorder('#ccc');
                    setGenderError('');
                    setRegisterMessage('Internal server error');
                    setErrorColor('red');
                    setLoading(false)
                    throw new Error("Internal server error");
                }
                else if(response.status === 200){
                    setFnameError('');
                    setLnameError('');
                    setFnameBorder('#ccc');
                    setLnameError('');
                    setLnameBorder('#ccc');
                    setEmailError('');
                    setEmailBorder('#ccc');
                    setPasswordError('');
                    setPasswordEBorder('#ccc');
                    setConfirmpasswordError('');
                    setConfirmpasswordBorder('#ccc');
                    setPhoneError('');
                    setPhoneBorder('#ccc');
                    setGenderError('');
                    setRegisterMessage('User already Exists');
                    setErrorColor('red');
                    setLoading(false)
                    throw new Error("User already exists");
                }
                return;
            }
            return response.json();
        })
        .then(function(data){
            if(data){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('Registration was successful!');
            setErrorColor('green');
            setLoading(false)
            setTimeout(function(){
                setRegisterMessage('');
                navigate('/login');
            },7000)
            return;}
        })
        .catch(function(error){
            console.error("Failed to register the user: ", error);
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('Failed to register the user');
            setErrorColor('red');
            setLoading(false)
            return;
        });
    }
    return(
      <div>
        <form
  onSubmit={handleRegister}
  id="signupForm"
  className="grid grid-cols-1 sm:grid-cols-1 gap-1 mt-[100px] sm:w-[70%] lg:w-[50%] lg:justify-self-center md:w-fit p-[20px] border-[2px] border-gray-400 rounded-4xl shadow-[2px_3px_10px]"
>
  {/* Header */}
  <h1
    id="signUpHeader"
    className="text-[29px] text-blue-500 font-bold mb-[18px] col-span-full text-center"
  >
    Registration Form
  </h1>

  {/* Error Message */}
  <p style={{ color: errorColor }} className="font-bold col-span-full">
    {registerMessage}
  </p>

  {/* First Name */}
  <label htmlFor="Fname" className="text-black font-bold">
    First Name
  </label>
  <input
    type="text"
    name="Fname"
    value={Fname}
    placeholder="Enter the firstname"
    onChange={(data) => setFname(data.target.value)}
    style={{ borderColor: FnameBorder }}
    className="w-full p-4 mt-2 border rounded-lg focus:outline-none"
  />
  <p style={{ color: errorColor }} className="col-span-full">
    {FnameError}
  </p>

  {/* Last Name */}
  <label htmlFor="Lname" className="text-black font-bold">
    Last Name
  </label>
  <input
    type="text"
    name="Lname"
    placeholder="Enter the last name"
    value={Lname}
    onChange={(data) => setLname(data.target.value)}
    style={{ borderColor: LnameBorder }}
    className="w-full p-4 mt-2 border rounded-lg focus:outline-none"
  />
  <p style={{ color: errorColor }} className="col-span-full">
    {LnameError}
  </p>

  {/* Email */}
  <label htmlFor="email" className="text-black font-bold">
    Email
  </label>
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    value={email}
    onChange={(data) => setEmail(data.target.value)}
    style={{ borderColor: emailBorder }}
    className="w-full p-4 mt-2 border rounded-lg focus:outline-none"
  />
  <p style={{ color: errorColor }} className="col-span-full">
    {emailError}
  </p>

  {/* Phone */}
  <label htmlFor="phone" className="text-black font-bold">
    Phone
  </label>
  <input
    type="tel"
    name="phone"
    placeholder="Enter your phone number"
    value={phone}
    onChange={(data) => setPhone(data.target.value)}
    style={{ borderColor: phoneBorder }}
    className="w-full p-4 mt-2 border rounded-lg focus:outline-none"
  />
  <p style={{ color: errorColor }} className="col-span-full">
    {phoneError}
  </p>

  {/* Password */}
  <label htmlFor="password" className="text-black font-bold">
    Password
  </label>
  <input
    type="password"
    name="password"
    placeholder="Enter password"
    value={password}
    onChange={(data) => setPassword(data.target.value)}
    style={{ borderColor: passwordBorder }}
    className="w-full p-4 mt-2 border rounded-lg focus:outline-none"
  />
  <p style={{ color: errorColor }} className="col-span-full">
    {passwordError}
  </p>

  {/* Confirm Password */}
  <label htmlFor="confirmPassword" className="text-black font-bold">
    Confirm Password
  </label>
  <input
    type="password"
    name="confirmPassword"
    placeholder="Re-type your password"
    value={confirmpassword}
    onChange={(data) => setConfirmpassword(data.target.value)}
    style={{ borderColor: confirmpasswordBorder }}
    className="w-full p-4 mt-2 border rounded-lg focus:outline-none"
  />
  <p style={{ color: errorColor }} className="col-span-full">
    {confirmpasswordError}
  </p>

  {/* Gender */}
  <div className="col-span-full">
    <p className="text-black font-bold">
      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={(data) => setGender(data.target.value)}
      />{" "}
      Male &nbsp;&nbsp;
      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={(data) => setGender(data.target.value)}
      />{" "}
      Female
    </p>
    <p style={{ color: errorColor }}>{genderError}</p>
  </div>

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
    Register{" "}
    <div
      className={
        loading === true
          ? "animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full ml-[50%] justify-center"
          : "hidden"
      }
    ></div>
  </button>
</form>
<div id='footer' className="max-w-[100%]">
<div id="footer" className="bg-[#a59c9c] max-w-[100%] left-0 right-0 w-full p-4 text-center absolute mt-[25px]">
  <p className="font-bold text-center">© 2025 E-library. All Rights Reserved.</p>
</div>

</div>
</div>
    )
    
}
export default Register;
