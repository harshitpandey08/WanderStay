import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList.jsx';
import TourDetails from './../pages/TourDetails';
import Tours from './../pages/Tours';
import ThankYou from '../pages/ThankYou.jsx';


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigate to= '/home'/>}/>
      <Route path='/home' element={ <Home/>}/>
      <Route path='/tours' element={ <Tours/>}/>
      <Route path='/tours/:id' element={ <TourDetails/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/register' element={ <Register/>}/>
      <Route path='/thank-you' element={ <ThankYou/>}/>
      <Route path='/tours/search' element={ <SearchResultList/>}/>
    </Routes>
  )
}

export default Router
