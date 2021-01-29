import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './components/pages/Services';
import Query from './components/pages/Query';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Ameriquen from './components/pages/Ameriquen';
import Ameriques from './components/pages/Ameriques';
import Afrique from './components/pages/Afrique';
import Asie from './components/pages/Asie';
import Europe from './components/pages/Europe';
import Australie from './components/pages/Australie';
import { render } from 'react-dom';


function App() 
{
  return (
    
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/services' exact component = {Services} />
        <Route path='/query' exact component = {Query} />     
        <Route path='/sign-up' exact component = {SignUp} />
        <Route path='/ameriquen' exact component = {Ameriquen} />
        <Route path='/ameriques' exact component = {Ameriques} />
        <Route path='/afrique' exact component = {Afrique} />
        <Route path='/asie' exact component = {Asie} />
        <Route path='/europe' exact component = {Europe} />
        <Route path='/australie' exact component = {Australie} />
       </Switch>
    </Router>
      
    
  );
  }
     


export default App
