/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. input에 트윗을 입력하고 '게시'버튼을 누르면 트윗이 생성되어야 합니다.
// 2. 생성된 트윗은 게시글, 좋아요 버튼, 좋아요 카운트하는 요소를 포함해야 합니다.
// 3. input에 아무것도 입력되어 있지 않으면 트윗이 생성되지 않아야 합니다. (if문)
// 4. 좋아요 버튼을 클릭하면 좋아요 카운트가 1씩 증가해야 합니다.
// 5. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
// 6. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/
// 트윗 게시 버튼 요소
const postTweet = document.querySelector("#postTweet");
const tweetInput = document.querySelector("#tweetInput");
const tweetsContainer = document.querySelector("#tweets_container");

// final == postTweet 버튼 이벤트
postTweet.addEventListener("click", function () {
  if (tweetInput.value === "") {
    alert("트윗 메세지를 입력하세요");
  } else {
    paintTw();
  }
});

/* Resource */
// 랜덤숫자 생성기
const getRandom = (stacked) => {
  const random = Math.floor(Math.random() * stacked);
  return random;
};
// 타임 스탬프
const time = () => {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  const nowToday = `${year}.${month}.${date} ${hour}:${min}:${sec}`;
  return nowToday;
};
// 유저정보
const user = [
  {
    name: "Kim Dokja",
    id: "iamreader",
    avartar: "dokja_avartar.jpg",
  },
  {
    name: "Lloyd Frontera",
    id: "Developer",
    avartar: "lloyd_avartar.jpg",
  },
  {
    name: "Theo",
    id: "Merchant",
    avartar: "theo_avartar.jpg",
  },
];

/* Printable and Dom Construct*/
// 유저 및 타임스탬프
function userDetails(profile, tweet) {
  // 접속된 유저 정보를 배열에서 불러옴
  const currentUser = user[getRandom(user.length)];
  // img 요소를 생성하고 해당 요소에 접속된 유저의 아바타를 연결
  const img = document.createElement("img");
  img.setAttribute("class", "avartar-img");
  img.src = currentUser.avartar;
  // strong 요소를 생성하고 해당 요소에 접속된 유저의 이름과 아이디 및 작성시간을 출력
  const strong = document.createElement("strong");
  strong.setAttribute("class", "author");
  strong.textContent = `${currentUser.name} ・ ${currentUser.id} `;
  const small = document.createElement("small");
  small.setAttribute("class", "timestamp");
  small.textContent = `${time()}`;
  // 생성 된 요소들을 부모 요소에 배치 
  profile.appendChild(img);
  tweet.appendChild(strong);
  strong.appendChild(small);
  return currentUser; // 삭제 가능 여부 검토 예정
}

/* not Final */


function like(iconContainer,paintTw) {
  // 좋아요 버튼, 카운트를 담을 컨테이너 생성
  const like = document.createElement('span');
  like.setAttribute('class', 'like-box')

  // 좋아요 버튼 생성 및 아이콘 삽입
  const likeBtn = document.createElement("button");
  likeBtn.setAttribute('class','like-button');
  // const likeIcon = document.createElement("object");
  // likeIcon.setAttribute("type", "image/svg+xml");
  // likeIcon.setAttribute("data", "img/like_JunGSa.svg");
  // likeIcon.setAttribute("class", "icon svg");
  // likeBtn.appendChild(likeIcon);
  const svgStr = `
  <svg id="like" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="w3.org/1999/xlink"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
stroke="none">
<path d="M1198 4626 c-230 -41 -446 -162 -640 -358 -118 -118 -199 -230 -263
-362 -227 -465 -161 -1010 170 -1416 75 -92 1999 -1982 2033 -1997 39 -17 92
-16 130 5 44 24 1959 1908 2035 2003 215 267 321 616 289 947 -27 278 -126
517 -298 722 -332 395 -740 544 -1184 432 -267 -68 -557 -240 -813 -482 l-97
-92 -90 85 c-265 253 -555 424 -832 493 -128 31 -324 40 -440 20z m387 -336
c104 -27 316 -133 430 -214 125 -91 267 -218 355 -318 87 -100 130 -128 191
-128 53 0 95 24 146 82 262 297 535 491 808 574 78 24 107 27 215 27 107 0
138 -3 213 -26 221 -68 391 -195 521 -390 244 -367 229 -846 -38 -1181 -49
-61 -1853 -1846 -1866 -1846 -13 0 -1817 1786 -1866 1847 -105 131 -181 314
-205 489 -32 239 39 519 177 703 112 149 295 300 431 356 145 59 323 68 488
25z"/>
</g>
</svg>`;
const parser = new DOMParser();
const parsed = parser.parseFromString(svgStr, "image/svg+xml");
const svgIcon = parsed.querySelector('svg');
svgIcon.setAttribute("class", "icon svg");
likeBtn.appendChild(svgIcon);
 
  
  // 좋아요 카운트 요소 생성
  let stackedCount = 0;  
  const likeCount = document.createElement("span");
  likeCount.textContent = `${stackedCount}`;
  // 좋아요 버튼 카운트
  likeBtn.addEventListener('click', (e) => {
    stackedCount++;
    return (likeCount.textContent = `${stackedCount}`);
  });
  

  // 생성 된 요소 각 부모 요소에 배치
  like.appendChild(likeBtn);
  like.appendChild(likeCount);
  iconContainer.appendChild(like);
}

