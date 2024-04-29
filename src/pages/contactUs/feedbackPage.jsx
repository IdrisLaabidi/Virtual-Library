import React from 'react';
import { useState ,useEffect} from 'react';
import Lottie from 'react-lottie';
import Cookies from 'js-cookie';

import feedbackAnimation from '../../assets/feedBack-animation.json';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

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
    
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const id = localStorage.getItem("user_id")
    const token =Cookies.get("token")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const feedBack = {
            user:id,
            firstName:firstname,
            lastName:lastname,
            email:email,
            message:message,
        };

        try {
            const response = await fetch('http://localhost:4000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(feedBack),
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error(`Failed to submit feedback: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Feedback submitted successfully:', data);
            alert('Feedback submitted successfully')
            navigate(0)
        } catch (error) {
            console.error('Error during feedback submission:', error);
        }
    };

    const feedbackLottieAnimationOption = {
        loop: true,
        autoplay: true,
        animationData: feedbackAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (<>
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
      <section className=' overflow-x-hidden'>
        <div className=" py-8 dark:bg-[#141a28] w-screen px-7 ">
            <div className="h-10 dark:bg-[#141a28] w-full"></div>
            <h2 className="text-3xl font-bold mb-4 ml-44 dark:text-white">Give us your Feedback!</h2>
            <div className="h-20"></div>
            <div className="flex gap-5 max-h-96 h-fit dark:bg-[#141a28] ">
                <div className='w-1/2'>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border dark:bg-gray-600 dark:border-gray-500 dark:text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500 dark:focus:bg-slate-600"
                                id="grid-first-name"
                                type="text"
                                placeholder="Your first name"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border dark:bg-gray-600 dark:border-gray-500 dark:text-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500 dark:focus:bg-slate-600"
                                id="grid-last-name"
                                type="text"
                                placeholder="Your last name"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-email">
                            E-mail
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border dark:bg-gray-600 dark:border-gray-500 dark:text-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white  focus:ring-blue-500 focus:border-blue-500 dark:focus:bg-slate-600"
                            id="grid-email"
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6 flex flex-col">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-feedback">
                            Your message
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white  dark:bg-gray-600 dark:border-gray-500 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:bg-slate-600"
                            id="grid-feedback"
                            rows="4"
                            placeholder="Write your message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="h-5"></div>
                    <div className="flex items-center justify-center">
                        <button
                            className="w-48 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            type="submit" // Changed to "submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                </div>
                <div className="flex items-center justify-center w-1/2 pb-40">
                    <Lottie
                        options={feedbackLottieAnimationOption}
                        height={400}
                        width={600}
                    />
                </div>
            </div>
            <div className="h-20"></div>
            <section class="py-16 bg-blue-500 dark:bg-gray-900 h-48">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-4 text-white">Follow Us on </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a href='https://www.facebook.com/Miri.Rayen/' class="flex items-center justify-center space-x-2 text-white">
                    <span>Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>
                <a href='https://www.instagram.com/Miri.Rayen/' class="flex items-center justify-center space-x-2 text-white">
                    <span>Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                </a>
                <a href='https://twitter.com/Miri_Rayen' class="flex items-center justify-center space-x-2 text-white">
                    <span>Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1.64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1.78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                </a>
                </div>
            </div>
            </section>
            <footer className="py-4 text-white dark:bg-gray-800">
                <div className="container mx-auto text-center text-black dark:text-white">
                    <p>&copy; {new Date().getFullYear()} Virtual Library. All rights reserved.</p>
                </div>
            </footer>
        </div>
        </section>
    </>);
};

export default ContactUs;
