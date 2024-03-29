## 강의 소개 및 JS 기초

01. 강사소개 및 강의 소개

02. 자바스크립트 소개

03. 동작원리 출력해보기

04. 콘솔출력과 자료형

05. 변수와 상수

## 문자열과 DOM 소개

06. 문자열 prompt

07. 템플릿 리터럴
플레이스 홀더 : ${}
백틱: ` 
(⇪를 누르면 ~이 나오는 숫자 '1'의 왼쪽이 있는 키. ₩ 가 출력된다면 한/영 키를 눌러 영문으로 변환한 뒤 누르면 된다.)
백틱 내부에 플레이스 홀더를 사용하면? 
반환값이 존재하는 자바스크립트 코드(표현식)를 내장할 수 있는 문자열 표현법으로
해당 데이터는 문자열의 멤버가 된다.

08. undefined 외
undefined : 아직 정의되지 않음
null : 데이터가 없음

09. DOM 소개 : Document object model
코드를 해석해서 화면에 보여지는 과정을 렌더링이라고 한다.
브라우저는 해석한 요소들을 트리 형태로 구조화해 표현하는 문서(객체)를 생성하는데 이를 DOM이라고 하며
DOM을 통해 화면에 웹 콘텐츠들을 렌더링 한다.
DOM은 웹 콘텐츠를 추가, 수정, 삭제하거나 마우스클릭, 키보트타이핑 등 이벤트에 대한 처리를 정의할 수 있도록 제공되는
프로그래밍 인터페이스(interface)이다.
const p = document.querySelector("p"); 
document.querySelector("#text"); 
document.querySelector(".text");
첫번째 인자만 선택 됨 

p.textContent = "텍스트를 이걸로 바꿔!"


10. mini priject. 사용자 정보 입력받기


## 실시간 세션

### html, css
- Flex Grid 사용해보기
스크롤

- BEM : Box, Element, Modifier 클래스이름을 짓는 방법
(ex) [chat-form]__[input]--[darkmode]

