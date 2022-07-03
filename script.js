function calcIMC() {
    // IMC = peso / altura²
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    
    let altura2 = altura * 2
    console.log(`Altura: ${altura}`)
    console.log(`Altura 2: ${altura2}`)
    console.log(`Peso: ${peso}`)

    let imc = (peso / altura2).toFixed(2)
    console.log(`IMC: ${imc}`)

    showInfos(imc)
}

function showInfos(imc) {
    // let area = document.querySelector('#area')
    let infos = document.querySelector('.infos')
    let span = document.querySelector('.span')
    let resText = document.querySelector('.res-text')

    infos.style.display = 'block'
    span.innerHTML = imc

    if(imc <= 18.5) {
        resText.innerHTML = 'Você está abaixo do peso'
    } else if((imc >= 18.5) && (imc <= 24.9)) {
        resText.innerHTML = 'Seu peso está normal'
    } else if((imc >= 25) && (imc <= 29.9)) {
        resText.innerHTML = 'Você está com Sobrepeso'
    } else if((imc >= 30) && (imc <= 34.9)) {
        resText.innerHTML = 'Você está em Obsidade Grau I'
    } else if((imc >= 35) && (imc <= 39.9)) {
        resText.innerHTML = 'Você está em Obsidade Grau II'
    } else {
        resText.innerHTML = 'Você está em Obsidade Grau III'
    }
}