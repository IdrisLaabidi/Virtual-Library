import Lottie from 'react-lottie';
import feedbackAnimation from '../../assets/feedBack-animation.json';

const FeedbackPage = () => {
    const feedbackLottieAnimationOption = {
        loop: true,
        autoplay: true,
        animationData: feedbackAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div className="container mx-auto py-8">
    <h2 className="text-3xl font-bold mb-4 ml-20">Give us your Feedback !</h2>
    <div className="h-20"></div>
    <div className='flex'>
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="your first name"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="your last name"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-email"
        >
          E-mail
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-email"
          type="email"
          placeholder="exemple@gmail.com"
        />
      </div>
      <div className="mb-6 flex flex-col ">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-feedback"
        >
          Your message
        </label>
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-feedback"
          rows="4"
          placeholder="write your message here"
        ></textarea>
      </div>
      <div className="h-5"></div>
      <div class="flex items-center justify-center">
      <button
        className="w-48 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Submit
      </button>
      </div>
    </form>
    <div className="flex items-center justify-center ml-40 ">
          <Lottie
            options={feedbackLottieAnimationOption}
            height={400}
            width={400}
          />
        </div>
   </div>
    <div className="h-20"></div>
      {/* Additional social media section */}
      <section className="py-8 bg-blue-500 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">Follow Us on </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facebook */}
            <a href="https://www.facebook.com/Miri.Rayen/" className="flex items-center justify-center space-x-2 text-white">
              <span>Follow us on Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                {/* Facebook icon path */}
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/Miri.Rayen/" className="flex items-center justify-center space-x-2 text-white">
              <span>Follow us on Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                {/* Instagram icon path */}
              </svg>
            </a>
            {/* Twitter */}
            <a href="https://twitter.com/Miri_Rayen" className="flex items-center justify-center space-x-2 text-white">
              <span>Follow us on Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
                {/* Twitter icon path */}
              </svg>
            </a>
          </div>
        </div>
      </section>
      <footer className="py-4 text-white dark:bg-gray-800 ">
        <div className="container mx-auto text-center text-black dark:text-white">
          <p>&copy; {new Date().getFullYear()} Virtual Library. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FeedbackPage;



