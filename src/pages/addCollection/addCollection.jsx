import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const NewCollection = () => {

    const [title,setTitle]=useState("")
    const [lang,setLang] = useState("Select a language")
    const userId = localStorage.getItem("user_id")
    const token = Cookies.get("token")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(lang === "Select a language"){
            alert("please select a language")
        }else{
            const collection = {
                user : userId,
                title :title ,
                language : lang
            }
            console.log(collection)
            try {
                const response = await fetch('http://localhost:4000/api/collection/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
                  },
                  body: JSON.stringify(collection),
                });
                if (response.ok){
                    alert('collection created')
                    navigate('/MyLibrary')
                }
                
              } catch (error) {
                console.error(error);
              }
        }
    }

    return ( 
        <div 
      className="p-6 space-y-4 md:space-y-6 sm:p-8"
    >
      <h1 
        className="dark:text-white text-xl font-bold leading-tight tracking-tight"
      >
        Create your collection
      </h1>
      <form 
        className="space-y-4 md:space-y-6" 
      >
        <label
            htmlFor="title" 
            className="flex justify-start mb-2 text-sm font-medium dark:text-white"
        >
            Title of your collection
        </label>
        <input
            type="text" 
            name="title" 
            id="title" 
            value={title}
            onChange={ e => setTitle(e.target.value)}
            placeholder="enter a title for our collection" 
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-600 dark:border-gray-500 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            required 
        ></input>
        <label
            htmlFor="language" 
            className="flex justify-start mb-2 text-sm font-medium dark:text-white"
        >
            Language
        </label>
        <select 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-900 dark:bg-gray-600 dark:text-white" 
              value={lang}
              onChange={e => setLang(e.target.value)}
              required
            >
              <option key="select a language" value="Select a language">Select a Language...</option>
              <option key="ar" value="ar">Arabic</option>
              <option key="en" value="en">English</option>
              <option key="fr" value="fr">French</option>
              <option key="ru" value="ru">Russian</option>
              <option key="de" value="de">German</option>  
        </select>
        <button 
          onClick={handleSubmit}
          className="w-1/2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Create Collection
        </button>
      </form>
    </div>
     );
}
 
export default NewCollection;