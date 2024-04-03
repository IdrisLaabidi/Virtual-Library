import search from '../../assets/search-svgrepo-com.svg'
import gridIcon from '../../assets/grid-icon.svg'
import sortIcon from '../../assets/sort-icon.svg'
import SortIcon2 from '../../assets/sort-2.svg'
import { Pagination, PaginationItem } from '@mui/material'

const Home = () => {

    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    return (
        <div className='w-full flex-col'>
            <div className="w-full flex justify-start items-center gap-3">
                <div className="w-3/4 h-24 rounded-md flex-col p-2 justify-center gap-3">
                    <h1 className='font-bold text-[22px] dark:text-white'>search in collection</h1>
                    <div className="w-full border-none rounded-md flex justify-center items-center">
                        <img className="h-8 w-8" alt="search icon" src={search}></img>
                        <input className="w-full rounded-md border-none bg-transparent dark:text-white" placeholder='Search per collection name'></input>
                    </div>
                </div>
                <button className='rounded-md w-24 h-8 text-lg border-slate-700 border-solid border-2 flex items-center gap-1 px-1 dark:border-white dark:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
                    <path transform='rotate(270,8,8)' d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
                    </svg>
                    <div className='h-full w-0.5 bg-slate-700 mx-1 dark:bg-white'></div>
                    title
                </button>
                <button className='rounded-md w-19 h-8 text-lg border-slate-700 border-solid border-2 flex items-center gap-1 justify-between px-1 dark:border-white dark:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                    </svg>
                    fill
                </button>
                <button className='rounded-md w-24 bg-[#4BC1D2] h-8 text-white text-lg flex items-center gap-1 px-1 dark:bg-blue-500'>
                    <img
                        alt='icon'
                        className='h-6 w-6 p-0'
                        src={SortIcon2}
                    />
                    filter
                </button>
            </div>
            <div className='flex justify-center items-center w-full py-3'>
                <Pagination
                    count={alphabet.length}
                    variant="outlined"
                    renderItem={(item) => (
                        <PaginationItem {...item} page={alphabet[item.page - 1]}/>
                    )} />
            </div>
        </div>
    );
}

export default Home;
