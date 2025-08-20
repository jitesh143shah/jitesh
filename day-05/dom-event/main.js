const body = document.querySelector("body");
const btn = document.querySelector("#btn");
const setColor = document.getElementById("setColor")
console.log(setColor);
btn.addEventListener("click", () => {
    body.style.backgroundColor = setColor.value;
});

setColor.addEventListener("input", (e) => {
    body.style.backgroundColor = e.target.value
    // console.log(e.target.value)

})