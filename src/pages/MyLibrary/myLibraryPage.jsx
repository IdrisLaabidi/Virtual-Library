import React from 'react';
import search from '../../assets/search-svgrepo-com.svg';
import { Pagination, PaginationItem } from '@mui/material';
import UserBookshelf from '../../components/userBookshelf/userBookshelf';

const MyLibraryPage = () => {
    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    return (
        <div className='w-full flex flex-col'>
            {/* Pagination at the top */}
            <div className='flex justify-center items-center w-full py-3'>
                <Pagination
                    count={alphabet.length}
                    variant="outlined"
                    renderItem={(item) => (
                        <PaginationItem {...item} page={alphabet[item.page - 1]} sx={{ color: '#9900FF', borderColor: '#0099FF' }} />
                    )}
                />
            </div>

            {/* Search and filter options */}
            <div className="w-full flex justify-between items-center gap-3 p-2">
                <div className="flex-grow flex items-center gap-3">
                    <img className="h-8 w-8" alt="search icon" src={search} />
                    <input className="flex-grow rounded-md border border-gray-300 p-2 dark:bg-gray-700 dark:text-white" placeholder='Search per collection name' />
                </div>
                <div className="flex items-center gap-2">
                    {/* Other buttons for sorting and filtering can be added here */}
                </div>
            </div>

            {/* UserBookshelf component */}
            <UserBookshelf />
        </div>
    );
};

export default MyLibraryPage;