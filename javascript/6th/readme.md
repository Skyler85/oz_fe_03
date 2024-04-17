## MiniProject - 할일 목록 만들기

## 비동기 데이터 통신

AJAX - Asynchronous Javascript And XML
에이젝스는 프로그래밍 언어는 아닙니다. 

비동기데이터 통신(Ajax)는 개발자의 꿈! 왜냐하면..
 - 웹 페이지 로딩이 끝난 후에도 서버에서 데이터를 불어올수 있습니다.
 - 페이지를 리로드(reloading) 하지 않고 원하는 부분만 업데이트가 가능합니다.
 - 백그라운드 환경(?)에서 웹 서버로 데이터를 보낼 수 있습니다

```javascript
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

## Project - 강아지 정보 페이지 프로덕트