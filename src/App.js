
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import { useState } from 'react';
import shoeses from './data'
import {Route, Routes } from 'react-router-dom'


function Product({ product, index }) {

  index = index +1;
  return (
  
    
<>
      <div className="col-md-4" key={index}>
        <img src={`https://codingapple1.github.io/shop/shoes${index}.jpg`} width="100%"></img>
        <h4>{ product.title}</h4>
        <h4>{product.content}&& { product.price}</h4>
  </div>
</>
  )

}

function App() {

  let [shoes, shoes변경] = useState(shoeses);

 

  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
      </Navbar>
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
      <Routes>
      <Route path="/">
       <div>메인페이지입니다.</div>
      </Route>
      </Routes>

      
      <div className="container">
        <div className="row">
          {shoes.map((product, index) => {
           
            return <Product product={product} index={index} />
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
