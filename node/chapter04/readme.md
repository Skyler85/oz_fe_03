## 인증시스템

### JWT의 구조

**Header**
토근에 대한 메타 데이터를 포함하고 있음 ( 타입, 해싱 알고리즘 SHA256, RSA… )

**Payload**
유저정보(issuer), 만료 기간(expirarion time), 주제(subject) 등..

**Verify Signature**
JWT의 마지막 세그먼트는 토큰이 보낸 사람에 의해 서명되었으며 어떤 식으로든 변경되지 않았는지 확인하는데 사용되는 서명이다. 서명은 헤더 및 페이로드 세그먼트, 서명 알고리즘, 비밀 또는 공개 키를 사용하여 생성된다.

[JWT.IO](https://jwt.io/)

### FLOW

로그인 -> 토큰 클라이언트에 전달 -> 토큰을 이용한 요청

- Express App 생성
- 프로젝트 폴더 생성
- package.json 파일 생성 > npm init
- 필요한 모듈 설치 > npm install...
    - dotenv : 환경 변수 생성을 위한 모듈 (업로드되면 안되기때문에 별도로 생성됨)
    - express
    - jsonwebtoken : 토큰 생성을 위한 모듈
    - nodemon

### 사용예제
```javascript
var privateKey = fs.readFileSync('private.key');
var token = jwt.sign({ foo: 'bar'}, privateKey, { algorithm: 'RS256'});
```