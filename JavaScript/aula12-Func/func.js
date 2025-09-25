function parimpar(n) {
    if (n % 2 == 0) { //se o resto da divisão por 2 for 0, é par
        return 'Par'
    } else {
        return 'ímpar'
    } 
}
console.log(parimpar(222)) //chamando a função e passando o valor 222 como argumento

console.log(`Número impar`)
console.log(parimpar(223)) //chamando a função e passando o valor 223 como argumento


function parimpar(n){
    if (n % 2 == 0 ){
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}

console.log(parimpar(221))