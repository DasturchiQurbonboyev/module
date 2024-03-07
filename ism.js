

let ism = document.querySelector(".main")

let ismArr = ism.textContent.split("");


function harflar() {
    let str = ""
    for (let i = 0; i < ismArr.length; i++) {
        return ism.innerHTML = `<h1 class="main">${str + ismArr[i]}</h1>`
    }

}

setInterval(() => {
    harflar()
}, 100);