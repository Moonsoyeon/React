# React

2021년 수강한 "REACT 리액트 기초부터 쇼핑몰 프로젝트까지!" 강의입니다.

[CodingApple](https://online.codingapple.com/course/react-basic/)

## React 리액트 기초부터 쇼핑몰 프로젝트까지!

<details>
<summary>배울 내용</summary>

    – class 문법 없이 개발하는 2020스타일 easy-mode 리액트

    – 컴포넌트, Props, State를 이용한 웹앱 개발

    – 리액트로 HTML 모듈화해서 개발하는 법

    – JSX for 반복문, 이벤트 핸들러 등 어떻게 쓰는지 정확히 알려줌

    – 리액트 CLI로 프로젝트 생성, 관리, 빌드하는 법

    – Redux와 context API로 데이터 관리

    – Ajax 등으로 서버 API 요청하는 법 (을 배울 텐데 Ajax가 뭔지 모르니까 그것부터)

    – 라우터로 페이지 나누기

    – 리액트에서 CSS 스타일링 잘하는 법 (styled component, SASS)

    – import/destructuring/arrow function 등 필요한 ES6 문법들

    – 스마트폰에 설치 가능한 Progressive Web App으로 리액트사이트 발행하기

    – (포트폴리오 자랑용) github pages를 이용해 사이트 발행

</details>

---

<details>
<summary>1-3</summary>

### JSX를 이용해 HTML 페이지 제작해보는 건 처음이겠죠

```
리액트에서 class=""를 넣고 싶다면 className=""

데이터바인딩 var data = '안녕하세요'; <div>{ data }</div>
  -> { } 꼭 중괄호 안에

<div style = {{ color : 'blue', fontSize : '30px' }}>글씨</div>
  -> {속성명 : '속성값} 대쉬(-) 불가능, 붙여쓰고 앞글자를 대문자로 치환
```

</details>

<details>
<summary>1-4</summary>

### 중요한 데이터는 변수 말고 리액트 state로 만들랬죠

state를 쓰는 이유

```
변수가 변경될 때 자동으로 관련된 HTML을 재렌더링되게 만들고 싶어서
수정사항이 자동으로 웹페이지에 스무스~하게 반영되게 만들고 싶어서
```

let [a, b] = useState('ㅇㅇㅇㅇ');

```
a : 실제 저장할 데이터, b : 저장할 데이터를 변결시킬 함수
데이터바인딩 가능 <h3>{a}</h3> => <h3>ㅇㅇㅇㅇ<h3>
Array, Object 가능 let [a, b] = useState(['ㅇㅇ', 'ㄴㄴ']);
```

</details>

<details>
<summary>1-5</summary>

### 버튼에 기능 개발을 해보자 & 리액트 state 변경하는 법

리액트에서 특정 HTML 요소를 클릭했을 때 자바스크립트를 실행하고 싶으면

```
<div onClick = { 실행할 함수 }>
Click이 대문자, {} 중괄호 사용, 그냥 코드가 아닌 함수를 적어야 함
ex) <div onClick = { 함수이름 }>
    <div onClick = { function(){ 실행할 코드 } }>
    <div onClick = { () => { 실행할 코드 } }>
```

state는 변수와는 다르게 값을 변경할 때 지정된 변경 함수를 써야 함

```
ㅇㅇ변경(대체할 데이터)
ex) <span>👍</span> 을 눌렀을 때 따봉이라는 state를 1 증가하려면 어떻게 해야할까요?
    <span onClick = { { () => { 따봉변경(따봉 + 1) } } }>
```

</details>

<details>
<summary>1-6</summary>

### 숙제 해설 : 블로그 글 수정버튼 만들기

원래 자바스크립트 내에서 array나 object 자료형은 = 등호로 복사하면 각각 별개의 자료형이 생성되는게 아니라 값을 공유함

```
ex) var data1 = [1, 2, 3]; var data2 = data1;
    => data1과 data2는 각각 [1, 2, 3]을 별개로 저장하는 게 아닌 똑같은 값을 공유함
    => data1을 변경하면 data2도 자동으로 변경됨

state도 = 등호를 이용해서 복사하면 문제가 일어나기 때문에 완전히 개별 복사본을 만들어주는 카피를 해야 함
  => ex) var 새로운array = [...원본array]
  => function 제목바꾸기() {
       var newArray = [...글제목];
       newArray[0] = '여자코트 추천';
       글제목변경( newArray );
     }
```

</details>

<details>
<summary>1-7</summary>

### React Component : 많은 div들을 한 단어로 줄이고 싶은 충동이 들 때

return () 안에 HTML을 넣을 때 태그 2개를 평행하게 넣을 수 없음

```
굳이 쓰고 싶다면
<div>
  <div></div>
  <div></div>
</div>
```

Component

```
리액트에서 제공하는 긴 HTML을 한 단어로 깔끔하게 치환해서 넣을 수 있는 문법
함수 만들 듯, 변수 만들 듯 한 단어로 치환해서 원하는 곳에 꽂아넣을 수 있음
```

방법

```
1. function을 이용해서 함수를 하나 만들기
2. 그 함수 안에 return() 안에 원하는 HTML을 담기
3. 원하는 곳에서 <Modal></Modal> 이라고 사용했을 때 축약한 HTML이 등장
   -> 축약한 HTML 덩어리를 Component 라고 칭함
   -> ex)
      function App (){
        return (
            <div>
                HTML 잔뜩있는 곳
                ...
                <Modal></Modal>
            </div>
        )
      }

      function Modal(){
          return (
              <div className="modal">
                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>
              </div>
        )
      }
```

Component의 특징

```
Component 이름 지을 땐 보통 영어 대문자로 시작
return() 안에 태그들이 평행하게 여러 개 들어갈 수 없음 ex) <div>, <></>
Component 위치는 보통 funcion App(){} 와 나란히 만듦
  -> 보통 컴포넌트 안에다가 컴포넌트를 만들진 않기 때문
  -> Component 안에 미리 만들어둔 Component 집어넣기도 가능
```

어떤 HTML들을 Component 만드는게 좋을까

```
사이트에 반복해서 출현하는 HTML 덩어리들
내용이 자주 변경될 것 같은 HTML의 한 부분
다른 페이지를 만들 때
다른 팀원과 협업할 때 웹페이지를 컴포넌트 단위로 작업 분배
```

Component 단점

```
HTML을 깔끔하게 쓰려고 함수 자체를 많이 만드는 것 자체로 관리가 힘듦
<Modal>이라는 컴포넌트가 App(){} 안에 있는 state를 사용하고 싶을 때, 그냥 바로 쓸 수 없음
  => props라는 문법을 이용해 state를 <Modal>까지 전해줘야 사용 가능
```

</details>

<details>
<summary>1-8</summary>

### 클릭하면 동작하는 UI (모달창) 만드는 법

리액트는 중괄호 내에서 if문을 사용할 수 없어서 삼항연산자를 사용해야 함

```
조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
```

</details>

<details>
<summary>1-9</summary>

### map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때

반복문도 {중괄호} 안에서 { for (){} } 이렇게 넣을 수 있지않을까 생각할 수 있지만 {중괄호} 안에는 변수, 함수만 입력 가능함

```
중괄호 안에서 쓸 수 있는 map이란 반복문 이용
```

방법

```
ex1)
var 어레이 = [2, 3, 4];
어레이.map(function(){
});
  => 모든 array에 붙일 수 있으며 소괄호 안에 콜백 함수 하나 넣는 게 기본, map 안의 코드가 어레이 자료의 갯수만큼 실행됨(ex1에서 3번)

ex2)
var 어레이 = [2, 3, 4];
어레이.map(function(a){
  return a * 10
});
  => 콜백 함수 소괄호 안에 파라미터를 아무 이름이나 입력해주면(ex2에서 a), a라는 파라미터가 어레이 안에 있던 모든 자료를 하나씩 출력해주는 역할을 함 => [20, 30, 40]이 됨

ex3)
var 어레이 = [2, 3, 4];
var newArray = 어레이.map(function(a){
    return a * 10
});
  => 참고로 map 함수는 원본 자료형을 변형시키지 않아서 보통 새로운 변수에 담아서 사용함
      newArray에는 [20,30, 40], 원래 어레이에는 [2, 3, 4]
```

JSX 안에서 map으로 반복문을 돌리고 싶으면

```
1. 원하는 자료에다가 map을 붙이면 그 자료 갯수만큼 반복문 돌리기 가능
2. 반복을 원하는 HTML을 return 안에 적으면 끝

ex)
<div>
  ~~~HTML 잔뜩~~~
  ...
  { 글제목.map(function(){
      return (<div>안녕</div>)
  }) }
</div>
  => 현재 글제목 array에는 3개의 데이터가 들어있으니 실행해보면 div도 3개가 남음
```

반복된 HTML에 각각 다른 내용을 부여하고 싶다면

```
ex)
<div>
  ~~~HTML 잔뜩~~~
  ...
  { 글제목.map(function(a){
      return (
          <div className="list">
            <h3>{ a }</h3>
            ~~~HTML 잔뜩~~~
          </div>
      )
  }) }
</div>

반복된 HTML 안에 onClick = {} 이런 거 넣어도 잘 작동함
```

일반 for 반복문을 사용하고 싶다면

```
따로 함수를 만들어서 사용해야 함
  1. 따로 일반 함수를 만들고
  2. 함수 안에 HTML을 담을 array 자료를 하나 생성
  3. 함수 안에서 for 반복문을 이용해 array 내에 HTML을 추가
  4. 완성된 array를 return
  5. 함수를 원하는 곳에 { 함수명() } 데이터바인딩

  ex)
  function 반복된UI(){
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
        어레이.push(<div>안녕</div>)
    }
    return 어레이
  }
  return (
    <div>
        ~~~HTML 잔뜩~~~
        { 반복된UI() }
    </div>
  )
```

</details>

<details>
<summary>1-10</summary>

### props : 자식이 부모의 state를 가져다쓰고 싶을 땐 말하고 쓰셔야합니다

props를 사용하는 이유

```
1-7에서 App이라는 컴포넌트 안에 <Modal> 이라는 컴포넌트를 만듦
App : 부모 컴포넌트 Modal : 자식 컴포넌트
자식 컴포넌트가 부모 컴포넌트 안에 있던 state를 가져다 쓰고 싶을 때!
props라는 문법으로 state를 전송한 뒤에 {props.state이름}
```

방법

```
1. <자식컴포넌트 전송할 이름 = { state명 }> 이렇게 사용한 후
2. 자식컴포넌트 선언하는 function 안에 파라미터를 하나 만들어주기

ex) 글제목이라는 부모 컴포넌트의 state를 자식 컴포넌트에 전송해보기
    funtion App() {
      let [글제목, 글제목변경] = useState(['aa', 'bb', 'cc']);
        return(
            <div>
              ...
              <Modal 글제목 = {글제목}></Modal>
            </div>
        )
    }
    function Modal(props){
        return(
            <div className="modal">
              <h2>제목 { props.글제목[0] }</h2>
              <p>날짜</p>
              <p>상세내용</p>
            </div>
        )
    }

1. <Mdoal 전송할이름 = {state명}> 이렇게 원하는 state를 적어주면 전송됨
2. function Modal(props){} 이렇게 쓰면 전송된 props 사용 가능

  => 무한대 전송 가능
  => props라는 파라미터에는 전송한 모든 props 데이터가 들어가있음
    props.글제목 이런 식으로 원하는 것만 꺼내서 쓰면 됨
  => props 전송할 때 꼭 {} 중괄호로 전송해야 하는 건 아님
    <Modal 글제목 = {변수명}> 변수명을 넣고 싶으면 중괄호
    <Modal 글제목 = "강남우동맛집"> 일반 텍스트를 전송하고 싶으면 따옴표
```

</details>

<details>
<summary>1-11</summary>

### (UI 제작 패턴) props를 응용한 상세페이지 만들기

글말고 따로 버튼 3개를 만들어서 한번 개발해봅시다

```
각각 버튼을 누르면 각각 다른 제목의 모달 제목이 떠야함
  1. 일단 버튼 3개 만들기
  2. 각각 버튼을 누르면 글제목이 수정되어야 함
     Modal이라는 컴포넌트 안에 제목 부분을 props.글제목[누른제목] 으로 수정
     => 누른제목 이라는 변수가 0이면 0번째 제목이 뜬다
  3. App 안에 누른제목이라는 변수를 state로 만들기 (기본값 0)
     => 몇번째 글제목을 눌렀는지의 정보를 보관하는 곳
  4. 모달창 안에 props.글제목[props.누른제목]으로 수정
     <Modal 글제목 = {글제목} 누른제목 = {누른제목}></Modal>으로 수정
     => 부모가 가진 state를 쓰려면 props로 신고하고 써야하기 때문
     <Modal>이라는 태그 안에서 원하는 이름의 props를 전송하고
     Modal 안에서 props.이름 이런 식으로 써야 함
     => 모달창은 누른제목이라는 state의 숫자에 따라서 제목이 변경됨
```

버튼을 눌렀을 때 state를 변경하려면?

```
ex)
<button onClick={()=>{ 누른제목변경(0) }}>버튼1</button>
<button onClick={()=>{ 누른제목변경(1) }}>버튼2</button>
<button onClick={()=>{ 누른제목변경(2) }}>버튼3</button>
```

이제 직접 <h3> 글제목부분에 가서 누르면 state가 변경되게 만들자 (반복문)

```
ex)
{
    글제목.map(function(a){
        return(
            <div className = "list">
              <h3 onClick = { () => { 누른제목변경(0) } }>{ a } ~~html~~ </h3>
            </div>
        )
    })
}

<button onClick={()=>{ 누른제목 = 0 }}>버튼1</button> 처럼 작성하면 에러
  => state를 변경할 땐 state 변경함수를 사용해야 하고, 등호를 사용하면 안 됨

클릭했을 때 동작하게 하기 위해 onClick 안에 state 변경함수 삽입

대충 0이라고 넣었기 때문에 현재는 어떤 제목을 누르던 state가 0으로 변경 됨
```

0이 아니라 각각 제목들마다 누른제목변경(0), 누른제목변경(1) ~~ 이 되도록 해보자

```
ex)
{
    글제목.map(function(a, i){
        return(
            <div className = "list">
              <h3 onClick = { () => { 누른제목변경(i) } }>{ a } ~~html~~ </h3>
            </div>
        )
    })
}

map 반복문을 쓸 때 다른 파라미터를 뒤에 추가해주면 됨
i =  반복문이 돌면서 0, 1, 2, 3 ~~ 이렇게 하나씩 증가하는 정수를 뜻함
```

결론

```
1. state 하나 만들고
2. state가 ~~상태면 UI를 ~~이렇게 보여주세요~ 라고 코드 작성
3. 필요하면 버튼을 누르거나 할 땐 state를 ~~이렇게 바꿔주세요~ 추가
```

</details>

<details>
<summary>1-12</summary>

### input 다루기 1 : 사용자가 입력한 글을 변수에 저장하는 법

사용자가 input에 입력한 데이터는 중요한 데이터이기 때문에 state에 저장해서 쓰는 게 일반적

```
ex) let[입력값, 입력값변경] = useState('');
```

사용자가 input에 입력한 값 알아내는 법

```
ex)
let[입력값, 입력값변경] = useState('');

return(
    <div>
      ~~~HTML잔뜩~~~
      <input onChange = { (e) => { console.log(e.target.value) } }/>
    </div>
)

input에 onChange 이벤트핸들러를 달고 자바스크립트 문법을 쓰면 됨
onChange : input에 무언가를 입력할 때마다 특정 함수를 동작시킴
e.target : '지금 이벤트가 동작하는 HTML 요소', 자바스크립트 문법 (input 태그 등)
.value : 그 HTML(input 등)에 유저가 입력한 값
```

input에 뭔가를 입력할 때마다 input에 입력된 값을 state에 저장하는 법

```
ex)
let[입력값, 입력값변경] = useState('');

return(
    <div>
      ~~~HTML잔뜩~~~
      <input onChange = { (e) => { 입력값변경(e.target.value) } }/>
    </div>
)
```

</details>

<details>
<summary>1-13</summary>

### input 다루기 2 : 블로그 글발행 기능 만들기

#### 1. 글을 적을 수 잇는 UI가 하나 필요하고

#### 2. 버튼을 눌렀을 때 글이 하나 추가되게 만들어야 함

1. 글적을 수 있는 UI부터 디자인해보자

```
ex)
<div>
  HTML 잔뜩 있는 곳
  <div className="publish">
    <input />
    <button>저장</button>
  </div>
</div>
```

2. 글 적고 저장 버튼을 누르면 게시물이 4개 되어야 함

```
1. 일단 사용자가 input에 뭔가를 입력하면 입력한 값을 state로 저장
2. 버튼을 누르면 그 state를 [글제목이라는 state] 어레이의 뒤에 하나 추가
   => 리액트에선 state를 변경하면 그것과 관련된 HTML도 재렌더링 됨

   => 1. 사용자가 input에 뭔가를 입력하면 입력한 값을 state에 저장하려면
      ex)
      let [입력값, 입력값변경] = useState('');

      return(
          <div>
            ~~~HTML잔뜩~~~
            <div>
              <input onChange = { (e) => { 입력값변경(e.target.value) } }/>
              <button>저장</button>
            </div>
          </div>
      )

    => 2. 버튼을 누르면 입력값 state를 [글제목] state에 추가할 것
       ex)
       let [입력값, 입력값변경] = useState('');

       return(
           <div>
             ~~~HTML잔뜩~~~
             <div>
               <input onChange = { (e) => { 입력값변경(e.target.value) } }/>
               <button onClick = { () => {
                   let arrayCopy = [...글제목];
                   arrayCopy.unshift(입력값);
                   글제목변경(arrayCopy)
               } }>저장</button>
             </div>
           </div>
       )
      -> 글제목이라는 state를 수정해서 글제목변경() 안에다가 집어 넣어야 함
         unshift() : array의 맨 앞 자료를 하나 추가
         글제목이라는 state는 직접 수정하면 안 되기 때문에
         1. 글제목을 복사해서 arrayCopy라는 카피본을 하나 만들고
         2. 그걸 수정하고
         3. 그걸 새로운 글제목 state가 되도록 입력
```

</details>

---

<details>
<summary>2-1</summary>

### 쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치

npm, nsx install을 사용했을 때 설치가 오래 걸린다면?

```
구글에 'yarn 1' 검색 후 installer 설치 + 컴퓨터 재시작

yarn : npm보다 훨씬 빠른 라이브러리 설치 속도, 안정성을 자랑
       npm install ~~ => yarn add ~~
       npm run start => yarn start
```

새로운 프로젝트 생성

```
작업 폴더를 VScode 에디터로 오픈한 뒤 터미널 오픈
리액트 설치 명령어 입력 npx create-react-app shop
shop이라는 폴더를 VScode 에디터로 오픈한 뒤 코딩 시작~
터미널에서 yarn start 명령어로 미리보기 띄우기
```

CSS 쌩코딩하기 귀찮다? Bootstrap 라이브러리를 설치하자

```
Bootstrap은 원조 라이브러리이고, 리액트에 맞게 변형한 React Bootstrap을 설치
터미널에서 npm install react-bootstrap bootstrap 또는 yarn add react-bootstrap bootstrap

때에 따라 특정 스타일을 사용할 때 Bootstrap CSS 파일을 요구하는 경우가 있음
사이트에 있는 CSS 파일을 index.html 파일의 <head> 태그 안에 복붙!

Bootstarp 설치가 잘 되었는지 테스트 하고싶다
  1. getbootstrap.com 들어간 후 Documentation 탭으로 이동
  2. 원하는 레이아웃을 검색 ex) Button
  3. 그 중에 원하는 버튼의 HTML을 내 App.js에 복붙
  4. 미리보기에서 버튼이 뜬다면 설치 성공
```

</details>

<details>
<summary>2-2</summary>

### 평화로운 쇼핑몰 레이아웃 디자인시간

#### Bootstrap을 이용한 레이아웃 디자인

상단메뉴(Navbar) 만들기

```
1. react bootstrap 공식사이트 Component 메뉴에서 navbar 검색
2. 마음에 드는 navbear의 HTML 예제코드를 복붙
3. import { Navbar } from 'react-bootstrap'; (딸려온 컴포넌트들도 전부 import 해줘야 함)
```

대문(Jumbotron) 만들기

```
navbar와 똑같이 작업 ㄱㄱ

배경이미지를 넣으려면
  1. <Jumbotron className="background">
  2. CSS 파일로 가서 .background{} 안에 스타일 작성
  3. src 폴더에 이미지파일을 옮겨서 ./image.jpg
```

상품 레이아웃 만들기

```
상품 이미지를 가로로 3개, 모바일에선 세로 1열로 진열하고 싶다 (가로 3분할)
  Bootstrap 사용하기
  <div className="col-md-4">상품1</div>
  <div className="col-md-4">상품2</div>
  <div className="col-md-4">상품3</div>
```

</details>

<details>
<summary>2-3</summary>

### 코드가 넘나 길어진다면 import / export 사용해보기

데이터바인딩을 하고싶은데 데이터가 너무 길다?

```
import / export 문법으로 변수나 함수나 자료형을 다른 파일로 저장해둔 뒤에 불러오기

data.js에서 App.js 이렇게 변수, 혹은 데이터를 보내려면
   1. 일단 data.js에서] 원하는 데이터를 export 하고
   2. App.js에서는 data.js를 import 하면 됨
   ex)
   (data.js 파일)
   var 중요데이터 = 'Moon';
   export default 중요데이터;
     => 변수명, 함수명, 자료형 전부 배출 가능
        파일마다 export default 라는 키워드는 하나만 사용 가능

   (App.js 파일)
   import 중요데이터 from './data.js';
     => 변수명이라는 부분은 자유롭게 작성 가능
        경로 쓸 때, ./ 라는 것은 현재 경로

여러개의 변수들을 내보내고 싶으면
   ex)
   (data.js 파일)
   var name1 = 'Moon';
   var name2 = 'Kim';
   export default name1, name2;
   (App.js 파일)
   import {name1, name2} from './data.js';
      => 변수명을 자유롭게 작명이 불가능하고 export 했던 변수명 그대로 사용
```

쇼핑몰 데이터를 state로 저장하고 싶은데 너무 길다, 다른 파일로 빼자

```
1. data.js 에 데이터를 저장하고
2. App.js 에 import Data from './data.js';
3. 사용하고 싶은 곳에서 let [shoes, shoes변경] = useState(Data);
```

3개의 상품 데이터를 알맞는 HTML 자리에 데이터바인딩 하기

```
ex)
~~~HTML잔뜩~~~
<div className = "col-md-4">
   <img src = "https://codingapple1.github.io/shop/shoes1.jpg" width = "100%" />
   <h4>{shoes[0].title}</h4>
   <p>{shoes[0].content} & {shoes[0].price}</p>
</div>
~~~shoes[1]~~~
~~~shoes[2]~~~
```

</details>

<details>
<summary>2-4</summary>

### 해설 : 상품목록 Component화 + 반복문

상품 레이아웃 컴포넌트화 하기

```
1. "col-md-4" 라는 div 박스들을 컴포넌트로 만들기
   function Goods(){
      return (
         <div classNmae="col-md-4">
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].content } & { shoes[0].price }</p>
         </div>
      )
   }
2. App(){} 안에 필요한 위치에 <Goods /> 추가
3. shoes라는 변수는 App 컴포넌트에 있고 Goods 컴포넌트에 없으니 props로 전송해주기
   <Goods shoes = {shoes} />

   function Goods(props){
      return (
         <div classNmae="col-md-4">
            <h4>{ props.shoes[0].title }</h4>
            <p>{ props.shoes[0].content } & { props.shoes[0].price }</p>
         </div>
      )
   }
```

각각의 Goods 컴포넌트마다 다른 데이터 전송해주기

```
shoes라는 [{}, {}, {}] 를 전부 다 전송하지 않고 하나의 {} 오브젝트만 각각 전송
   1. <Card shoes={shoes[0]} />
      <Card shoes={shoes[1]} />
      <Card shoes={shoes[2]} />
   2. <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
```

Goods 컴포넌트 반복문 돌리기

```
shoes 라는 state 갯수만큼 돌려야하니까 shoes에 map 붙이기
   {
      shoes.map((a, i) => {
      return <Goods shoes = {shoes{i}} />
      });
   }
   => map 반복문 안에는 2개의 파라미터가 들어갈 수 있음 (a, i)
      a는 shoes라는 array에 있던 하나하나의 데이터를 의미
      i는 반복문을 돌면서 1씩 증가하는 정수 (0, 1, 2 ...)
```

상품 이미지들 데이터바인딩 하기

```
1. <img src=”~~~/shoes1.jpg”> 이렇게 하드코딩 되어있는 코드를
2. <img src={ ~~~ shoes반복문돌때마다1,2,3으로변하는변수.jpg} /> 로 변경
   <img src={ 'https://codingapple1.github.io/shop/shoes' + i + '.jpg' } width="100%"/>
   => i는 map 안에 i라는 변수 (0, 1, 2 ...)
3. i라는 변수는 App 컴포넌트가 가지고 있는 변수이기 때문에 props로 전송
   {
      shoes.map((a,i)=>{
         return <Card shoes={shoes[i]} i={i} />
      });
   }
   <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%"/>
```

</details>

<details>
<summary>2-5</summary>

### React Router 1 : 셋팅과 기본 라우팅

설치 / 셋팅

```
yarn add ract-router-dom
(index.js 파일)
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
   </React.StrictMode>
   document.getElementById('root')
);
   => BrowerRouter는 사이트 방문시 주소에 # 없이 깔끔
   => HashRouter는 사이트 방문시 URL 맨 뒤에 /#/이 붙은 채로 시작
      원래는 브라우저 주소창에 뭔가 페이지를 입력하면 서버에게 특정 페이지 좀 보여달라는 요청이 됨
      하지만 현재는 요청할 서버가 없고 그냥 리액트가 라우팅을 담당 중
      그래서 잘못하면 있지도 않은 페이지를 서버에 요청해서 404 Page Not Found 에러가 뜰 수 있음
      실수로 서버에게 요청하지 않게 하려면 안전하게 # 붙이기
      브라우저 주소창에서 # 뒤에 붙은 것들은 절대 서버로 요청되지 않음
```

라우팅 (페이지 나누기)

```
1. / 여기로 접속하면 메인페이지 보여주기
2. /detail 로 접속하면 상세페이지 보여주기

라우팅을 하려면
   1. 여러가지 태그들 import
      import { Link, Route, Switch } from 'react-router-dom';
   2. 원하는 곳에 <Route></Route> 태그 작성
   3. <Route> 안에 path와 path 방문 시 보여줄 HTML 작성
      ex)
      <div>
         ~~~HTML잔뜩~~~
         <Route path = "/">
            <div>메인페이지</div>
         <Route>
         <Route path = "/detail">
            <div>상세페이지</div>
         <Route>
      </div>
   4. 브라우저 주소창에
      http://localhost:3000/ 로 접속하면 "메인페이지",
      http://localhost:3000/detail 로 접속하면 "상세페이지"가 보임
   => 참고로 <Route path = "/어쩌고" component = {Goods}></Route>를 작성하면 /어쩌고 라는 경로로 접속했을 때 Goods 라는 컴포넌트를 보여줌

/detail로 접속했는데 왜 상세페이지, 메인페이지 둘 다 보여줘?
   => /detail 이라고 적으면 / 라는 경로도 포함 되어있음
      싫으면 / 경로에 exact 라는 속성을 부여해주면 됨
      ex)
      <Route exact path="/">
         <div>메인페이지에요</div>
      </Route>
```

</details>

<details>
<summary>2-6</summary>

### React Router 2 : Link, Switch, history 기능

< Detail > 을 다른 파일에 저장해둔 뒤 App.js까지 import 해오기

```
1. src 폴더 내에 Detail.js 파일을 만들고
2. import React from 'react';
3. function Detail(){ return( ~~~HTML잔뜩~~~ ) };
4. 맨 마지막 줄에 Detail 이라는 함수를 export default Detail
5. (App.js 파일)
   import Detail from'./Detail.js';
   <Route path = "/detail">
      <Detail/>
   </Route>
```

Link 태그로 페이지 이동 버튼 만들기

```
상단메뉴(Navbar)로 이동
   <Nav.Link> <Link to = "/">Home</Link> </Nav.Link>
   <Nav.Link> <Link to = "/detail">Detail</Link> </Nav.Link>
   => Link 태그를 사용하고 to 속성을 이용해 경로만 지정해주면 됨
```

다른 방법으로 페이지 이동 기능 만들기

```
1. import {useHistory} from 'react-router-dom';
2. let history = useHistory();
   -> useHistory() : 페이지 이동 내역 + 여러가지 유용한 함수
                     history 라는 변수엔 큰 object{} 자료가 하나 저장되어있음
3. goBack() : 페이지가 뒤로 간다
   <button onClick = { () => { history.goBack() }} >뒤로가기</Button>
4. push() : 커스텀 페이지로 이동하는 기능을 만들고 싶다
   <button onClick = { () => { history.push('/') }} >뒤로가기</button>
```

Switch 컴포넌트에 대해 알아보자

```
Switch : 매치되는 <Route> 들을 전부 보여주지 말고 한 번에 하나만 보여주세요~
   => path = "/:id" : /슬래시 뒤에 모든 문자가 오면 이 Route로 안내해주세요~
      그럼 /detail로 이동하면 (1)<Detail> (2)<div>새로만든route</div> 둘 다 보여줌
      왜냐면 리액트 라우터는 그냥 URL 매치되는 것들 전부 다 보여주니깐
      한 번에 하나의 <Route>만 보여주고 싶다?
      => <Route>들을 위에서 import 해온 <Switch> 태그로 감싸면 됨
         감싸주면 여러 개의 Route가 매칭이 되어도 맨 위의 Route 하나만 보여줌
         이걸 응용하면 / 경로 문제도, exact도 쓰지 않고 해결 가능
```

</details>

<details>
<summary>2-7</summary>

### React Router 3 : URL 파라미터로 상세페이지 100개 만들기

< Detail > 을 다른 파일에 저장해둔 뒤 App.js까지 import 해오기

```
1. src 폴더 내에 Detail.js 파일을 만들고
2. import React from 'react';
3. function Detail(){ return( ~~~HTML잔뜩~~~ ) };
4. 맨 마지막 줄에 Detail 이라는 함수를 export default Detail
5. (App.js 파일)
   import Detail from'./Detail.js';
   <Route path = "/detail">
      <Detail/>
   </Route>
```

Link 태그로 페이지 이동 버튼 만들기

```
상단메뉴(Navbar)로 이동
   <Nav.Link> <Link to = "/">Home</Link> </Nav.Link>
   <Nav.Link> <Link to = "/detail">Detail</Link> </Nav.Link>
   => Link 태그를 사용하고 to 속성을 이용해 경로만 지정해주면 됨
```

다른 방법으로 페이지 이동 기능 만들기

```
1. import {useHistory} from 'react-router-dom';
2. let history = useHistory();
   -> useHistory() : 페이지 이동 내역 + 여러가지 유용한 함수
                     history 라는 변수엔 큰 object{} 자료가 하나 저장되어있음
3. goBack() : 페이지가 뒤로 간다
   <button onClick = { () => { history.goBack() }} >뒤로가기</Button>
4. push() : 커스텀 페이지로 이동하는 기능을 만들고 싶다
   <button onClick = { () => { history.push('/') }} >뒤로가기</button>
```

Switch 컴포넌트에 대해 알아보자

```
Switch : 매치되는 <Route> 들을 전부 보여주지 말고 한 번에 하나만 보여주세요~
   => path = "/:id" : /슬래시 뒤에 모든 문자가 오면 이 Route로 안내해주세요~
      그럼 /detail로 이동하면 (1)<Detail> (2)<div>새로만든route</div> 둘 다 보여줌
      왜냐면 리액트 라우터는 그냥 URL 매치되는 것들 전부 다 보여주니깐
      한 번에 하나의 <Route>만 보여주고 싶다?
      => <Route>들을 위에서 import 해온 <Switch> 태그로 감싸면 됨
         감싸주면 여러 개의 Route가 매칭이 되어도 맨 위의 Route 하나만 보여줌
         이걸 응용하면 / 경로 문제도, exact도 쓰지 않고 해결 가능
```

</details>

---
