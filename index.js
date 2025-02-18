const express = require("express");
const app = express();
const path = require("path");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));  
app.use("/static", express.static(path.join(__dirname, "public"))); 

app.get("/blogs/:blogid", function (req, res) {
    res.sendFile(path.join(__dirname, "views/users", "blog-details.html"));
});

app.get("/blogs", function (req, res) {
    res.sendFile(path.join(__dirname, "views/users", "blogs.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views/users", "index.html"));
});

app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "views/users", "about.html"));
});

app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "views/users", "contact.html"));
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});
