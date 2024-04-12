// TODO: 조건에 맞는 div 요소를 생성하는 함수 createDiv를 작성하고, createDiv를 str의 길이만큼 호출하세요.
let str = '0123456';
const body = document.querySelector('body');

function createDiv(content, backgroundColor) {
  const div = document.createElement('div');
  // 조건1. div 요소의 textContent와 배경색은 외부에서 입력받은 content, backgroundColor가 되어야 합니다.
  // 조건2. div 요소의 padding 값은 상하 10px, 좌우 20px이 되어야 합니다.
  // 조건3. div 요소의 margin은 상 5px, 우 2px, 하 3px, 좌 8px가 되어야 합니다.
  // 조건4. div 요소의 글자색은 'white'가 되어야 합니다.
  // 여기에 코드를 작성하세요.
  body.appendChild(div);
  div.textContent = content;
  let style = {
    backgroundColor: backgroundColor,
    padding: '10px 20px',
    margin: '5px 2px 3px 8px',
    color: 'white',
    borderRadius: '20px',
  };
  Object.assign(div.style, style); // (old, new) new 추가
}

// TODO: for 반복문을 사용하여 createDiv를 호출하세요.
// 원하는 매개변수를 넣어보세요.
for (let i = 0; i < str.length; i++) {
  // 여기에 코드를 작성하세요.
  createDiv('어디선가 누구에게 무슨일이 생기면', 'slateblue');
  createDiv('외로워도 슬퍼도 나는 안울어', 'salmon');
  createDiv('치키치키 차카차카 초코초코 초!', 'teal');
  createDiv('일어나요 바람돌이 모래의 요정', 'goldenrod');
}
