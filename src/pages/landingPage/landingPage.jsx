import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import readingAnimation from '../../assets/reading-animation';
import loginAnimation from '../../assets/login-animation';
import welcomeAnimation from '../../assets/welcome-animation';
import book1 from '../../assets/The_Man_in_the_High_Castle_(1962).jpg'
import book2 from '../../assets/Les_Miserables.jpg'
import book3 from '../../assets/The_Lord_of_The_Rings.jpg'
import Cookies from 'cookies-js';
const LandingPage = () => {
  const token = Cookies.get('token')
  const userId = localStorage.getItem('user_id')
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem('theme');
    return theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if(token && userId){
      navigate('/home')
    }
    if(userId && !token){
      alert('Session expired')
      navigate('/login')
    }
  },[])

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
  const readingLottieAnimationOption = {
    loop: true,
    autoplay: true,
    animationData: readingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const loginLottieAnimationOption = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const welcomeLottieAnimationOption = {
    loop: true,
    autoplay: true,
    animationData: welcomeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-4 shadow-md bg-white dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Virtual Library</h1>
          <nav>
            <ul className="flex space-x-24">
              <li><a href="/aboutUs" className="text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Blog</a></li>
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

      {/* Hero Section */}
      <section className="py-20 bg-blue-500 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4 text-white">Welcome to Virtual Library</h2>
          <Lottie 
                  options={welcomeLottieAnimationOption}
                    height={400}
                    width={400}
                />
          <p className="text-lg mb-8 text-white">Discover, upload, and read thousands of books online</p>
          <a href="/register" className="font-semibold py-2 px-6 rounded-full text-blue-500 bg-white hover:bg-blue-400 hover:text-white dark:text-gray-800 dark:bg-white dark:hover:bg-blue-400 dark:hover:text-white transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className='container mx-auto py-16 text-gray-800 dark:text-gray-900'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Explore</h3>
              <p className="text-gray-700">Explore a vast collection of books covering various genres and topics.</p>
            </div>
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Download</h3>
              <p className="text-gray-700">Download books instantly and enjoy reading on any device.</p>
            </div>
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Read</h3>
              <p className="text-gray-700">Read your favorite books online or offline at your convenience.</p>
            </div>
          </div>
          <div className="text-center">
            <Lottie 
                  options={readingLottieAnimationOption}
                    height={400}
                    width={400}
            />
          </div>
        </div>
      </section>
      {/* Steps to use App Section */}
        <section className='container mx-auto py-16 text-gray-800 dark:text-gray-900'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center md:text-right">
                <Lottie 
                  options={loginLottieAnimationOption}
                    height={400}
                    width={400}
                />
                </div>
                <div>
                <div className="text-center md:text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/>
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                    <p className="text-gray-700">Create an account with us using Google or Facebook.</p>
                </div>
                <div className="text-center md:text-left">
                    <svg className="w-12 h-12 mx-auto mb-4"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Explore</h3>
                    <p className="text-gray-700">Explore a vast collection of books covering various genres and topics.</p>
                </div>
                <div className="text-center md:text-left">
                    <svg className="w-12 h-12 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
                    <p className="text-gray-700">Have fun reading your favorite books online or offline at your convenience.</p>
                </div>
                </div>
            </div>
        </section>

        {/* Featured Books Section */}
        <section className='py-16 dark:bg-gray-800 dark:text-white bg-gray-200'>
            <div className="container mx-auto text-center">
                <h2 className='text-3xl font-semibold mb-8 dark:text-white text-gray-800'>Featured Books</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className={`bg-white shadow-md rounded-lg p-6 ${darkMode ? 'text-gray-800' : ''}`}>
                    <img src={book1} alt="Book Cover" className="mx-auto mb-4" style={{ maxWidth: '150px' }} />
                    <h3 className="text-xl font-semibold mb-2">The Man in the High Castle</h3>
                    <p className="text-gray-700">Philip K.Dick</p>
                    </div>
                    <div className={`bg-white shadow-md rounded-lg p-6 ${darkMode ? 'text-gray-800' : ''}`}>
                    <img src={book2} alt="Book Cover" className="mx-auto mb-4" style={{ maxWidth: '150px' }} />
                    <h3 className="text-xl font-semibold mb-2">Les Miserables</h3>
                    <p className="text-gray-700">Victor Hugo</p>
                    </div>
                    <div className={`bg-white shadow-md rounded-lg p-6 ${darkMode ? 'text-gray-800' : ''}`}>
                    <img src={book3} alt="Book Cover" className="mx-auto mb-4" style={{ maxWidth: '150px' }} />
                    <h3 className="text-xl font-semibold mb-2">The Lord of The Rings</h3>
                    <p className="text-gray-700">J.R.R Tolkien</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Testimonials */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Cards */}
            <div className="bg-white shadow-md rounded-lg p-6 dark:text-gray-800">
                <blockquote className="text-lg mb-4">"I absolutely love Virtual Library! It's my go-to platform for discovering new books and authors." - Jane Doe</blockquote>
                <p className="font-semibold">- Jane Doe 'on instagram'</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 dark:text-gray-800">
                <blockquote className="text-lg mb-4">"Virtual Library has an amazing selection of books. The process is seamless and convenient." - John Smith</blockquote>
                <p className="font-semibold">- John Smith 'on twitter'</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 dark:text-gray-800">
                <blockquote className="text-lg mb-4">"I've been using Virtual Library for years and it never disappoints. Highly recommend!" - Emily Johnson</blockquote>
                <p className="font-semibold">- Emily Johnson 'on Facebook'</p>
            </div>
            </div>
        </div>
        </section>

        {/* Social Proof */}
        <section class="py-16 bg-blue-500 dark:bg-gray-900">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-4 text-white">Follow Us on Social Media</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a href='https://www.facebook.com/Miri.Rayen/' class="flex items-center justify-center space-x-2 text-white">
                    <span>Follow us on Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>
                <a href='https://www.instagram.com/Miri.Rayen/' class="flex items-center justify-center space-x-2 text-white">
                    <span>Follow us on Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                </a>
                <a href='https://twitter.com/Miri_Rayen' class="flex items-center justify-center space-x-2 text-white">
                    <span>Follow us on Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1.64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1.78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                </a>
                </div>
            </div>
        </section>

        {/*Ready Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">Ready to Get Started?</h2>
            <div className='flex items-center justify-center space-x-[5%]'>
              <button className='dark:text-white border-[2px] border-gray-600 dark:border-white rounded-[10px] px-4 py-[6px]'>
                Login
              </button>
              <button className='bg-blue-600 hover:bg-blue-700 rounded-[10px] px-4 py-2 text-white'>
                Sign Up
              </button>
            </div>
        </div>
        </section>
      <footer className="py-4 text-white dark:bg-gray-800 ">
        <div className="container mx-auto text-center text-black dark:text-white">
          <p>&copy; {new Date().getFullYear()} Virtual Library. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
