import { useNavigate } from 'react-router-dom'
import deleteIcon from '../../assets/delete-icon.svg'
import Cookies from 'js-cookie'
const token = Cookies.get("token")

const ItemCard = ({item,collection}) => {
    const navigate = useNavigate()
    const userId = localStorage.getItem('user_id')
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/item/${item._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer '+token,
                  },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('Item deleted successfuly!')
            navigate(0)

            // Refresh the page or update the state here to reflect the deletion
        } catch (error) {
            console.error('Failed to delete item:', error);
            alert('Failed to delete item!')
        }
    };
  
    return ( <div className="flex-col  justify-center items-center w-fit">
        <div key={item._id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <img src={item.itemImgURL} alt={`Cover of ${item.titre}`} className=" w-64 h-48 object-cover mb-4 rounded-lg dark:text-white" />
                            <h2 className="text-xl font-bold dark:text-white">{item.titre.charAt(0).toUpperCase() + item.titre.slice(1)}</h2>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Author:</span> {item.auteur}</p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Type:</span> {item.type}</p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Publication Date:</span> {new Date(item.publicationDate).toLocaleDateString()}</p>
                            <button 
                                        className="text-indigo-300 hover:text-indigo-500 font-semibold border hover:border-indigo-500 border-indigo-300 p-1 rounded-lg mr-3 mt-3"
                                        onClick={()=>{navigate(`/MyLibrary/viewItem/${item._id}`)}}
                                        >    
                                        View
                                    </button>
                           <button 
                                        className="text-red-700 hover:text-red-500 font-semibold border border-red-700 hover:border-red-500 p-1 rounded-lg mt-3 mr-3"
                                        onClick={handleDelete}
                                        >   
                                        Delete
                            </button>
                            <button 
                                        className="text-red-700 hover:text-red-500 font-semibold border border-red-700 hover:border-red-500 p-1 rounded-lg mt-3"
                                        onClick={() => {navigate('/MyLibrary/updateItem/'+item._id)}}
                                        >   
                                        Edit
                            </button>
                        </div>
    </div> );
}
 
export default ItemCard;