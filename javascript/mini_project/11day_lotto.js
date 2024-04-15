// '추첨' 버튼을 누른 후, '다시' 버튼을 누르지 않은 채 '추첨' 버튼을 또 눌러도 새롭게 번호가 추첨되도록 기능을 수정해보자!

const todaySpan = document.querySelector("#today");
const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");
let lottoNumbers = [];
const colors = ['orange', 'skyblue', 'red', 'purple', 'green'];

// 오늘 날짜 가져오기
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `;

// paintNumber 함수
function paintNumber(number) {
  const eachNumDiv = document.createElement("div");
  eachNumDiv.classList.add("eachnum");
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

// 랜덤 숫자 배열 생성
drawButton.addEventListener('click', function () {
  while (lottoNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNumber(ran);
    }
  }
});

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener("click", function () {
  lottoNumbers.splice(0, 6);
  numbersDiv.innerHTML = "";
});
