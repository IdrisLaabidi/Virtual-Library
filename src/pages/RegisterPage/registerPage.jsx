import React from 'react';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = (props) => {
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [cPassword , setCPassword] = useState('');
  const [error , setError] = useState(null)
  const navigate = useNavigate();
  
  const validateForm = () => {
    return email&&password&&firstName&&lastName
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!validateForm){
      setError('All fields must be filled in');
    }
    const user = {firstName , lastName , email , password}
    if (cPassword !== password) {
      setError('Password does not match');
    }else{
      try{
        const response = await fetch('http://localhost:4000/api/auth/createuser',{
          method : 'POST',
          body : JSON.stringify(user),
          headers : {
            'Content-Type' : 'application/json',
          },
          credentials : 'include'
        });
        const json = await response.json();
        if (response.ok){
          console.log('user added succ ' , user);
          navigate('/home');
        }
        if (!response.ok){
          setError(json.message);
        }

      }catch(error){
        console.log('register error' , error);
      }
    }
  }
 
  return(
    <div className="h-screen">
      {props.darkMode&&
      <div className="bg-gray-800 h-full">
        <div className="flex flex-col items-center justify-center pt-16 mx-auto lg:py-18">
          <div className="w-full bg-gray-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                Create your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method='POST'>
                <div>
                  <label htmlFor="firstname" className="flex justify-start mb-2 text-sm font-medium text-gray-300 ">First Name</label>
                  <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} type="text" name="firstname" id="firstname" className="bg-gray-600 border border-gray-500 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='first name' required />
                </div>
                <div>
                  <label htmlFor="lastname" className="flex justify-start mb-2 text-sm font-medium text-gray-300 ">Last Name</label>
                  <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} type="text" name="lastname" id="lastname" className="bg-gray-600 border border-gray-500 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='last name'required />
                </div>
                <div>
                  <label htmlFor="email" className="flex justify-start mb-2 text-sm font-medium text-gray-300 ">Your email</label>
                  <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" className="bg-gray-600 border border-gray-500 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@email.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="flex justify-start mb-2 text-sm font-medium text-gray-300">Password</label>
                  <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" className="bg-gray-600 border border-gray-500 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div>
                  <label htmlFor="cpassword" className="flex justify-start mb-2 text-sm font-medium text-gray-300">Confirm Password</label>
                  <input value={cPassword} onChange={(e)=>{setCPassword(e.target.value)}} type="password" name="cpassword" id="cpassword" className="bg-gray-600 border border-gray-500 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
                <p className="text-sm font-light text-gray-400">
                  Already have an account? <a href="/login" className="font-medium text-blue-500 hover:underline">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>}
      {!props.darkMode && <div className="bg-white h-full">
      <div className="flex flex-col items-center justify-center pt-18 mx-auto lg:py-18">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method='POST'>
              <div>
                <label htmlFor="firstname" className="flex justify-start mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='first name' required />
              </div>
              <div>
                <label htmlFor="lastname" className="flex justify-start mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='last name'required />
              </div>
              <div>
                <label htmlFor="email" className="flex justify-start mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@email.com" required />
              </div>
              <div>
                <label htmlFor="password" className="flex justify-start mb-2 text-sm font-medium text-gray-900">Password</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div>
                <label htmlFor="cpassword" className="flex justify-start mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                <input value={cPassword} onChange={(e)=>{setCPassword(e.target.value)}} type="password" name="cpassword" id="cpassword" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
              <p className="text-sm font-light text-gray-500">
                Already have an account? <a href="/" className="font-medium text-blue-600 hover:underline">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>}
    </div>  
  )
 
};

export default RegisterPage;
