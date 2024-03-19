// let a = 56
// let b = 920
// let c = 82.50
// let d = 13.25
// let videogame = 4000
// let dinheiro = 5000
// // let altura = prompt("Digite sua Altura")
// // let idade = prompt("Digite sua idade")
// // let peso= prompt("Digite seu peso")
// // let n1 = prompt("Digite sua nota")
// // let n2 = prompt("Digite sua nota")
// // let n3 = prompt("Digite sua nota")



// // if(dinheiro >= videogame){
// //     alert("Eu vou comprar o ps5")
// // } else{
// //     alert("Eu não vou comprar o ps5")
// // }

// // if(altura > 1.60){
// //     alert("Pode Entrar")
// // } else{
// //     alert("Não pode entrar")
// // }

//  // if(idade >= 18 && idade <= 60 && peso >= 50 &&  peso <= 140 ){
// //     alert("Pode doar sangue") 
//  // }
// // else{
// //     alert("Não pode doar")

//  // }

// //  const numeros = [prompt("digite sua primeira nota"), prompt("digite sua segunda nota"), prompt("digite sua terceira nota")];
// //  let soma = 0;
// //  for (let i = 0; i < numeros.length; i++) {
// //    soma += numeros[i];
// //  }
// //  const media = soma / numeros.length;
 
// //  if (media >= 7) {
// //      alert("Você foi aprovado")
// //  } else {
// //      alert("Você foi reprovado")
// //  }

// if(dinheiro > videogame){
//     alert("Vou comprar")
// } else if(dinheiro > 1500){
//     alert("Vou pedir um empréstimo para o banco")
// }   else{
//     alert("Não vou comprar videogame")
// }

alert("*** DOAÇÃO CRIANçA ESPERANÇA ***")

let codigo = prompt("Digite um código para doar")


if(codigo ==1){
    alert ("Você doou R$ 10 reais")
}else if (codigo == 2){
    alert("Você doou R$ 15 reais")
} else if (codigo == 3){
    alert("Você doou R$ 25 reais")
}   else if (codigo == 4){
        alert("Você doou R$ 50 reais")
}   else if(codigo == 5){
    let valor = prompt("Digite o valor que voce deseja doar")
    alert("Você doou R$ "+valor+" reais")

} else{
        alert("Código inválido")
}

