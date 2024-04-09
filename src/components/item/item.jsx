import itemCover from '../../assets/item-cover-placeholder.jpeg'

const ItemCard = ({item}) => {
    return ( <div className="flex-col  justify-center items-center w-fit">
        <img alt="item image" src={itemCover} className=' h-42 w-40'></img>
        <div className=' text-center text-[#666666] font-bold w-40 text-wrap dark:text-white'>this is the item title </div>
        <div className=' text-center text-[#666666] w-40 text-wrap dark:text-white'>this is the author</div>
    </div> );
}
 
export default ItemCard;