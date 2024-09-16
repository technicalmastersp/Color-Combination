document.body.style.backgroundColor = "#ffcdef";

const colorByUser = document.getElementById('colorByUser')  // input box of 'colorByUser' 
const goBtn = document.getElementById('goBtn')  // Button of input box get value 'colorByUser' 
const colorSection = document.getElementById("colorSection")
const bgColorFill = document.getElementsByClassName("bgColorBox");
const colorFill = document.getElementsByClassName("colorBox");
let color;
goBtn.addEventListener('click', () => {
    color = colorByUser.value
    Array.from(colorFill).forEach(e=>{
        e.style.backgroundColor = color
    })
})

function randomNo(){
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(bgColorFill).forEach(e=>{
    let store = randomNo();
    e.style.backgroundColor = store;
    let a = e.insertAdjacentHTML("afterend",`<p class="text-xs lg:text-base">BG Color : ${store}</p>`)
})