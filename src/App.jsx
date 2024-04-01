import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage/loginPage';
import Register from './pages/RegisterPage/registerPage';
import Layout from './components/layout/layout';
import AddItem from './pages/addItemPage/addItemPage'
import { useEffect, useState } from 'react';
import MyAccountPage from './pages/myAccount/myAccount';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route
            path="/home"
            element={<Layout children={<div>Home Page</div>} path="/home" />}
          />
          <Route path='/newItem' element={<Layout children={<AddItem/>}/>}/>
          <Route path="/myaccount" element={<Layout children={<MyAccountPage/>}/>}/>
          <Route path="*" element={<div>error</div>} />
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;