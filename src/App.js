
/* eslint-disable */

import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';

import Navs from './components/Nav';
import Main from './components/Main';
import Detail from './components/Detail';

// 6버전 
import { BrowserRouter,Routes, Route } from 'react-router-dom';

{/*
// 5버전 
import { Link, Route, Switch } from 'react-router-dom';
 <Route exact path="/">
        <Main />   아래 한줄과 똑같다!
      </Route> */}

function App() {
  return (

    <div className="App">
   
      
      {/* //5버전
       <Navs />
      <Switch>
      <Route exact path="/" component={ Main } />
      <Route path="/detail" component={Detail} />
    </Switch> */}
      <Navs />
      <Routes>
        <Route exact path="/" element={ <Main /> }  /> 
        <Route path="/detail" element={<Detail />} />
      </Routes>
      
      </div>
     
  );
}

export default App;
