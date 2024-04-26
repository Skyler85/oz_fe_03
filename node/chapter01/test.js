const myLogModule = require('./log.js');

myLogModule.info('Node.js started');

// 실행 안되는 경우 npm init 해서 package.json 파일 설정후
// 다시 node test.js 실행하면 정상 구동 확인
// 서버 종료는 ctrl + c 