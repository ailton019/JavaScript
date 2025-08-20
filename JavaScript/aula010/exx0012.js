var agora = new Date();
var DiaSemana = agora.getDay();

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
como os dias da semana, sao visto pelo o JS.
*/
switch (DiaSemana) { //switch é uma estrutura de controle que permite executar diferentes blocos de código com base no valor de uma variável.Valores pontuais.
    case 0: 
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('[ERRO] Dia inválido!');
        break;
}
console.log(`Hoje é ${DiaSemana}`);