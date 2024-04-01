import React, { useState } from 'react';

const CreateItemPage = () => {
  const [collection, setCollection] = useState('');
  const [itemType, setItemType] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [edition, setEdition] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [isbn10, setIsbn10] = useState('');
  const [isbn13, setIsbn13] = useState('');
  const [pages, setPages] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const inputClass = 'border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-900 ';


  return (
    <div 
      className="p-6 space-y-4 md:space-y-6 sm:p-8"
    >
      <h1 
        className="dark:text-white text-xl font-bold leading-tight tracking-tight"
      >
        Create your item
      </h1>
      <form 
        className="space-y-4 md:space-y-6" 
        onSubmit={handleSubmit}
      >
        <div className='w-3/4'>
          <div className='mb-4 dark:text-white'>Collection:</div>
          <label 
            className='mb-6 dark:text-white'
          >
            <select 
              value={collection} 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-900 dark:bg-gray-600 dark:text-white" 
              onChange={(e) => setCollection(e.target.value)}
            >
              <option value="collection1">Collection 1</option>
              <option value="collection2">Collection 2</option>
              <option value="collection3">Collection 3</option>
            </select>
          </label>          
        </div>
        <div>
          <div className='mb-4 dark:text-white'>Item Type:</div>
          <label>
            <input 
              type="radio" 
              name="inputType" 
              value="film" 
              onChange={(e) => setInputType(e.target.value)} 
              
            /> 
            <span className='dark:text-white'>Film</span>
            <input 
              type="radio" 
              name="inputType" 
              value="book" 
              className='ml-12' 
              onChange={(e) => setInputType(e.target.value)} 
            /> 
            <span className='dark:text-white'>Book</span>
            <input 
              type="radio" 
              name="inputType" 
              value="music" 
              className='ml-12' 
              onChange={(e) => setInputType(e.target.value)} 
            /> 
            <span className='dark:text-white'>Music</span>
          </label>
        </div>
        <div className='w-3/4'>
          <label 
            htmlFor="title" 
            className="flex justify-start mb-2 text-sm font-medium dark:text-white"
          >
            Title
          </label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            onChange={(e) => setTitle(e.target.value)} 
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            required 
          />
        </div>
        <div className='w-3/4'>
          <label 
            htmlFor="author" 
            className="flex justify-start mb-2 text-sm font-medium dark:text-white"
          >
            Author
          </label>
          <input 
            type="text" 
            name="author" 
            id="author" 
            onChange={(e) => setAuthor(e.target.value)} 
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            required 
          />
        </div>
        <div className='w-3/4'>
          <label 
            htmlFor="description" 
            className="flex justify-start mb-2 text-sm font-medium dark:text-white"
          >
            Description
          </label>
          <textarea 
            name="description" 
            id="description" 
            onChange={(e) => setDescription(e.target.value)} 
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
            required
          ></textarea>
        </div>
        <div className='w-3/4'>
          <label 
            htmlFor="edition" 
            className="flex justify-start mb-2 text-sm font-medium dark:text-white"
          >
            Edition
          </label>
          <input 
            type="text" 
            name="edition" 
            id="edition" 
            onChange={(e) => setEdition(e.target.value)} 
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            required 
          />
        </div>
        <div className='w-3/4'>
          <label 
            htmlFor="publicationDate" 
            className="flex justify-start mb-2 text-sm font-medium dark:text-white"
          >
            Publication Date
          </label>
          <input 
            type="date" 
            name="publicationDate" 
            id="publicationDate" 
            onChange={(e) => setPublicationDate(e.target.value)} 
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            required 
          />
        </div>
        <div className="w-3/4 flex space-x-4">
          <div className="w-1/2">
            <label 
              htmlFor="isbn10" 
              className="flex justify-start mb-2 text-sm font-medium dark:text-white"
            >
              ISBN-10
            </label>
            <input 
              type="text" 
              name="isbn10" 
              id="isbn10" 
              onChange={(e) => setIsbn10(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              required 
            />
          </div>
          <div className="w-1/2">
            <label 
              htmlFor="isbn13" 
              className="flex justify-start mb-2 text-sm font-medium dark:text-white"
            >
              ISBN-13
            </label>
            <input 
              type="text" 
              name="isbn13" 
              id="isbn13" 
              onChange={(e) => setIsbn13(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              required 
            />
          </div>
        </div>
        <div className="w-3/4 flex space-x-4">
          <div className="w-1/2">
            <label 
              htmlFor="pages" 
              className="flex justify-start mb-2 text-sm font-medium dark:text-white"
            >
              Pages
            </label>
            <input 
              type="number" 
              name="pages" 
              id="pages" 
              onChange={(e) => setPages(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              required 
            />
          </div>
          <div className="w-1/2">
            <label 
              htmlFor="price" 
              className="flex justify-start mb-2 text-sm font-medium dark:text-white"
            >
              Price
            </label>
            <input 
              type="number" 
              name="price" 
              id="price" 
              onChange={(e) => setPrice(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              required 
            />
          </div>
        </div>
        <button 
          type="submit" 
          className="w-1/2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Create Item
        </button>
      </form>
    </div>
  );
};

export default CreateItemPage;
