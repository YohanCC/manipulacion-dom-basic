const fm = document.getElementById("form")
const h1 = document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
let suma = document.querySelector(".result")


function resultadoDeValues(event){
    console.log({event})
    event.preventDefault()
    const resultado = Math.floor(input1.value) + Math.floor(input2.value)
    suma.innerHTML = "Resultado: " + resultado
}

fm.addEventListener("submit", resultadoDeValues)


