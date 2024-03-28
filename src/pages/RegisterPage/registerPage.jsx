import React from 'react';

const RegisterPage = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center pt-20 mx-auto lg:py-18">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="firstname" className="flex justify-start mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='first name' required />
              </div>
              <div>
                <label htmlFor="lastname" className="flex justify-start mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='last name'required />
              </div>
              <div>
                <label htmlFor="email" className="flex justify-start mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@email.com" required />
              </div>
              <div>
                <label htmlFor="password" className="flex justify-start mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
              <p className="text-sm font-light text-gray-500">
                Already have an account? <a href="/" className="font-medium text-blue-600 hover:underline">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
