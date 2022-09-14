const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Ok");
})

app.get("/user", (req, res) => {

    console.log(req.query);
    res.json({
        name : req.query.name,
        age : req.query.age
    })
})


app.listen(5000, () => console.log("Expressb server is up"));