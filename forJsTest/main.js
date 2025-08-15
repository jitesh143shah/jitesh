// {
//    let a=10;
//    let b=18;
//     let sum= a+b;
//     console.log(sum)
// }
// -=-------------------------------------------
// {
//     const str = "Hello World";
//     let output = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//             output += "#" + str[i] + "#"

//         }
//         else {
//             output += str[i];
//         }

//     }
//     console.log(output)
// }

// -=--------------------------------------------------------
// function strinvalue(str) {
//     output = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//             output += "#" + str[i] + "#"
//         }
//         else {
//             output += str[i];
//         }
//     }
//     return (output);
// }
// {
//     const str = "Hello World";
//     foutput = strinvalue(str);
//     console.log(foutput)
// }
// -----------------------------------------------------------------
{
    const arr = [23, 45, 78, 12, 14, 35];
    temp = 0;
    smax = 0;
    smin = 0;
    for (var i = 0; i < arr.length; i++) {
        temp += arr[i]


    }
    var avg = temp / arr.length;
    // console.log(temp)
    console.log(avg)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            smax += arr[i];
            console.log(arr[i]);
        } else {
            smin += arr[i];
            console.log("-----------------")
        }
    }
    maxavg = smax / arr[i];
    //  console.log(smax);
    // console.log(smin)
    console.log(maxavg);
}
// ---------------------------------------
// {
//     const country = "NEPAL";
//     var temp = "";
//     for (var i = 0; i < country.length; i++) {
//         temp += country[i];
//         console.log(temp);
//     }

// }