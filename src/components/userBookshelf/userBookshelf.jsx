import React, { useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import {MoonLoader} from 'react-spinners'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'


const UserBookshelf = () => {
    const userId = localStorage.getItem('user_id');
    const token = Cookies.get("token")
    const [userCollection, setUserCollection] = useState([]);
    const { data: userCollectionData, isPending, error } = useFetch(`http://localhost:4000/api/collection/${userId}`);
    const navigate = useNavigate()
    useEffect(() => {
        if (userCollectionData) {
            setUserCollection(userCollectionData);
        }
    }, [userCollectionData]);

    const handleDelete = async ({collection}) => {
        try {
            const response = await fetch(`http://localhost:4000/api/collection/${collection._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer '+token,
                  },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('Collection deleted successfuly!')

            // Refresh the page or update the state here to reflect the deletion
        } catch (error) {
            console.error('Failed to delete collection:', error);
            alert('Failed to delete collection!')
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-800 min-h-screen p-5 rounded-[10px]">
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">My Library</h1>
                {isPending && 
                    <div className="flex items-center justify-center">
                        <MoonLoader color='rgb(165 180 252)'/>
                    </div>
                }
                {error && <div className="text-red-500 text-center">{error}</div>}
                {!isPending && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {userCollection.map((collection) => (
                            <div key={collection._id} className="bg-white dark:bg-gray-700 shadow-lg rounded-[9px] overflow-hidden">
                                <div className="p-5">
                                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">{collection.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300">Language: {collection.language}</p>
                                    <p className="text-gray-600 dark:text-gray-300">Items: {collection.items.length}</p>
                                </div>
                                <div className="p-5 border-t border-gray-200 dark:border-gray-600">
                                    <button 
                                        className="text-indigo-300 hover:text-indigo-500 font-semibold mr-4"
                                        onClick={()=>{navigate(`/MyLibrary/viewCollection/${collection._id}`)}}
                                        >
                                            
                                        View
                                    </button>
                                    <button 
                                        className="text-red-700 hover:text-red-500 font-semibold"
                                        onClick={()=>{handleDelete({collection})}}
                                        >
                                            
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserBookshelf;