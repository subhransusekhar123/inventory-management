import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Components/product/Product';
import Private from './Components/private/Private';
import OrderPage from './Components/orderpage/OrderPage';
import Customer from './Components/customer/Customer';
import User from './Components/user/User';
import Signup from './Components/signUp/Signup';
import Login from './Components/logIn/Login';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={ <Private/> }>
            <Route path="/product" element={ <Product/> }/>
            <Route path="/order" element={ <OrderPage/> }/>
            <Route path="/customer" element={ <Customer/> }/>       
            <Route path="/customer" element={ <User/> }/>            
          </Route>
          <Route path="/" element={ <Signup/> }/>
          <Route path="/signin" element={ <Login/> }/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
