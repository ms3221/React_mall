
/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Navs from './components/Nav';
import Main from './components/Main';
import Detail from './components/Detail';


// 6버전 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import shoeses from './data'

{/*
// 5버전 
import { Link, Route, Switch } from 'react-router-dom';
 <Route exact path="/">
        <Main />   아래 한줄과 똑같다!
      </Route> */}

function App() {
  let [shoes, shoes변경] = useState(shoeses);

  return (
    
    <div className="App">
      {/* <p>{process.env.REACT_APP_PORT}1</p> */}
   
      
      {/* //5버전
       <Navs />
      <Switch>
      <Route exact path="/" component={ Main } />
      <Route path="/detail" component={Detail} />
    </Switch> */}
      <Navs />
      <Routes>
        <Route exact path="/" element={<Main shoes={shoes} /> }  />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      </Routes>
      
      </div>
     
  );
}

export default App;
