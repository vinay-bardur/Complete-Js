// let what = document.querySelector("#what");
// what.onclick = () => {
//     console.log("Lie in September21");
//     let v = 369;
//     v++;
//     console.log(v);
// }

let what = document.querySelector("#what");
let curr = "Light";
what.addEventListener("click", () => {
    if (curr === "Light") {
        curr = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("Light");
    }else{
        curr = "Light";
        document.querySelector("body").classList.add("Light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(curr);
    // console.log("Your Change!!");
});