let par = document.getElementById("demo");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let scroll = document.getElementById("scroll");

btn.addEventListener("click", () => {
   par.innerHTML = Math.sqrt(input.value)
})
