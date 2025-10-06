let valores = [2,4,5,6,7,8,3,9,1,]
valores.sort()

console.log('Versao 1')

for (let pos = 0; pos < valores.length ; pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}


console.log('duas versoes.')

console.log('Versao 2')
for (let pos in valores ){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}

