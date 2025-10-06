let num = [2,4,6,8,9,]

num.push(1)
num.sort()

console.log(num)
console.log(`O Vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if (pos == -1){
    console.log('O valor nao foi encontrado.')
}else{
    console.log(`O valor está na posiçao ${pos}`)
}