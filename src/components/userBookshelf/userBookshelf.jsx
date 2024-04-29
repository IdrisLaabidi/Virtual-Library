import React, { useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import {MoonLoader} from 'react-spinners'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import Modal from '../modal/modal';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        marginTop: '5%',
        cursor: 'pointer',
        width : '90%'
    }),
}


const UserBookshelf = () => {
    const userId = localStorage.getItem('user_id');
    const token = Cookies.get("token")
    const [isOpen, setIsOpen]=useState(false)
    const [userCollection, setUserCollection] = useState([]);
    const { data: userCollectionData, isPending, error } = useFetch(`http://localhost:4000/api/collection/${userId}`);
    const { data: allUsers  ,isPending : isLoading} = useFetch(`http://localhost:4000/api/auth/users`);
    const [selectedUsers,setSelectedUsers]=useState([])
    const [selectedColl,setSelectedColl]=useState(null)

    const userlist = allUsers? allUsers?.map(user => (
        {value:user._id, label: `${user.firstName} ${user.lastName}`}
     )) : [];

    const friends = userlist.filter(user => user.value !== userId)

    const navigate = useNavigate()
    useEffect(() => {
        if (userCollectionData) {
            setUserCollection(userCollectionData);
        }
    }, [userCollectionData]);

    const handleSelectChange = (selectedOption) => {
        setSelectedUsers(selectedOption.map(option => option.value));
    }

    const handleShare = async (collectionId) => {
        try {
            const response = await fetch('http://localhost:4000/api/collection/share/'+collectionId,{
            headers :  {
                'Authorization': 'Bearer '+token,
                "Content-type": "application/json"
              },
            method : 'POST' ,
            body: JSON.stringify(selectedUsers)
            })
            if(response.ok){
                alert('shared')
                navigate(0)
            }
            if(!response.ok){
                alert('error')
            }
        } catch (error) {
            alert(error)
        }
        
    }

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
            navigate(0)

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
                                <div className="flex gap-2 p-5 border-t border-gray-200 dark:border-gray-600">
                                    <button 
                                        className="text-indigo-300 hover:text-indigo-500 font-semibold border hover:border-indigo-500 border-indigo-300 p-1 rounded-lg"
                                        onClick={()=>{navigate(`/MyLibrary/viewCollection/${collection._id}`)}}
                                        >
                                            
                                        View
                                    </button>
                                    {collection.user === userId && <button 
                                        className="text-red-700 hover:text-red-500 font-semibold border border-red-700 hover:border-red-500 p-1 rounded-lg"
                                        onClick={()=>{handleDelete({collection})}}
                                        >
                                            
                                        Delete
                                    </button>}
                                    { collection.user === userId &&<button 
                                        className=" text-green-700 hover:text-green-500 font-semibold border border-green-700 hover:border-green-500 p-1 rounded-lg"
                                        onClick={()=>{setIsOpen(true) ; setSelectedColl(collection._id)}}
                                        >
                                            
                                        Share
                                    </button>}
                                </div>
                                    
                            </div>
                        ))}
                    </div>
                )}
                <Modal open={isOpen} onClose={()=>setIsOpen(false)} title="Share this collection to a friend">
                                        <div className=' w-[500px]'>
                                            <p className=' text-xl dark:text-white'>I want to share my collection with : </p>
                                            <Select 
                                                options={friends}
                                                placeholder='Select a friend...'
                                                isMulti
                                                isLoading={isLoading}
                                                styles={customStyles}
                                                onChange={(selectedOption) => {handleSelectChange(selectedOption) ; console.log(selectedUsers)}}
                                            />
                                            <button className='w-20 bg-[#141a28] text-white dark:bg-white dark:text-[#141a28] rounded-lg mt-4 p-1'
                                                onClick={() => {handleShare(selectedColl)}}
                                            >Share</button>
                                        </div>
                </Modal>
            </div>
        </div>
    );
};

export default UserBookshelf;