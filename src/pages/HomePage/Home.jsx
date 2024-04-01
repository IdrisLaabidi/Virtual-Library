import search from '../../assets/search-svgrepo-com.svg'

const Home = () => {
    return ( <>
        <div className="w-full">
            <div className="w-full bg-gray-400 h-24 rounded-md flex-col p-2" >
                <h1>search in collection</h1>
                <br className='w-full h-0'></br>
                <div className="w-full bg-white border-none rounded-md flex justify-center items-center">
                    <img className="h-8 w-8" alt="search icon" src={search}></img>
                    <input className="w-full rounded-md border-none bg-transparent " placeholder='Search per colloction name '></input>
                </div>
                
            </div>

        </div>
    </> );
}
 
export default Home;