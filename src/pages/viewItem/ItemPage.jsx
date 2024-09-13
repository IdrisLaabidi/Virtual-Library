import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import Cookies from "js-cookie";

const ViewItem = () => {

    const {itemId} = useParams()
    const {data : item ,isPending ,error} = useFetch(`http://localhost:4000/api/item/${itemId}`)
    const [collection,setCollection] = useState(null)
    const token = Cookies.get("token")
    
    useMemo(() => {
        const fetchData = async () =>{
            const response = await fetch('http://localhost:4000/api/collection/'+item.group,
           { headers:  {Authorization: `Bearer ${token}`} , method: 'GET'})
           if(response.ok){
            const data = await response.json()
            setCollection(data)
            console.log(await response.json)
            console.log(collection)
           }
        
        }
        if(!isPending){
            fetchData()
        }  
    },[isPending])
    
    return(<>
        {item && <div className="md:max-h-screen flex  h-full gap-4 p-11">
            <div className=" h-full w-5/12">
                <img src={item.itemImgURL} alt="cover image" className="w-full h-full rounded-md"/>
            </div>
            <div className=" w-3/5">
                <div className="flex gap-5 justify-start items-center pb-5">
                    <h2 className="text-[#4BC1D2] font-bold text-3xl ">Harry Potter</h2>
                    <div className="bg-[#D9D9D9] p-1 w-16 rounded-md shadow-md text-center ">{item.type}</div>
                </div>
                <h1 className="text-[#000000] font-bold text-3xl  dark:text-white w-full">{item.titre}</h1>
                <p className="text-[#8A8A8A] dark:text-white w-full">{item.auteur}</p>
                {item.type === 'livre' && <>
                    <p className="dark:text-white w-full"><span className="font-bold">Editor : </span>{item.editor}</p>
                    <p className="dark:text-white w-full"><span className="font-bold">pages : </span>{item.pageNumber}</p>
                    <p className="dark:text-white w-full"><span className="font-bold">ISBN : </span>{item.isbn}</p>
                </>}
                {item.type !== 'livre' && <>
                    <p className="dark:text-white w-full"><span className="font-bold">Duration : </span>{item.duree}</p>
                </>}
                <p className="dark:text-white w-full"><span className="font-bold">Price : </span>{item.price}</p>
                <p className="dark:text-white pb-8 w-full"><span className="font-bold">Publication date :</span>{format(new Date(item.publicationDate), 'dd/MM/yyyy')}</p>
                
                <h2 className=" font-bold text-lg dark:text-white w-full"><u>Description</u></h2>
                <p className="dark:text-white w-full ">{item.description}</p>
            </div>
    </div>}
   
  </>);
}
 
export default ViewItem;