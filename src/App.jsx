import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/LoginPage/loginPage';
import Register from './pages/RegisterPage/registerPage';

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="*" element={<div>error</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
