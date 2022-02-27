
/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Navs from './components/Nav';
//import Main from './components/Main';
import Detail from './components/Detail';
import axios from 'axios';
import { Link } from 'react-router-dom';  


// 6버전 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import shoeses from './data'

{/*
// 5버전 
import { Link, Route, Switch } from 'react-router-dom';
 <Route exact path="/">
        <Main />   아래 한줄과 똑같다!
      </Route> */}

    
      const Main = ({ shoes,change }) => {
        return (
            <>
            <div className="BG">
            <h1>20% Season OFF</h1>
         
            <p>
              This is a simple hero unit, a simple tesPage component for calling
              extra attention to feautred content or information.
            </p>
            <p>
              <Button varint="primary"> Learn more</Button>
            </p>
            </div>
               
           <div className="container">
            <div className="row">
              {shoes.map((product, index) => {
               
                return <Product product={product} index={index} />
              })}
            </div>
            <Button varint="primary" onClick={()=> {
            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then(res => { change([...shoes,...res.data])})
          }}>더보기</Button>
          </div>
            </>
    )
    
      }
    
      function Product({ product, index }) {
        index = index +1;
        return (
      <>
            <div className="col-md-4" key={index}>
            <Link to={`/detail/${index-1}`}>
                <img src={`https://codingapple1.github.io/shop/shoes${index}.jpg`} width="100%"></img>
                </Link>
              <h4>{ product.title}</h4>
                <h4>{product.content}&& {product.price}</h4>
               
        </div>
      </>
        )
      
      }



function App() {
  let [shoes, shoes변경] = useState(shoeses);
  let [재고, 재고변경] = useState([10, 11, 12]);

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
        <Route exact path="/" element={<Main shoes={shoes} change={shoes변경}  /> }  />
        <Route path="/detail/:id" element={<Detail shoes={shoes} 재고={재고} />} />
      </Routes>
    
      </div>
     
  );
}



export default App;
