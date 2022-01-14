const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Node.js로 서버만들기</h1>");
    res.end("<p>3장 http모듈 공부중입니다.</p>");
});

server.listen(8080, () => {
    console.log(`http://localhost:${8080} is open to running server`);
});
