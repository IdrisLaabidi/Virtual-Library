import {React,useState,useEffect} from 'react'
import { useLocation} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import {MoonLoader} from 'react-spinners'
const ViewCollection = () => {

    const [itemsInCollection , setItemsInCollection] = useState([]);
    const {collectionId} = useParams();
    const {data : collectionItems , isPending , error} = useFetch(`http://localhost:4000/api/item/collection/${collectionId}`);
    
    useEffect(()=>{
        if(!isPending && collectionItems ){
            setItemsInCollection(collectionItems.itemsInCollection)
        }
    },[isPending,collectionItems])
    if(isPending){
        return(
            <div class="flex items-center justify-center">
                <MoonLoader color='rgb(165 180 252)'/>
            </div>
            )
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
                    {itemsInCollection.map((item) => (
                        <div key={item._id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <img src={item.coverImage} alt={`Cover of ${item.titre}`} className="w-full h-48 object-cover mb-4 rounded-lg dark:text-white" />
                            <h2 className="text-xl font-bold dark:text-white">{item.titre.charAt(0).toUpperCase() + item.titre.slice(1)}</h2>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Description: </span>{item.description} </p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Author:</span> {item.auteur}</p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Type:</span> {item.type}</p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Publication Date:</span> {new Date(item.publicationDate).toLocaleDateString()}</p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Price:</span> {item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    
  )
}

export default ViewCollection