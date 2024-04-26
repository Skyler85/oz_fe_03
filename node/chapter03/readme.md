### express


### 설치할 것
- nodemon
- 포스트맨

### MVC Model-View-Controller

### req.params

### res.json VS res.send

### res.send VS res.end

### middleware

### POST 요청, express.json

### RESTful API

### res.sendFile

### express.static
Html이나 CSS를 클라이언트에게 제공하는 기능
이미지, CSS 파일 및 javascript 파일과 같은 정적 파일을 제공하려면 `Express`의 express.static 내장 미들웨어 기능을 사용
```javascript
app.use(express.static('public'))
// 가상경로 지정
app.use('/static',express.static('public'))
// 절대경로 사용 - path.join으로
app.use('/static',express.static(path.join(__dirname,'public')))
```
**절대경로를 사용해야 한다**
express.static 함수에 제공하는 경로는 상대경로!
(node process를 시작하는 (터미널에서 구동을 하는) 디렉토리에 대해서...)
다른 디렉토리에서 express 앱을 실행하는 경우 제공하려는 디렉토리의 절대 경로를 사용하는 것이 안전함!


### Template Engine, Layout

정적 웹사이트 렌더링은 코드 복제 및 유연성 부족 등의 제약이 있음. 데이터베이스에서 데이터를 읽을때 !
`Express`는 템플릿 엔진을 통해 서버 측 어플리케이션에서 동적 HTML 페이지를 생성하는 방법을 제공함

**템플릿 엔진의 종류**
- Pug : Haml-inspired template engine (formerly jade)
- EJS : Haml implementation
- hbs : Embedded JavaScript template engine
- ...

**레이아웃**
{{텍스트}}
{{{레이아웃}}}

▽ 렌더링 할때 해당 레이아웃 적용 {{templateName}} 예시 ▽
posts.controller.js
```javascript
function getPost(req, res){
    res.render('posts',{
        templateName: 'post'
    });
}
```