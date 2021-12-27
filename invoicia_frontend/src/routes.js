import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import { Component } from 'react';
import './App.css';

//add or uncomment that perticular components from following as you configure any of compontent

import Header from './components/Header/header';

import SignupForm from './components/Auth/signup';
// import Footer from './components/Footer/footer';

import Footer from './components/Footer/footer';


import LoginForm from './components/Auth/login';
// import Signup from './components/Auth/signup';
// import ForgotPswd from './components/Auth/forget_password';

import Profile from './components/User/profile';
// import Edit from './components/User/edit_profile';

class Routers extends Component {
  
    render() {
      return (
        <div className="App">
          <div className="wrap">
            <BrowserRouter>
            <Header/>     
            <Route path='/signup'><SignupForm/></Route>
            <Route path='/login'><LoginForm/></Route>
            <Route path='/profile'><Profile/></Route>
            <Footer/>
            </BrowserRouter>
            </div>
        </div>
      );
  
    }
  }
  
  export default Routers;
  