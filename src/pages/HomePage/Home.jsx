import search from '../../assets/search-svgrepo-com.svg'
import gridIcon from '../../assets/grid-icon.svg'
import sortIcon from '../../assets/sort-icon.svg'
import SortIcon2 from '../../assets/sort-2.svg'
import { Pagination,PaginationItem } from '@mui/material'
import ItemCard from '../../components/item/item'

import { useState,useEffect } from 'react'
import Cookies from 'js-cookie'
import {Select,MenuItem} from '@mui/material'

const Home = () => {

    const[collections,setCollections] = useState(null)

    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    const token = Cookies.get("token")

    useEffect(() => {
        const fetchCollection = async () => {
        const response = await fetch('http://localhost:4000/api/collection', {
            method: 'GET',
            headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token,
            }
        }
        );
        const data = await response.json();
        setCollections(data.toutesLesCollections);
        };
        fetchCollection();
    }, []);
    console.log(collections)

    return ( <div className='w-full flex-col'>
        <div className="w-full flex justify-start items-center gap-3">
            <div className=" w-2/3 bg-gray-400 h-24 rounded-md flex-col p-2 justify-center gap-3" >
                <h1 className='font-bold text-xl'>search collection</h1>
                <div className="w-full bg-white border-none rounded-md flex justify-center items-center">
                    <img className="h-8 w-8" alt="search icon" src={search}></img>
                    <input className="w-full rounded-md border-none bg-transparent " placeholder='Search per collection name '></input>
                </div> 
            </div>
            <button className=' rounded-md w-24 h-8 text-lg border-slate-700 border-solid border-2 flex items-center  gap-1 px-1 '><img 
                alt='icon'
                src={sortIcon}
                className=' h-6 w-6'
                ></img>
                <div className='h-full w-0.5 bg-slate-700 mx-1'></div>
                title</button>
            <button className=' rounded-md w-19 h-8 text-lg border-slate-700 border-solid border-2 flex items-center gap-1 justify-between px-1'><img
                alt='icon'
                src={gridIcon}
                className=' h-6 w-6 p-0'></img>fill</button>
            <button className=' rounded-md w-24  bg-[#4BC1D2]  h-8 text-white text-lg flex items-center gap-1 px-1'><img 
                alt='icon'
                className=' h-6 w-6 p-0'
                src={SortIcon2}
            />filter</button>
        </div>
        <div className='flex justify-center items-center w-full py-3'>
            <Pagination
                count={alphabet.length}
                variant="outlined"
                renderItem={(item) => (
            <PaginationItem {...item} page={alphabet[item.page - 1]} />
            )}/>
            
        </div>
        <ItemCard></ItemCard>
        
    </div> );
}
 
export default Home;