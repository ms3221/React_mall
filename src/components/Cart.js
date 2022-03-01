import React from 'react';

import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


function Cart(props) {
    
    return (
        <div>
<Table striped bordered hover variant="dark" responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경</th>
    </tr>
  </thead>
  <tbody>
      {
        props.states.map((el,i)=>{
            return (
     <tr>
      <td>{el.name}</td>
      <td>{el.quan}</td>
      <td><button onClick={()=>{props.dispatch({type : '수량증가'})}}>+</button></td>
      <td><button onClick={()=>{props.dispatch({type : '수량감소'})}}>-</button></td>
    </tr> 
            )
        })    
      }
    
   
  </tbody>
</Table>
        </div>
    )

}


//store 데이터를 가져오는 방법 
function state를props화(state) {
    return {
        states : state  // store데이터를 props로 등록
    }
}

export default connect(state를props화)(Cart);
//export default Cart;