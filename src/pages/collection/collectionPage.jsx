import React from 'react';
import {useState } from 'react';


const Collection = () => {
  
  const [collectionTitle, setCollectionTitle] = React.useState('');
  const [collectionLangage, setCollectionLangage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Collection title submitted:', collectionTitle);
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
        <p className='text-sm'>40 character limit. For example: (My Books, Movie Wish Tape, Console Games, Family CD Collection).</p>
        <div></div>
        <label htmlFor="collectionLangage" className="text-lg flex justify-start mb-2 text-sm font-medium dark:text-white">Collection Langage: </label>
        <select 
              value={collectionLangage} 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-900 dark:bg-gray-600 dark:text-white" 
              onChange={(e) => setCollectionLangage(e.target.value)}
            >
              <option value="langue1">French</option>
              <option value="langue2">English</option>
              <option value="langue3">Italic</option>
              <option value="langue3">Arabic</option>
              <option value="langue3">German</option>
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
