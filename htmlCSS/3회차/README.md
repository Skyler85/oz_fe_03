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
## 선택자 기본편
선택자 : 전체(*), 태그(div), 클래스(.button), 아이디(#id), 그룹(p, strong, ..) ...

## ...