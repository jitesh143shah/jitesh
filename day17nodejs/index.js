// const fs = require("fs");
// const http = require("http");

// const server = http.createServer(function (request, response) {
//     console.log(request);
//     // response.end("hello");
//     response.end("<h1>Hello World!</h1>")
// });

// server.listen(5000, () => {
//     console.log("Server started")

// })
// localhost ipaddress: 127.0.0.1
// localhost port:5500
// vite port:5173
// react port: 3000

//----------------------------------------------------------------------
// const express = require("express")
// const app = express();
// app.get("/", (req, res) => {

//     res.sendFile(__dirname + "/index.html");
// });

// app.listen(5000, () => {
//     console.log("server started")
// })
//--------------------------------------------------------------------
const fs = require("fs");

const express = require("express")
const app = express();

//route is used to fetch the dynamicData content like "hello everyone is passing here"
function dynamicData(req, res, route) {
    //data is used to fetch all the content of the index.html file
    fs.readFile(__dirname + "/index.html", { encoding: "utf-8" }, (err, data) => {
        //file chcek
        if (err) throw new Error("Not found");
        data = data.replace("[path]", route == "" ? path : route)
        res.send(data);
    })
}

//this is for path default
app.all("/", (req, res) => {
    if (req.method === "GET") {
        res.status(200);
        dynamicData(req, res, "hello everyone");
    }
    else if (req.method === "POST") {
        res.status(200).end("POST Method")
    }
    else if (req.method === "PATCH") {
        res.status(200).end("PATCH Method")
    }
    else if (req.method === "DELETE") {
        res.status(200).end("DELETE Method")
    }
    else if (req.method === "POST") {
        res.status(200).end("POST Method")
    }
    else {
        res.status(405).end("Method not allowed ")
    }
})

// app.get("/", (req, res) => {
//     // res.statusCode = 201;
//     res.status(200);
//     dynamicData(req, res, "hello everyone");
// });
// app.post("/", (req, res) => {
//     // res.statusCode = 201;
//     res.status(201);
//     res.end("POST method")
// });
// app.put("/", (req, res) => {
//     // res.statusCode = 201;
//     res.status(201);
//     res.end("PUT method")
// });
// app.patch("/", (req, res) => {
//     // res.statusCode = 201;
//     res.status(200);
//     res.end("PATCH method")
// });
// app.delete("/", (req, res) => {
//     // res.statusCode = 201;
//     res.status(200);
//     res.end("DELETE method")
// });
// app.head("/", (req, res) => {
//     // res.statusCode = 201;
//     res.status(200);
//     res.end("HEAD method")
// });
// app.options("/", (req, res) => {
//     // res.statusCode = 201;
//     res.status(200);
//     res.end("OPTIONS method")
// });



//this is for path /contactus
app.get("/contactus", (req, res) => {

    dynamicData(req, res, "data 21");
});
//if the path not found or for * path or not definded path
app.use((req, res) => {
    res.send("404 - Page not found")
})

app.listen(5000, () => {
    console.log("server started")
})