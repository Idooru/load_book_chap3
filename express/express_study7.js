import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    const output = `
        <h2>express로 웹 만들기</h2>
        <p>메인 페이지 입니다.</p><br>
        <img src="./public/수연피.png" width="400px" height="200px"/>
    `;

    res.send(output);
});

app.get("/user/:id", (req, res) => {
    res.send(`${req.params.id}님의 개인 페이지 입니다.`);
});

app.listen(8080);
