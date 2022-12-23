const path = require("path");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(
bodyParser.urlencoded({
limit: "5000mb",
extended: true,
parameterLimit: 100000000000,
})
);
app.use(express.json());

app.get("/", function (_, res) {
res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/john-micheal", function (_, res) {
res.sendFile(path.join(__dirname, "/eralda-gjuta.html"));
});

app.post("/comment", (req, res) => {
const { comment } = req.body;
const text = comment;
res.send(text);
});

app.listen(3000, () => console.log("listening on port 3000"));
index.html
