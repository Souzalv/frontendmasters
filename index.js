
let calcular = document.querySelector('#botao')

function imc() {
    let nome = document.querySelector('.nome').value
    let peso = document.querySelector('.peso').value
    let altura = document.querySelector('.altura').value
    let resultado = document.querySelector('.whitebox')

    if(nome !== '' && altura !== '' && peso !== '') {

        let valorImc = (peso / (altura * altura)).toFixed(1)
        let tipoImc = ""
        // deixar uma casa decimal 

        if (valorImc < 18.6) {
            tipoImc = 'abaixo do peso'
        } else if (valorImc < 25) {
            tipoImc = 'peso ideal'
        } else if (valorImc < 30) {
            tipoImc = 'um pouco acima do peso'
        } else if (valorImc < 35) {
            tipoImc = 'Obesidade grau 1 '
        } else if (valorImc < 40) {
            tipoImc = 'Obesidade grau 2'
        } else {
            tipoImc = 'Obesidade grau 3'
        }

        resultado.style.color = "black"
        resultado.innerHTML = `${nome} seu IMC é ${valorImc} e você está ${tipoImc}`
       
                
    }else {
            resultado.style.color="black"
            resultado.innerHTML = "Preencha todos os campos!"
}
}