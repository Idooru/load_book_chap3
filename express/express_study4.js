import express from "express";

const app = express();

app.get("/", (req, res, next) => {
    res.send("Hello Wolrd!");
    next();
});

const myLogger = (req, res, next) => {
    console.log("LOGGED");
    next();
};

app.use(myLogger);

app.listen(8080);
