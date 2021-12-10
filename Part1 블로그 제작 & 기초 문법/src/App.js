/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "아동복",
  ]);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false); //모달을 켜고 닫는 스위치

  let [누른제목, 누른제목변경] = useState(0);
  let [ㅇㅇ, ㅇㅇ변경] = useState(0);
  let [입력값, 입력값변경] = useState(""); //초기값 = 빈 문자열

  function 반복된UI() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }

    return 어레이;
  } //안녕 세 번 반복
  // var 어레이 = [2,3,4];

  // var 뉴어레이 = 어레이.map(function(a){
  //   return a * 2
  // });

  // let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "유아 코트 추천";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "blue", fontSize: "30px" }}>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>8월 8일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3
          onClick={() => {
            modal변경(true);
          }}
        >
          {글제목[2]}
        </h3>
        <p>11월 22일 발행</p>
        <hr />
      </div>

      {반복된UI() /*일반 for 반복문*/}

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h3
                onClick={() => {
                  누른제목변경(i);
                }}
              >
                {a}{" "}
                <span
                  onClick={() => {
                    따봉변경(따봉 + 1);
                  }}
                >
                  👍
                </span>{" "}
                {따봉}
              </h3>
              <p>8월 8일 발행</p>
              <hr />
            </div>
          );
        }) //map 이용한 반복문
      }

      {modal === true ? (
        <Modal 글제목={글제목} /*작명*/ 누른제목={누른제목}></Modal>
      ) : null}

      {/* <input onChange = { (e) => { 입력값변경(e.target.value) } } />    */}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var arrayCopy = [...글제목]; //어레이 카피본
            arrayCopy.unshift(입력값); //어레이 맨 앞에 자료 하나 추가
            글제목변경(arrayCopy);
          }}
        >
          저장
        </button>
      </div>

      {/* <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
       <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
       <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button> */}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고닫기
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    //<자식 컴포넌트 작명 = {state명}/>  자식 컴포넌트는 부모컴포넌트가 가진 state를 쓰려면 props로 전송해줘야 쓸 수 있음
    <div className="modal">
      <h2>제목 {props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
