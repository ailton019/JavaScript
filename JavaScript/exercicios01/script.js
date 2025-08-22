function carregar (){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours(); 
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = "./img/manha-nova.png";
        document.body.style.background = "#e2cd9f";
        msg.innerHTML += "<br>Bom dia!";
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = "./img/tarde-nova.png";
        document.body.style.background = "#b9846f";
        msg.innerHTML += "<br>Boa tarde!";
    } else {
        // Boa noite!
        img.src = "./img/noite-nova.png";
        document.body.style.background = "#515154";
        msg.innerHTML += "<br>Boa noite!";
    }

}



