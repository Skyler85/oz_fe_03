# 강아지 정보 페이지 프로젝트

___

> 목표 : 강의를 듣고 추가 요구사항 충족되도록 코드 수정

### 세부사항

**구현부**

강의 내용 : 
- 비동기 데이터를 이용하여 Dog API를 통해 강아지 사진과 견종의 데이터를 받아와
웹페이지에 출력 및 `select`항목에 추가.
- 원하는 정보를 입력하여 검색하여 필터링
- `select`에서 견종을 선택하여 필터링
- 더보기 버튼으로 배열에 추가하고, top으로 이동하는 버튼으로 화면 최상단으로 이동
- `css`에서 스크롤링을 자연스럽게 꾸미기
추가 요청사항 :
- 리셋 버튼 추가 - 기존 사진은 사라지고, 새로운 사진으로 대체되어야 함

**작업과정**

강의 중 중복되는 함수를 외부에 하나의 함수로 만들어 여러번 호출이 가능하도록 한 부분이 인상 깊었다.
그리고 `reset`버튼을 만들때 `request2`을 사용했을때에는 배열안의 강아지정보가 바뀌지 않고 그대로였는데 `request1`로 하니 강아지정보가 잘 바뀌는 것을 확인했다.
왜때문인지는 모르겠지만 `request2`는 다른일을 하고 있었나보다..ㅠ