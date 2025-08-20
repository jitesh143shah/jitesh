// ************************************************************************************************

// function hello(text, para) {
//     console.log(("inside callback 1"));
//     console.log(para);
//     para(text)

// }
// hello("2", function cb(data) {
//     console.log("inside callback ", data)
// })
// ************************************************************************************************
// function hello() {
//     console.log("hello")
// }
// setInterval(hello, 1000);

// ************************************************************************************************
// console.log("1")
// setTimeout(() => {
//     console.log("set timeout 1")
// }, 20)
// console.log("2")
// setTimeout(() => {
//     console.log("set timeout 2")
// }, 0)
// setTimeout(() => {
//     console.log("set timeout 3")
// }, 10)

// ************************************************************************************************
// Promise
// while call the api it takes some time to fetch or reponse is called as promise.
// it could be either true or false it is time taken by fetch or response

// function time() {
// console.log(new Date().getFullYear());

// }
// time();

// -----------------------------------------------
// const promise1 = new Promise(function funt1(res, rej) {
//     const data = !true;
//     if (data) {
//         res("Promis resolved")

//     }
//     rej("Data is empty");
// });

// promise1.then(function success(result) {
//     console.log(result)
// }).catch(function error(err) {
//     console.log(err)
// })
// ************************************************************************************************

function a() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Hello1")
        }, 4000);
    });
}
function b() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("hello2");
        }, 5000);
    });
}
function c() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("hello3");
        }, 0);
    });
}
// a().then((data) => {
//     console.log(data);
// });
// b().then((data) => {
//     console.log(data);
// });
// c().then((data) => {
//     console.log(data);
// });
// Promise.all([a(), b(), c()]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });
// Promise.allSettled([a(), b(), c()]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });
// Promise.race([a(), b(), c()]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });
// Promise.any([a(), b(), c()]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// ************************************************************************************************



// ************************************************************************************************



// ************************************************************************************************

// ************************************************************************************************
