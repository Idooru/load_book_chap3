import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const myLogger = (req, res) => {
    console.log("LOGGED");
};

app.use(myLogger);

app.listen(8080);
