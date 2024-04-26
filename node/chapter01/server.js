const http = require('http');

const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
})

server.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}`)
})

// 실행 안되는 경우 npm init 해서 package.json 파일 설정후
// 다시 node server.js 실행하면 정상 구동 확인
// 서버 종료는 ctrl + c 