

//5버전
//import { useHistory } from "react-router";
//6버전
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
//navigate(-1) 뒤로가기 navigate('/detail') detail경로로 이동
import { useParams } from "react-router";
import styled from 'styled-components';
import '../Detail.scss';
import { 재고context } from "../App";
import { Nav } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";

const 박스 = styled.div`
  padding : 20px;
`;
const 제목 = styled.h4`
  font-size: 25px;
  color : ${props => props.색상};
 `;
const 알림창 = styled.div`
  background-color: #ffe591;;
    padding: 20px;  
    border-radius: 5px;
    max-width: 500px;
    width:100%;
    margin: auto;
    display: ${props => props.없음};
    p{
      margin-bottom: 0;
    }
`;


function Info({재고}) {
  return (
    <p>재고 : {재고}</p>
    )
}



const Detail = ({ shoes }) => {
  let [a, b] = useState(true);
  let 재고 = useContext(재고context);
  let [누른텝, 누른텝변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  
  
  let 타이머 = useEffect(() => {
    setTimeout(() => {
    b(false)
    },2000)
  
    return clearTimeout(타이머);
    // return () => { alert('안녕히가세욤!')}
  },[a])

  let navigate = useNavigate();
  let { id } = useParams();
  id = Number(id)
    
   
    return (
        <>
        <div className="container">
          <박스>
            <제목 색상='red'>상세페이지</제목>  
          </박스>
          {
            a === true ?
          <알림창>
             <p>재고가 얼마 남지 않았습니다.</p>
           </알림창>: null
          }
         
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
              <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p> 
              <p>{shoes[id].price}</p>
              
              <Info 재고={재고[id]}>  </Info>
              <button className="btn btn-danger">주문하기</button>
              &nbsp;
              <button className="btn btn-danger" onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
          </div>

          <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
  <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={() => { 누른텝변경(0); 스위치변경(false)}}>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={() => { 누른텝변경(1); 스위치변경(false) }}>Option 2</Nav.Link>
  </Nav.Item>
          </Nav>
          <CSSTransition in={스위치} classNames="wow-enter" timeout={500}>
            <TabContent 누른텝={누른텝} 스위치변경={스위치변경} />
          </CSSTransition>
</div> 
        </>
    )
}

function TabContent({ 누른텝, 스위치변경 }) {
  
  //컴포넌트가 등자할 때 변경될 때 작동하게 되어있음
  useEffect(() => {
    스위치변경(true);
  })
  
  
  if (누른텝 === 0) {
    return <div>0번째 내용입니다.</div>
  } else if (누른텝 === 1) {
    return <div>1번째 내용입니다.</div>
  } else if (누른텝 === 2) {
    return <div>3번째 내용입니다.</div>
  }
}

export default Detail