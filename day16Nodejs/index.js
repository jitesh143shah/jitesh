const fs = require("fs");

// create new file
//async
// fs.writeFile(`${__dirname}/abc.txt`, "hello", function (err) {
//     if (err) throw err;
//     console.log("this file has been saved")
// })
//sync
// fs.writeFileSync("data.txt", "hello this is data")


//read file

// let data = fs.readFileSync("abc.txt",{encoding:"utf-8"});
// console.log(data);
// file data append
fs.appendFile("abc.txt", "\n i am jitesh", (err) => {
    if (err) throw err;
    console.log("done")
})