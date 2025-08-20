// const heading = document.getElementsByClassName("classhello")[0];
// console.log(heading);
// heading.textContent = "abcd";
// ****************************************************

// document.querySelector(".classhello").innerHTML = "<h1>first</h1>"
// const idshow = document.querySelector("#idhello")
// idshow.innerHTML = "<a href='#'> this is the first problem  </a > "
// idshow.removeAttribute("class");


// ****************************************************
// let data = ["Monitor", "Laptop", "Mouse", "Monitor", "Laptop", "Mouse", "Monitor", "Laptop", "Mouse"];
// let ol = document.createElement("ol")
// ol.type = "i";
// ol.start = "20"
// data.forEach((a) => {
//     let li = document.createElement("li");
//     li.textContent = a;
//     ol.appendChild(li);

// });
// document.querySelector("#idhello").appendChild(ol);
// ****************************************************
let data = ["Monitor", "Laptop", "Mouse", "Monitor", "Laptop", "Mouse", "Monitor", "Laptop", "Mouse"];
let ol = document.createElement("ol")
ol.type = "a";
// ol.start = "20"
for (let i = 0; i < data.length; i++) {
    const liTag = document.createElement("li");
    liTag.textContent = data[i];
    ol.appendChild(liTag)



}


document.querySelector("#idhello").appendChild(ol);