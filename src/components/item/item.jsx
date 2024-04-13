import itemCover from '../../assets/item-cover-placeholder.jpeg'

const ItemCard = ({item}) => {
    return ( <div className="flex-col  justify-center items-center w-fit">
        <div key={item._id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <img src={item.itemImgURL} alt={`Cover of ${item.titre}`} className="w-auto h-auto object-cover mb-4 rounded-lg dark:text-white" />
                            <h2 className="text-xl font-bold dark:text-white">{item.titre.charAt(0).toUpperCase() + item.titre.slice(1)}</h2>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Description: </span>{item.description} </p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Author:</span> {item.auteur}</p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Type:</span> {item.type}</p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Publication Date:</span> {new Date(item.publicationDate).toLocaleDateString()}</p>
                            <p className="text-gray-600 dark:text-gray-200"><span className='dark:text-white font-semibold'>Price:</span> {item.price}</p>
                        </div>
        
    </div> );
}
 
export default ItemCard;