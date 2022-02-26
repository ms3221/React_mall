

//5버전
//import { useHistory } from "react-router";
//6버전
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
//navigate(-1) 뒤로가기 navigate('/detail') detail경로로 이동
import { useParams } from "react-router";
import styled from 'styled-components';
import '../Detail.scss';

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




const Detail = ({ shoes }) => {
  let [a, b] = useState('block');
  
  useEffect(() => {
    // setTimeout(() => {
    // b('none')
    // },2000)
  
    return () => { alert('안녕히가세욤!')}
  })

  let navigate = useNavigate();
  let { id } = useParams();
  id = Number(id)
    
   
    return (
        <>
        <div className="container">
          <박스>
            <제목 색상='red'>상세페이지</제목>
          </박스>
          <알림창 없음={a}>
             <p>재고가 얼마 남지 않았습니다.</p>
          </알림창>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
              <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p> 
          <p>{shoes[id].price}</p>
              <button className="btn btn-danger">주문하기</button>
              <button className="btn btn-danger" onClick={ ()=> navigate(-1)}>뒤로가기</button>
        </div>
      </div>
</div> 
        </>
    )
}

export default Detail