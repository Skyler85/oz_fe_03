# nodejs ans express

**node 다운로드**
[공식사이트](https://nodejs.org/en/download)

**버전확인**
```bash
node -v
```

**node.js REPL 진입**
```bash
node
```
빠져나올때는 ctrl + c 2번 또는 .exit

**최초 세팅**
package.json 파일 설정

```bash
$ npm init
```

**실행**
```bash
$ node server.js
```
js는 생략 가능 ( js -> json -> ..)

> node로 콘솔 실행한 경우 서버 종료는 ctrl + c

**모듈 주기적으로 업데이트**
낮은 버전으로 인한 보안이슈나 그 외의 문제들때문에 주기적으로 업데이트 해야 함
```bash
$ npm audit
$ npm audit fix --force
```

**전역설치**
```bash
$ npm install -g
```

**로컬설치**
install 뒤에는 설치 할 모듈의 명을 입력하고 그 뒤에 --sava-dev를 입력
```bash
npm install nodemon --save-dev
```
