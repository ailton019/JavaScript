var idade = 66;
console.log(`Sua idade é ${idade} anos.`)
if (idade < 16)  { //idade < 16 entra nessa condição
    console.log("Você não pode votar! Por ser menor de idade.");
} else if (idade < 18 || idade > 65) { //idade >= 16 && idade < 18 || idade > 65 entra nessa condição
    console.log("Você pode votar, mas não é obrigatório.");
} else { //idade >= 18 entra nessa condição 
    console.log("Você pode votar e é obrigatório.");
}