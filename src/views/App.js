import '../styles/scss/global.scss'
import NavigationHeader from '../components/navigation/NavigationHeader';
import TaskBar from '../components/navigation/TaskBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from '../components/body/Body';
import Home from './home/index';
import Cart from './cart/index';
import Info from './info/Info';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getProducts } from '../stores/actions/products';
import { useSelector } from "react-redux";
function App() {



  return (
    <>
      <BrowserRouter>
        <NavigationHeader />
        <TaskBar />
        <Body>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/mini-store" element={<Home />}></Route>
            <Route path="mini-store/cart" element={<Cart />}></Route>
            <Route path="mini-store/info" element={<Info />}></Route>
          </Routes>


        </Body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
       
      </BrowserRouter>
    </>

  );
}

export default App;
