
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Main = ({ shoes }) => {
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
            <p4>{product.content} &  {product.price}</p4>s
    </div>
  </>
    )
  
  }
export default Main