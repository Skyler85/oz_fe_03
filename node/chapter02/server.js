// const axios = require('axios');

// axios.get('http://naver.com')
//     .then((response) => { console.log(response)})
//     .catch((error) => {console.log(error)})
const http = require('http');
const port = 3000;
const targetObject = { a: "a", b: "b" };
const server = http.createServer((req,res) => {
    if(req.method === 'POST' && req.url === '/home'){
        req.on('data',(data) => {
            console.log(data);
            const stringifiedData = data.toString();
            console.log(stringifiedData);
            Object.assign(targetObject, JSON.parse(stringifiedData));
        })
    } else {
        if(req.url === '/home' || req.url === '/'){
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(targetObject));
        } else if(req.url === '/about') {
            res.setHeader('Content-Type', 'Text/html');
            res.write('<html>');
            res.write('<body>');
            res.write('<h1>About Page</h1>');
            res.write('</body>');
            res.write('</html>');
        } else {
            res.statusCode = 404;
            res.end()
        }
    }

})
server.listen(port, () => {
    console.log(`✅ Listening og port http://localhost:${port} 🚀`);
})