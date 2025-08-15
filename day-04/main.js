// function totalSum(a, b) {
//     var sum = a + b;
//     console.log(sum)
// }
// function totalSum(a) {
//     var sum = a;
//     console.log(sum)
// }
// totalSum(10,20)

// function totalSum(...a) {
//     console.log(a[3]);
// }
// totalSum(10, 45, 15, 878, 45, 26, 45, 78, 78)
// ******************************************************************************
{
    //     let students = [
    //         { name: "Rinku", course: "Btech", branch: "cse" },
    //         { name: "Rohit", course: "Btech", branch: "civil" },
    //         { name: "Virat", course: "Btech", branch: "cse" },
    //         { name: "Mukesh", course: "Btech", branch: "mechinical" },
    //         { name: "Aksar", course: "Btech", branch: "civil" },
    //         { name: "Rinku", course: "Btech", branch: "cse" },
    //         { name: "Ratna", course: "Btech", branch: "civil" },
    //         { name: "Virat", course: "Btech", branch: "cse" },
    //         { name: "Mukesh", course: "Btech", branch: "mechinical" },
    //         { name: "Nitesh", course: "Btech", branch: "civil" },
    //     ]

    // students.forEach((a) => {
    // both the line are same forEach and filter
    // forEach and map can not merge
    // const arr =
    //     students.filter((a) => {
    //         if (a.branch == "civil") {
    //             return a.name;
    //         }

    //     }).map((a) => a.name);
    // console.log(arr)
}
// ******************************************************************************
// {
//     function hello1() {
//         const channelData = "Welcome ";
//         function hello2() {
//             const name = "Clouds ";
//             console.log(channelData + name)

//         }
//         hello2();

//     }
//     hello1();
// }
// {
//     function hello1() {
//         const channelData = "Welcome ";
//         hello2(channelData);
//     }
//     hello1();
//     function hello2(channelData) {
//         const name = "Clouds ";
//         console.log(channelData + name)

//     }

// }
// ******************************************************************************
{
    // { var name = "Hello"; }
    // function fun1() {
    //     console.log(name)
    // }
    // fun1();
}
// ******************************************************************************
{
    //call back function
    // function sayHello() {
    //     console.log("hello callback");
    // }
    // function greetUser(a) {
    //     console.log("user greeting");
    //     console.log(a);
    //     a();

    // }
    // greetUser(sayHello);

}
// ******************************************************************************

// Hoisting function
{
    // hello();

    // function hello() {
    //     console.log("a")
    // }
}
// ******************************************************************************
// {
//     let a = "hello";
//     function one() {
//         var a = "hello 1";
//         console.log("inside one");

//         function two() {
//             let b = "hello2";
//             console.log("inside two");
//             function three() {

//                 let c = "hello3"
//                 console.log("inside three")

//             }
//             three();
//         }
//         two();
//     }
//     one();
// }
// ******************************************************************************
// Closures fucntion
{
    {
        function counter() {
            let count = 0;
            return function () {
                count++;
                console.log(count)
            }
        } let myCounter = counter();
        myCounter();
    }
    {
        function makeAdd(x) {
            return function (y) {
                return x + y;
            };
        }
        let add5 = makeAdd(5);
        let add10 = makeAdd(10);
        console.log(add5(50));
        console.log(add10(90))
    }

}