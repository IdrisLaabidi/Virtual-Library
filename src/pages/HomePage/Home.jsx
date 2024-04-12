import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import readingAnimation from '../../assets/reading-animation';
import loginAnimation from '../../assets/login-animation';
import welcomeAnimation from '../../assets/welcome-animation';
import book1 from '../../assets/The_Man_in_the_High_Castle_(1962).jpg'
import book2 from '../../assets/Les_Miserables.jpg'
import book3 from '../../assets/The_Lord_of_The_Rings.jpg'
const Home = () => {
  const navigate = useNavigate();
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
          <a href="#" className="font-semibold py-2 px-6 rounded-full text-blue-500 bg-white hover:bg-blue-400 hover:text-white dark:text-gray-800 dark:bg-white dark:hover:bg-blue-400 dark:hover:text-white transition duration-300">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
