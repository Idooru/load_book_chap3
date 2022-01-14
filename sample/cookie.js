import http from "http";

http.createServer((req, res) => {
    res.writeHead(200, { "Set-Cookie": "name=roadbook" });
    console.log(req.headers.cookie);
    res.end("Cookie --> Header");
}).listen(8080);
