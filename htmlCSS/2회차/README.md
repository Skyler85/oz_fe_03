# 01. HTML 웹 개발 기초

D+2

---

## 링크 표시

다른 문서로 이동하는 수단
하이퍼텍스트 == 문서
<a href="이동하고자 하는 페이지의 주소">
hyper reference
target : _self 현대탭  _blank 새ㅐ창
기본값은 _self
절대주소, 상대주소 모두 가능 => 상대주소에서 상위폴더로 가기 위해서는 ../

## 목록 만들기
 * 블록레벨 요소 *
순서 없는 : Unodered List ->  <ul></ul>
순서 있는 : Ordered List -> <ol></ol>
item -> <li></li>
<ol start="4" type="i">
목록 안에 목록 가능

## 표 만들기
row 행 -> 가로 늘어남
col 열 -> 세로로 길어짐
table 표 > tr 행 > th > td 셀
th : 제목을 나타내는 태그. bold 적용되고, 가운데 정렬 처리됨

border : 테두리. 없으면 보기 불편함
caption : 설명. 중앙 정렬
* 컨테이너 -> 표의 구조가 명확하게 드러나 코드 유지 및 보수가 편리. 웹접근성 향상
thead : 표의 제목이나 주제를 나타내는 영역
tbody : 표의 본문을 나타내는 영역
tfoot :  표의 요약글이나 맺음말을 나타내는 영역

---- 입력중 td로 입력할 태그를 th로 잘못 입력했음
---- 일괄 선택(command + shift + L) 후 수정 완료

## 입력 태그 input
입력태그의 대표
<input type="데이터 유형"> 기본값 텍스트
text : email : search : 데이터 입력
color : number : range : 수치 입력

<label> 

## 입력 태그 그외 자주사용 하는...
드롭다운메뉴 -> <select> <option value="coffee">커피</option> <select>
여러줄 입력 input X -> <textarea>
작업진행도 확인 -> <progress>
<button>push</button> == <input type="button" value="push">


## 양식을 만들고 값 전송하기
form을 사용하여 input 태그 사용 예제 :: 정보를 서버로 전송함
> 로그인페이지, 회원가입, 검색
form의 속성
action : 입력값을 전송할 서버의 url
method : 사용자가 입력한 데이터를 전송하는 방식 (get, post)
> get 서버에 요청을 보내 응답을 받아낸다
> post 서버에 요처을 보내어 작업을 수행한다. 서로를 조작함(추가,수정,삭제)
* 폼의 이름을 정해주어야 한다.
서버가 정보를 받으면, name 속성으로 항목을 구별한다. 매우 중요!!
<label type="text" name="name" id="name">
id는 웹페이지 상에서의 식별자라면, name은 서버와의 관계에서의 식별자
input에서 name을 통일시켜 각 요소들을 그룹으로 묶을 수 있다. 4지선다 등


## 의미론적인 코드 - 시멘틱 태그

<의미>콘텐츠</의미>
검색엔진은 시맨틱 태그를 중요한 단서로 본다
시각 장애가 있는 사용자가 화면 판독기로 페이지를 탐색할 떄 참조된다.
코드의 가독성이 좋다.
컨테이너의 남용을 방지할 수 있어 코드 쓰기가 편하다.
- article
- aside
- details
- figcaption
- figure
- footer
- header
- main
- nav
- section
- summary
- time
시멘틱 태그는 컨테이너 태그와 같다. 웹사이트의 구조를 나태낸다.


## 문서 정보 관리하기 - 메타 데이터
html 문서에 대한 메타데이터. 정보
문자세트, 페이지 설명, 문서 정보, 내용 등
charset : http-equiv : name 📍 


## 미니 프로젝트 - 설문조사 양식 만들기