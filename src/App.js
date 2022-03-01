
/* eslint-disable */


import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Navs from './components/Nav';
//import Main from './components/Main';
import Detail from './components/Detail';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cart from './components/Cart';


//context를 변수명으로 붙이는 것은 관습적인 표현명이다.
//context만들기
//React.createCnotext90로 범위 생성 
//같은 값을 공유할 HTML을 범위로 싸매기 
export let 재고context = React.createContext();
 
// 6버전 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import shoeses from './data'
import { useContext } from 'react';


{/*
// 5버전 
import { Link, Route, Switch } from 'react-router-dom';
 <Route exact path="/">
        <Main />   아래 한줄과 똑같다!
      </Route> */}

    
const Main = ({ shoes, change, 재고 }) => {
        

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
              <재고context.Provider value={재고}>
            <div className="row">
              {shoes.map((product, index) => {
               
                return <Product product={product} index={index} />
              })}
                </div>
                </재고context.Provider>vs
            <Button varint="primary" onClick={()=> {
            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then(res => { change([...shoes,...res.data])})
          }}>더보기</Button>
          </div>
            </>
    )
    
      }
    
function Product({ product, index }) {

  let 재고 = useContext(재고context);
        index = index +1;
        return (
      <>
            <div className="col-md-4" key={index}>
            <Link to={`/detail/${index-1}`}>
                <img src={`https://codingapple1.github.io/shop/shoes${index}.jpg`} width="100%"></img>
                </Link>
              <h4>{ product.title}</h4>
                <p4>{product.content}&{product.price}</p4>
             <Test></Test>
        </div>
      </>
        )
      
}
      
function Test() {
  let 재고 = useContext(재고context);
  return <p>재고 :{ 재고} </p>
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
      <재고context.Provider value={재고}>
      <Routes>
     
          <Route exact path="/" element={<Main shoes={shoes} change={shoes변경} 재고={재고} />} />          
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart></Cart>} />
       
      </Routes>
      </재고context.Provider>
      </div>
     
  ); 
}



export default App;
