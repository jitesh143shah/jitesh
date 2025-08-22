
const btn = document.getElementById("btn");

btn.addEventListener("click", function abc(e) {
    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    //e.preventDefault() is used to hold the screen or data into console.log while using Form
    e.preventDefault();

    console.log(name, rollNo);
    //stringify is used to read/write the data into JSON formate
    localStorage.setItem("data", JSON.stringify({
        name, rollNo,
    }))

});

// btn.addEventListener("click", (e) => {
//     const name = document.getElementById("name").value;
//     const rollNo = document.getElementById("rollNo").value;
//     e.preventDefault();
//     console.log(name + rollNo);
//     localStorage.setItem("data", JSON.stringify({
//         data1: name, data2: rollNo,
//     }))

// });
