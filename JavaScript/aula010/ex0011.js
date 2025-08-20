var agora = new Date()
var agora_min = agora.getMinutes() // para pegar os minutos atuais do sistema, mas pode pegar horas, segundos, etc.
var hora = agora.getHours() // para pegar a hora atual do sistema, mas pode pegar minutos, segundos, etc.
//data dia e ano.
console.log(`Agora são ${hora}:${agora_min} horas.`)
if (hora < 12){
    console.log("Bom dia!")
}else if (hora <= 18){ 
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}