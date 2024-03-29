import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage/loginPage';
import Register from './pages/RegisterPage/registerPage';
import Layout from './components/layout/layout';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode , setDarkMode] = useState(()=>{
    return sessionStorage.getItem('darkMode') === 'true' ? true : false
  });
  useEffect(()=>{
    console.log(darkMode)
    sessionStorage.setItem('darkMode', darkMode)
    if(darkMode){
      document.body.classList.add('dark');
    }else{
      document.body.classList.remove('dark');
    }
  },[darkMode])
  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
  }
  return (
    <> 
      <div className="flex">
        <button className='abosolute pl-2 left-16 top-9' onClick={toggleDarkMode}>
          darkMode
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login darkMode={darkMode}/>}/>
          <Route path="/Register" element={<Register darkMode={darkMode}/>}/>
          <Route path="/home" element={<Layout  darkMode={darkMode} children={<div>Home Page</div>} path='/home'/>}/>
          <Route path="*" element={<div>error</div>}/>
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App