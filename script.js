function calcIMC() {
    // IMC = peso / altura²
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let span = document.querySelector('.span')

    let altura2 = altura * 2
    console.log(`Altura: ${altura}`)
    console.log(`Altura 2: ${altura2}`)
    console.log(`Peso: ${peso}`)

    let imc = (peso / altura2).toFixed(2)
    console.log(`IMC: ${imc}`)

    console.log(span)
    span.innerHTML = imc
}