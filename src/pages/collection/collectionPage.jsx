import React from 'react';
import {useState}  from 'react';
import Cookies from 'js-cookie'


const Collection = () => {
  
  const [collectionTitle, setCollectionTitle] = React.useState('');
  const [collectionLanguage, setCollectionLanguage] = React.useState('');
  const [collectionItem, setCollectionItem] = React.useState('');

  const token = Cookies.get("token")
  const handleSubmit = async(e) => {
    e.preventDefault();
    const collection={
      title:collectionTitle,
      language:collectionLanguage,
      items:setCollectionItem([])
    }
    
    try {
      const response = await fetch('http://localhost:4000/api/collection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token,
        },
        body: JSON.stringify(collection),
        credentials : "include"
      });
      const data = await response.json();
      console.log('Collection submitted successfully:', data);
    } catch (error) {
      console.error(error);
    }
    
    
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div className="text-3xl dark:text-white text-xl font-bold leading-tight tracking-tight">Add your collection</div>
      <form onSubmit={handleSubmit}  className="space-y-4 md:space-y-6" >
        <label htmlFor="collectionTitle" className="text-lg flex justify-start mb-2 text-sm font-medium dark:text-white">Collection Title: </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          type="text"
          id="collectionTitle"
          placeholder="Collection Title"
          value={collectionTitle}
          onChange={(e) =>setCollectionTitle(e.target.value)}
        />
        <p className='text-sm  dark:text-white'>40 character limit. For example: (My Books, Movie Wish Tape, Console Games, Family CD Collection).</p>
        <div></div>
        <label htmlFor="collectionLanguage" className="text-lg flex justify-start mb-2 text-sm font-medium dark:text-white">Collection Language: </label>
        <select 
              value={collectionLanguage} 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-900 dark:bg-gray-600 dark:text-white" 
              onChange={(e) => setCollectionLanguage(e.target.value)}
            >
              <option value="FR">French</option>
              <option value="EN">English</option>
              <option value="IT">Italian</option>
              <option value="AR">Arabic</option>
              <option value="DE">German</option>
            </select>
            <div class="flex items-center justify-center">
                <button class="w-48 -m-0 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center">
                    Add the collection
                </button>
            </div>

      </form>
    </div>
  );
};

export default Collection;
