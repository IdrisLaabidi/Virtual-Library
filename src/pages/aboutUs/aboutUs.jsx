import idris from '../../assets/idris.jpeg'
import rayen from '../../assets/miri.jpg'
import tass from '../../assets/tass.jpeg'
import joe from '../../assets/joe.jpg'


 const AboutUs = () => {
    return ( <>
        <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Welcome our <span class="text-blue-600">Creative</span> team</h2>
            </div>

            <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-4 gap-x-6 xl:gap-x-12 gap-y-6">
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