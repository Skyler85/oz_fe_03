// '이번 주 당첨 번호 생성하기' 버튼에 대한 참조를 가져옵니다.
const generateWinningNumbers = document.getElementById(
    'generateWinningNumbers'
  );
  // '로또 번호 자동 생성' 버튼에 대한 참조를 가져옵니다.
  const generateLottoNumbers = document.getElementById('generateLottoNumbers');
  
  // 당첨 번호를 보여줄 HTML 요소에 대한 참조를 가져옵니다.
  const winningNumContainer = document.getElementById('winningNumbers');
  // 자동 생성된 로또 번호를 보여줄 HTML 요소에 대한 참조를 가져옵니다.
  const lottoNumContainer = document.getElementById('lottoNumbers');
  
  // 당첨 번호 생성 함수
  function generateNumbers() {
    winningNumbers.splice(0, 6);
  
    while (winningNumbers.length < 6) {
      let ran = Math.floor(Math.random() * 45) + 1; // 범위(1~45)내 무작위 숫자 생성
      // 중복 숫자 확인
      if (winningNumbers.indexOf(ran) === -1) {
        winningNumbers.push(ran); // 배열로 반환
      }
    }
    // 배열 오름차순 정렬
    winningNumbers.sort(function (a, b) {
      return a - b;
    });
    return winningNumbers;
  }
  
  function displayNumbers(numbers, winningNumbers = []) {
    // 초기화
    lottoNumContainer.innerHTML = '';
    numbers.splice(0, 6);
    // 자동생성 배열 할당
    for (let i = 0; i < 5; i++) {
      const set = [];
      set.splice(0, 6);
      while (set.length < 6) {
        const ran = Math.floor(Math.random() * 45) + 1;
        if (set.indexOf(ran) === -1) {
          set.push(ran);
        }
        set.sort(function (a, b) {
          return a - b;
        });
      }
      numbers.push(set);
    }
    // 생성 번호 화면에 반환
    for (const set of numbers) {
      const div = document.createElement('div');
      div.classList.add('number-set');
  
      for (const num of set) {
        const span = document.createElement('span');
        span.classList.add('number');
        span.textContent = num;
  
        if (winningNumbers.includes(num)) {
          span.classList.add('match');
        }
        div.appendChild(span);
      }
      lottoNumContainer.appendChild(div);
    }
  }
  
  // 초기 당첨 번호 배열
  let winningNumbers = [];
  // 초기 번호 생성 배열
  let numbers = [];
  
  // 버튼 이벤트 함수
  generateWinningNumbers.addEventListener('click', () => {
    winningNumContainer.innerHTML = '';
    generateNumbers();
    for (let i = 0; i < 6; i++) {
      const span = document.createElement('span');
      span.setAttribute('class', 'number');
      span.innerText = winningNumbers[i];
      winningNumContainer.appendChild(span);
    }
  });
  
  generateLottoNumbers.addEventListener('click', () => {
    if (winningNumbers.length === 0) {
      alert('이번 주 당첨 번호가 생성되지 않았습니다.');
    } else {
      displayNumbers(numbers, winningNumbers);
    }
  });
  