// 트윗디테일 하단에 버튼들 추가 및 좋아요버튼 하단 배치
function coments(tweet) {
  // 아이콘 담길 컨테이너 생성
  const iconContainer = document.createElement("div");
  iconContainer.setAttribute("class", "icon-container");

  // 댓글 아이콘
  const chat = document.createElement("object");
  chat.setAttribute("type", "image/svg+xml");
  chat.setAttribute("data", "img/chat_Tanah-Basah.svg");
  chat.setAttribute("class", "icon");
  // 리트윗 아이콘
  const reTweet = document.createElement("object");
  reTweet.setAttribute("type", "image/svg+xml");
  reTweet.setAttribute("data", "img/retweet_Freepik.svg");
  reTweet.setAttribute("class", "icon");
  // 통계 아이콘
  const bar = document.createElement("object");
  bar.setAttribute("type", "image/svg+xml");
  bar.setAttribute("data", "img/bar_Prosymbols-Premium.svg");
  bar.setAttribute("class", "icon");
  // 북마크 아이콘
  const bookmark = document.createElement("object");
  bookmark.setAttribute("type", "image/svg+xml");
  bookmark.setAttribute("data", "img/bookmark_Dave-Gandy.svg");
  bookmark.setAttribute("class", "icon");
  // 공유 아이콘
  const share = document.createElement("object");
  share.setAttribute("type", "image/svg+xml");
  share.setAttribute("data", "img/share_Freepik.svg");
  share.setAttribute("class", "icon");

  
  // icon 요소 각 부모요소에 배치
  iconContainer.appendChild(chat);
  iconContainer.appendChild(reTweet);
  like(iconContainer);
  iconContainer.appendChild(bar);
  iconContainer.appendChild(bookmark);
  iconContainer.appendChild(share);
  tweet.appendChild(iconContainer);
}

// 컨테이너 내부 트윗 생성 함수
function paintTw() {
  // 한 개의 게시글 섹션 생성
  const section = document.createElement("section");
  // 접속된 유저 정보를 출력 할 profile, tweet 요소 생성
  const profile = document.createElement("div"); // 아바타 영역
  profile.setAttribute("class", "avartar");
  const tweet = document.createElement("div");
  tweet.setAttribute("class", "tweet");
  // profile, tweet 요소에 유저정보 및 작성시간 출력
  userDetails(profile, tweet); 
  // tweetInput 입력 값을 출력 할 요소를 생성하고 텍스트 출력 후 input 초기화
  const p = document.createElement("p");
  const text = tweetInput.value;
  p.textContent = text;
  tweetInput.value = "";
  // 아이콘 콘텍스트 출력
  coments(tweet); 
  // 생성 된 요소들을 부모 요소에 배치 
  tweet.appendChild(p);
  section.appendChild(tweet);
  section.appendChild(profile);
  tweetsContainer.appendChild(section);
}

document.addEventListener('click',function(event){
  if(!event.target.closest('.like-button')) RTCPeerConnection;
}, false);