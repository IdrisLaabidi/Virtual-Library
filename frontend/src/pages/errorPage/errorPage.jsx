import Lottie from 'react-lottie';
import errorAnimation from '../../assets/error-animation.json'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const ErrorPage = () => {
    const [showInfo, setShowInfo] = useState(false);
    const handleLearnMoreClick = () => {
        setShowInfo(!showInfo);
    };

    const params = useParams();
    
    const navigate = useNavigate();

    const errorLottieAnimationOption = {
        loop: true,
        autoplay: true,
        animationData: errorAnimation,
        renderSetting:{
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return ( 
    <>
        <div className=' flex flex-row bg-gray-200 justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center mb-4 text-3xl text-gray-800 ml-56 space-y-12 w-fit max-w-xl'>
                <div className='text-5xl font-bold'>Page not found</div>
                <div className='flex flex-col'>
                    <div className='text-center text-gray-600 space-y-4'>
                        <div>We looked everywhere for this page</div>
                        <div>The requested URL <u>/{params['*']}</u> does not exist on our server</div> 
                    </div>
                    {showInfo && 
                        <div className='flex flex-col items-center justify-center'>
                            <p className='mt-4 max-w-96 text-left text-2xl'>There could be several reasons why you're facing this problem:</p>
                            <ul className='mt-4 max-w-md text-left text-2xl space-y-2 list-disc list-inside'>
                                <li>Make sure that the URL is correct.</li>
                                <li>Check your internet connection.</li>
                                <li>The page you're looking for might have been removed or is currently undergoing updates.</li>
                            </ul>
                        </div>
                    }
                    <button onClick={handleLearnMoreClick} 
                            className='mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                {showInfo ? 'Show Less' : 'Show More'}
                    </button>
                    <button 
                        className='mt-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => {navigate('/')}}
                        >Go to homepage</button> 
                </div>
            </div> 
            <Lottie
            options={errorLottieAnimationOption}
            width={400}
            height={400}
            />
        </div>
        
    </> );
}
 
export default ErrorPage;