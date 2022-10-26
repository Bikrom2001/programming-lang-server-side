const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;

const coursesCollection = require("./Data/Courses.json");

app.get("/", (req, res) => {
    res.send("Now server is running");
});

app.get("/allcourses", (req, res) => {
    res.send(coursesCollection);
});

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = coursesCollection?.find(p=> p.id == id);
    res.send(getSingleItem);
});

app.get("/checkout/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = coursesCollection?.find(p=> p.id == id);
    res.send(getSingleItem);
});


app.listen(Port, () => {
    console.log('server is running', Port);
})