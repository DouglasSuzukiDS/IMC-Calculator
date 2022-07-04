
function calcIMC() {
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    // IMC = peso / altura²
    
    // console.log(`Tipo da Altura: ${typeof altura}`)
    // console.log(`Tipo do Peso: ${typeof peso}`)
    let alt1 = altura.indexOf('.')
    let alt2 = altura.indexOf(',')
    let pes1 = altura.indexOf('.')
    let pes2 = altura.indexOf(',')

    /*let altura2 = altura * 2
    console.log(`Altura: ${altura}`)
    console.log(`Altura 2: ${altura2}`)
    console.log(`Peso: ${peso}`)

    let imc = (peso / altura2).toFixed(2)
    console.log(`IMC: ${imc}`)

    showInfos(imc)*/

    if(alt1 === -1 && alt2 === -1) { // -1 Não Achado, 1 Achado
        // Convert = altura(Ex: 1.80)
        let comPonto = altura.replace(altura[0], altura[0] + '.')
        //console.log(`Replace loco: ${convert}`)

        let altura2 = comPonto * 2
        console.log(`Altura agora com Ponto: ${comPonto}`)
        console.log(`Altura² agora com Ponto: ${altura2}`)
        console.log(`Peso: ${peso}`)

        let imc = (peso / altura2).toFixed(2)
        console.log(`IMC com valor convertido: ${imc}`)
    
        showInfos(imc)

    } else if(alt2 === 1){
        console.log('Entrou no IF 2')
        let comPonto = altura.replace(',', '.')
        console.log(`Com virgula: ${comPonto}`)

        let altura2 = comPonto * 2
        console.log(`Altura Convertida: ${comPonto}`)
        console.log(`Altura² Convertida: ${altura2}`)
        console.log(`Peso: ${peso}`)

        let imc = (peso / altura2).toFixed(2)
        console.log(`IMC com valor convertido: ${imc}`)
    
        showInfos(imc)
    } else {
        let altura2 = altura * 2
        console.log(`Altura: ${altura}`)
        console.log(`Altura 2: ${altura2}`)
        console.log(`Peso: ${peso}`)

        let imc = (peso / altura2).toFixed(2)
        console.log(`IMC: ${imc}`)

        showInfos(imc)
    }
}

function showInfos(imc) {
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