import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
    //return 오른쪽엔 조건식. 참인 데이터만 새로운 변수에 저장해줌
  });
  let history = useHistory(); //방문 기록 등을 저장해놓은 object

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
              //history.push('/') '/'경로로 이동해주세요
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
