# 02. CSS 기초 스타일
Cascading Stylesheet
연속적으로 스타일을 정의하는 문서!

## 소개 및 기본문법

### 다수의 스타일 선언문으로 구성
### 형태
선택자 {
    속성명: 속성값
}
p {
    color: red;
}
### 주석
/* 
코드를 위한 메모를 남기자 .
엔터를 포함하는 여러 줄도 가능
*/

## CSS문서 사용하기
인라인 스타일 : 태그에 직접 기술하기
<p style="color: blue;"> // 사용 자제
스타일 태그 : 스타일 시트를 위한 태그를 추가하여 기술하기
<style>
    p { color: red;}
</style> 
문서간의 연결 : 스타일 시트 문서를 따로 작성하여 HTML 문서와 연결하기
<link href="./style.css" rel="stylesheet"> // <head>내부에서 사용
href : hyper reference 하이퍼 참조
rel : relation 관계

## 선택자 기본편
선택자 : 전체(*), 태그(div), 클래스(.button), 아이디(#id), 그룹(p, strong, ..) ...

## 박스모델
브라우저 화면은 가로와 세로를 축으로 하는 2차원 공간이다. 따라서 브라우저를 통해 렌더링 되는 웹 요소들 또한 그 안에서 개별적으로 너비와 높이를 가진다.
박스 모델은 너비와 높이를 가지는 개별 요소를 가리켜 '박스'라고 표현하고, 박를 네가지 세부 영역으로 나누어 구분한 일종의 디자인 모델이다.
CSS로 스타일을 정의할 수 있는 모든 요소에는 박스 모델 관련 속성 중 일부 또는 전부를 적용할 수 있으며, CSS는 영역 별로 크기를 따로 설정할 수 있도록 다양한 속성들을 제공한다.

1. 바깥쪽 여백 margine
2. 경계선(테두리) border
3. 안쪽 여백 padding
4. 콘텐츠 영역 width height 
대표적인 단위 px, %

개발자 도구에서 박스모델 확인 가능

### border
단축속성 : 여러 속성을 한번에 적용
width, style, color
radius : 모서리 둥글게 만들수 있음. 네 모서리 상이하게 설정 가능

### 여백 (border 기준 안/밖)
margin 상,우,하,좌 -> 상, 좌우, 하 -> 상하, 좌우 -> 상하좌우
padding
여백을 추가하더라도 크기 유지하려면? box-sizing 사용

## 배경 다루기
backgound-
-color, clip, image, origin, size, position, repeat

## 색상 지정하는 다양한 방법
색상 키워드, rgb(rgba), hsl(hsla), 16진수#FFFFFF

## 텍스트 꾸미기
글꼴 : font-family
크기 size,색상 color, 정렬방식 aline, 두께 weight, 행높이 height, 줄긋기 decoration
단위 rem, em

## 미니 프로젝트 : 프로필페이지에 스타일시트 더하기