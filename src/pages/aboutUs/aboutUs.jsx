import idris from '../../assets/idris.jpeg'
import rayen from '../../assets/miri.jpg'
import tass from '../../assets/tass.jpeg'
import joe from '../../assets/joe.jpg'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


 const AboutUs = () => {

    const navigate = useNavigate()
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

    return ( <>
        <header className="py-4 shadow-md bg-white dark:bg-gray-800 top-0 z-[1000] fixed w-full">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={() => {navigate('/')}} title='Home'><h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Virtual Library</h1></button>
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
        <section class="py-10 bg-gray-100 sm:py-16 lg:py-24 ">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Welcome our <span class="text-blue-600">Creative</span> team</h2>
            </div>

            <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-4 gap-x-6 xl:gap-x-12 gap-y-6 ">
                <div class="overflow-hidden bg-white rounded-md shadow">
                    <div class="px-8 py-12">
                        <div class="relative w-24 h-24 mx-auto">
                            <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src={idris} alt="" />
                            <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <blockquote class="mt-7">
                            <p class="text-lg text-black">“This project seamlessly integrates modern technology, including film viewing and music listening, with the timeless pursuit of reading.”</p>
                        </blockquote>
                        <p class="text-base font-semibold tex-tblack mt-9">Idris Laabidi</p>
                        <p class="mt-1 text-base text-gray-600">Computer Science Student</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded-md shadow">
                    <div class="px-8 py-12">
                        <div class="relative w-24 h-24 mx-auto">
                            <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src={rayen} alt="" />
                            <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <blockquote class="mt-7">
                            <p class="text-lg text-black">“Programmed with React, a JavaScript library, this project has been optimized to facilitate smoother and more efficient development processes.”</p>
                        </blockquote>
                        <p class="text-base font-semibold tex-tblack mt-9">Rayen Miri</p>
                        <p class="mt-1 text-base text-gray-600">Computer Science Student</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded-md shadow">
                    <div class="px-8 py-12">
                        <div class="relative w-24 h-24 mx-auto">
                            <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src={tass} alt="" />
                            <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <blockquote class="mt-7">
                            <p class="text-lg text-black">“With a keen focus on user experience, the website has been meticulously crafted with user-friendly interfaces designed to inspire people to delve deeper into books, films, and music.”</p>
                        </blockquote>
                        <p class="text-base font-semibold tex-tblack mt-9">Tasnime benboubaker</p>
                        <p class="mt-1 text-base text-gray-600">Computer Science Student</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded-md shadow">
                    <div class="px-8 py-12">
                        <div class="relative w-24 h-24 mx-auto">
                            <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src={joe} alt="" />
                            <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <blockquote class="mt-7">
                            <p class="text-lg text-black">“This project is dedicated to a noble cause: promoting reading, which faces the threat of obsolescence in today's internet-dominated world.”</p>
                        </blockquote>
                        <p class="text-base font-semibold tex-tblack mt-9">Youssef Fathallah</p>
                        <p class="mt-1 text-base text-gray-600">Computer Science Student</p>
                    </div>
                </div>
            </div>
    </div>
</section>

    </> );
 }
  
 export default AboutUs;