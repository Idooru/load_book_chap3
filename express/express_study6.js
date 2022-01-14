import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();

app.set("port", process.env.PORT || 8080);

app.use("/", express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index2.html");
});

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 서버 실행 중...");
});
