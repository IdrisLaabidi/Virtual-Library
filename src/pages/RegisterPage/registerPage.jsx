import React from 'react';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [cPassword , setCPassword] = useState('');
  const [error , setError] = useState(null)
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem('theme');
    return theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
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
      <header className="py-4 shadow-md bg-white dark:bg-gray-800 top-0 z-[1000] fixed w-full">
        <div className="container mx-auto flex justify-between items-center">
          <button title='home' onClick={() => {navigate('/')}}><h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Virtual Library</h1></button>
          <nav>
            <ul className="flex space-x-24">
              <li><a href="/aboutUs" className="text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About Us</a></li>
              <li><a href="/blog" className="text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Blog</a></li>
              <li><a href="/contactUs" className="text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact Us</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 16 16">
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                </svg>
              )}
            </button>
            <button
              className="text-sm text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => navigate('/login')}>
              Login
            </button>
            <button
              className="text-sm text-white bg-blue-600 rounded-[10px] px-5 py-[6px] hover:bg-blue-700 "
              onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        </div>
      </header>
      <div className="bg-white dark:bg-gray-800 h-full my-5">
        <div className="flex flex-col items-center justify-center pt-16 mx-auto lg:py-18">
          <div className="w-full bg-white dark:bg-gray-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Create your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method='POST'>
                <div>
                  <label htmlFor="firstname" className="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">
                    First Name
                  </label>
                  <input 
                    value={firstName} 
                    onChange={(e)=>{setFirstName(e.target.value)}} 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder='first name' 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">
                    Last Name
                  </label>
                  <input 
                    value={lastName} 
                    onChange={(e)=>{setLastName(e.target.value)}} 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder='last name'
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">
                    Your email
                  </label>
                  <input 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="example@email.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="password" className="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Password
                  </label>
                  <input 
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="cpassword" className="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Confirm Password
                  </label>
                  <input 
                    value={cPassword} 
                    onChange={(e)=>{setCPassword(e.target.value)}} 
                    type="password" 
                    name="cpassword" 
                    id="cpassword" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-400">
                  Already have an account? <a href="/login" className="font-medium text-blue-500 hover:underline">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
 
};

export default RegisterPage;
