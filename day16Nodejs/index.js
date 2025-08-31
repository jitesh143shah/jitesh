// const fs = require("fs");

// create new file
//async
// fs.writeFile(`${__dirname}/abc.txt`, "hello", function (err) {
//     if (err) throw err;
//     console.log("this file has been saved")
// })
//sync
// fs.writeFileSync("data.txt", "hello this is data")
// -------------------- read file ------------------------------
// let data = fs.readFileSync("abc.txt",{encoding:"utf-8"});
// console.log(data);
// -------------------- file data append or update ------------------------------
// fs.appendFile("abc.txt", "\n i am jitesh", (err) => {
//     if (err) throw err;
//     console.log("done")
// })
// -------------------- file data delete form file ------------------------------
// fs.unlink(__dirname + "/data.txt", (e) =>
//     console.log(e ? "Not Found" : "Deleted"))

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

module.exports = { add, sub };