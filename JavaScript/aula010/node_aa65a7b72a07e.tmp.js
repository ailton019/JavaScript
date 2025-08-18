var idade = 16;

if (idade < 16)  {
    console.log("Você não pode votar!");
} else if (idade < 18 || idade > 65) {
    console.log("Você pode votar, mas não é obrigatório.");
} else if (idade >= 18) {
    console.log("Você pode votar e é obrigatório.");
}