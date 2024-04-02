import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useConnect from '../../Hooks/useConnect';
import Cookies from 'js-cookie'; // Assuming you have js-cookie installed

const MyAccountPage = () => {
  const types = ['image/png', 'image/jpeg']; // image types
  const [profilePicture, setProfilePicture] = useState("");
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    profilePicture: '' 
  });
  
  const navigate = useNavigate();
  const [user, isPending, error] = useConnect();

  useEffect(() => {
    if (!isPending && user) {
      setUserDetails({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
      });
    }
  }, [user, isPending]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (!(file && types.includes(file.type))){
      alert('Please select a valid image type (jgp or png)')
    }
    const reader = new FileReader();
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxFileSize) {
        alert('Picture size should not exceed 5MB');
        return;
    }
    reader.onloadend = () => {
        console.log('Profile Picture Read:', reader.result);
        setProfilePicture(reader.result);
    };
    if (file) {
        reader.readAsDataURL(file);
    }
};
useEffect(()=>{
  
},[profilePicture])
const saveChangesHandler = async () => {
  try {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      throw new Error('User ID is not found. Please log in again.');
    }

    const token = Cookies.get('token');
    if (!token) {
      throw new Error('You are not logged in. Please log in again.');
    }

    const updatedUserData = {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
    };

    if (userDetails.newPassword) {
      updatedUserData.currentPassword = userDetails.currentPassword;
      updatedUserData.password = userDetails.newPassword;
    }

    if (profilePicture) {
      updatedUserData.profilePicture = profilePicture;
      console.log(profilePicture)
    }

    // Send updated user data to the server
    const url = `http://localhost:4000/api/auth/users/${userId}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUserData),
    });

    // Handle server response
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('Invalid request. Please check your information again.');
      } else if (response.status === 401) {
        throw new Error('You are not authorized.');
      } else if (response.status === 404) {
        throw new Error('User not found.');
      } else {
        throw new Error('An unexpected error occurred.');
      }
    }

    // Redirect the user after saving changes
    Cookies.remove('token');
    // Navigate to desired page or show success message
    navigate('/login')
  } catch (error) {
    alert(error.message);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    saveChangesHandler();
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold dark:text-white mb-6">My Account</h1>
      <div className='relative w-[170px] h-[170px] overflow-hidden mb-[1rem] rounded-full'>
                {/* Display profile picture mosta9bel */}
                {profilePicture ? (
                    <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                    <div className="flex justify-center items-center w-full h-full bg-[#ddd] text-gray-500 text-[1rem] font-bold ">Default Pic</div>
                )}
                {/* Input field to upload profile picture */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                />
            </div>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="w-3/4">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium dark:text-white">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
            className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white rounded-lg"
            required
          />
        </div>
        <div className="w-3/4">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleChange}
            className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white rounded-lg"
            required
          />
        </div>
        <div className="w-3/4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white rounded-lg"
            required
          />
        </div>
        <div className="w-3/4">
          <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium dark:text-white">
            Current Password (leave blank if unchanged)
          </label>
          <input
            type="password"
            name="currentPassword"
            value={userDetails.currentPassword}
            onChange={handleChange}
            className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white rounded-lg"
          />
        </div>
        <div className="w-3/4">
          <label htmlFor="newPassword" className="block mb-2 text-sm font-medium dark:text-white">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={userDetails.newPassword}
            onChange={handleChange}
            className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white rounded-lg"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-3/4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default MyAccountPage;