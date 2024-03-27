# CSS 중급 다양한 효과

## transition

### transform 단순한 형태의 변형
translate(x,y) : 이동
scale(x,y) : 크기변형
skew(deg) : 비틀기
rotate(deg) : 회전

### transition 스타일 변화(에니메이션 효과)
transition-property : 변화 대상 속성을 지정
transition-duration : 변화가 실행될 시간을 지정
transition-delay : 변화 시작 전 지연 시간을 지정
transition-timing-function : 변화 실행시 실행 곡선 방식을 지정
> ease : 기본값. 점점 속도가 빨라지다가 끝날 때 다시 느려지는 방식
> linear : 처음부터 끝까지 같은 속도로 진행
> ease-in : 느리게 시작했다가 점점 빨라짐
> ease-out : 빠르게 시작했다가 점점 느려짐

transition: (애니메이션을 적용할 속성값) (동작시간) (지연시간) (동작설정)
transition: width 2s 0s linear

## 애니메이션 @keyframes 모듈과 animation 속성

```
@keyhrames 애니메이션 이름 {
    from{ width: 100px; }
    to{ width: 200px; }
}
@keyhrames 애니메이션 이름 {
    0%{ width: 100px; }
    33%{ width: 133px; }
    66%{ width: 166px; }
    100%{ width: 200px; }
}
```

요소에 적용할 때 animation 속성 사용 (단축속성)
-name : 필수. 적용할 키프레임 이름
-duration : 애니메이션 지속 시간
-delay : 애니메이션 시작 전 시간
-timing-function : 속도 그래프
-direction : 동작 진행 방향
-iteration-count : 반복 횟수
-fill-mode : 전 후 상태 설정
-play-state : 애니메이션 적용 여부

## 상속과 공용키워드
상속이란 하위요소가 상위 요소의 스타일 속성값을 물려받는 것을 의미
ul 선택자의 색을 바꾸면 li의 색이 함께 바뀐다.
속성별 상속 여부를 확인 할 수 있는 페이지
http://www.w3.org/TR/CSS21/propidx.html
(해당 페이지의 표에서 'Inherited?' 항목이 상속 여부를 나타냄)
(Initial value 값도 확인 할 수 있다)

### 공용키워드(전역키워드)
스타일 속성마다 상속 가능 여부가 기본적으로 설정되어 있지만, CSS에서는 스타일 속성의 상속 여부를 제어할 수 있는 3개의 키워드를 별도로 지원한다. 이들은 모든 속성에 적용 할 수 있는 키워드이므로 '공용 키워드' 또는 '전역 키워드'라 부르기도 한다.
inherit : 상위 요소로부터 해당 속성의 값을 받아 사용한다.
initial : (브라우저에 지정되어 있는) 해당 속성의 기본값을 요소에 적용한다.
unset : 상속 속성에 대해서는 inherit처럼, 상속되지 않는 속성에 대해서는 initial처럼 적용된다.

## 반응형 웹과 뷰포트 단위
h1 32px 이지만 pc, mobile 어디서 보는지에 따라 배울이 다르기 때문에 다르게 보인다.


## 미디어 쿼리 Media query
미디어 타입을 인식하고, 콘텐츠를 읽어들이는 기기나 브라우저의 물리적 속성을 감기할 수 있는 유용한 모듈(기능)이다.
모든 미디어 쿼리는 다음 두가지의 구성 요소를 지니고 있다.

- 미디어 타입
- 조건에 대한 물음(쿼리)

```
@media 미디어_타입 and (조건에_대한_물음) {
    /*
    미디어 타입과 조건을
    모두 만족할 때 덮어씌울
    스타일 선언문
    */
}
@media screen and (max-width: 768px) {
    div.box {
    background-color: red;
    }
    /*
    화면(screen)의
    너비가 768px 이하일 경우에
    여기에 정의된 스타일 선언문을
    추가 적용할 것이다!
    (box스타일이 적용된 div태그의 배경색을 빨강으로 변경)
    */
}
```

## 모듈화 디자인
컴포넌트(Component)란 독립적이고 재사용이 가능한 모듈을 뜻한다.
컴포넌트 기반으로 웹을 제작하면 마치 블록 장난감을 조립하듯 각각의 컴포넌트 간 조합을 이용해 화면을 구성할 수 있어 효율이 좋아진다.

### 모듈화 디자인의 이점

- 반응형 컴포넌트를 만들고, 그것들을 조립해 하나의 페이지를 만들면 페이지는 자연스럽게 반응형 페이지가 된다.
- 스타일 재사용이 용이하다. 필요한 경우 추가 스타일을 적용하면 된다.
- 페이지의 일관성을 유지하기 용이하다.

## 미니프로젝트 - 채팅방에 말풍선 추가하기

