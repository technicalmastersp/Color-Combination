document.body.style.backgroundColor = "#ffcdef";

const colorSection = document.getElementById("colorSection")
// const colorSectionBox1 = document.getElementById("colorSectionBox1")
const bgColorFill = document.getElementsByClassName("bgColorBox");
// let bgColorCodeName = document.getElementsByClassName("bgColorCode");
const colorFill = document.getElementsByClassName("colorBox");
// let colorCodeName = document.getElementsByClassName("colorCode");


function randomNo(){
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(bgColorFill).forEach(e=>{
    // e.style.backgroundColor = randomNo();
    let store = randomNo();
    e.style.backgroundColor = store;
    let a = e.insertAdjacentHTML("afterend",`<p class="text-xs">BG Color : ${store}</p>`)
})
Array.from(colorFill).forEach(e=>{
    // e.style.backgroundColor = randomNo();
    let store = randomNo();
    e.style.backgroundColor = store;
    // let a = e.insertAdjacentHTML("afterend",`<p class="text-xs">Font Color : ${store}</p>`)

})


// for(let i=0; i<=100; i++){
//     if(i % 2 == 0 && i % 3 == 0 && i % 4 == 0 && i % 5 == 0){
//         console.log(i)
//     }
// }