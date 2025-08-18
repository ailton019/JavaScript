var idade = 15;

if (idade < 16)  {
    console.log("Você não pode votar! Por ser menor de idade.");
} else if (idade < 18 || idade > 65) {
    console.log("Você pode votar, mas não é obrigatório.");
} else if (idade >= 18) {
    console.log("Você pode votar e é obrigatório.");
}