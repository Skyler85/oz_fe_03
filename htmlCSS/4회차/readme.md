# CSS 기초 요소

## display 요소의 유형
요소를 인라인, 블록으로 표현할 수 있는 설정방법
none : 요소를 화면에 표시하지 않는다.
    표시하지 않는데 왜 만드나? 처음에 화면에 표시하지 않다가 특정 이벤트가 발생할 때 나타나게 할 경우 지정한다.
block : 요소를 블록 레벨 요소로 만는다.
inline : 요소를 인라인 요소로 만든다.
inline-block : 요소를 인라인 요소로 표시하되 블록 레벨의 특성을 추가한다.

## float 부동 요소
기본 문서의 흐름 : 왼쪽->오른쪽, 위->아래
float 속성은 요소를 문서의 흐름에서 제외시킨 채 부모 요소 또는 루트 요소를 기준으로 위치를 변경한다.
선택된 요소가 문서의 흐름에서 제외되어 상위 요소의 왼쪽 또는 오른쪽 면에 붙는 형태로 배치되도록 하는 특징을 가지고 있다.
속성 : left, right, none
대응 속성 -> clear
요즘은 많이 사용하지 않음

## position 위치
- `static` :  기본값, 요서를 일반적인 문서의 흐름에 맞게 배치
- `relative` : 문서의 흐음에 맞춰 배치된 자리를 기준으로 요소를 이동시킴
- `absolute` : position이 지정된 상위 요소를 기준으로 요소를 이동시킨
- `fixed` : 화면을 기준으로 요소의 위치를 고정함

## z-index, overflow
z-index 속성은 요소의 쌓임 순서(stack order)를 정의할 수 있다. 
정수 값을 지정하여 쌓임 맥락(stack context)에서의 레벨을 정의하는 방식으로 적용되며, 위치 지정 요소에 대해 적용 할 수 있는 속성이다.

overflow : 넘침현상을 해결하기 위한 속성
- visible, hidden, scroll, auto

## 선택자 더 알아보기
- 속성 선택자 : [속성명]
- 하위 요소 선택자 : 공백
- 자식 요소 선택자 : >
- 인접 형제 선택자 : +
- 형제 요소 선택자 : ~
 형제 선택자는 앞선 형제는 선택불가. 뒤로 이어진 형제만 선택이 가능하다.

## 의사요소와 의사클래스(가상클래스)
### 의사클래스
선택자에 추가하는 키워드. 요소가 어떤 특정한 상태가 되었을 때 요소를 선택하겠다는 의미이다.
:hover, active, focus, disable, nth-child()
### 의사요소
선택자에 추가하는 키워드. 선택한 요소의 특정 부분에 대한 스타일 정의.
:: after, before, first-line, marker, placeholder

## 미니 프로젝트 - 나만의 채팅방 만들기
색상, 글꼴, 개성을 살려서 나만의 채팅방 만들기

https://htmlpreview.github.io/?https://github.com/Skyler85/oz_fe_03/blob/main/htmlCSS/4%ED%9A%8C%EC%B0%A8/chat.html


## 사이드 프로젝트

### 나만의 일기장 만들기
html로 어느정도 구성을 갖추고 css를 하는데 배열에서 막혔다.... 또르르..ㅠ
absolute를 활용하고 싶었는데, flex부터 너무 어려움.ㅠㅠ
    display: inline-block;
    width: 100%;
    text-align: end;
텍스트로 직접 적용했더니 안됨 ㅜㅜ
[참고사이트](https://d2.naver.com/helloworld/8540176#ch5)

main 영역 height : 100% 로 지정했는데 적용 안되서 100vh (view point) 했더니 적용 됨
알고보니 body에만 적용하고 html에는 적용을 안했음 ㅠㅠ
html에 100% body 100% = body 100vh 같은 결과였음

### 배경화면과 박스 디자인
### 회원가입 폼 꾸미기
### 기술 블로그 -> 주제 업로드