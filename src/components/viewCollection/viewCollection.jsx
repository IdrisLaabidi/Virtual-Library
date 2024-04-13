import {React,useState,useEffect} from 'react'
import { useLocation} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import {MoonLoader} from 'react-spinners'
import ItemCard from '../item/item';
const ViewCollection = () => {

    const [itemsInCollection , setItemsInCollection] = useState([]);
    const {collectionId} = useParams();
    const {data : collectionItems , isPending , error} = useFetch(`http://localhost:4000/api/item/collection/${collectionId}`);
    if(!isPending)console.log(collectionItems)
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
                        <ItemCard item={item}></ItemCard>
                    ))}
                </div>
            </div>
        </div>


    
  )
}

export default ViewCollection