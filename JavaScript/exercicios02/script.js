function verificar() {
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 ) {
        window.alert('Verifique os dados, bocó.')
    } else if (Number(fano.value) > ano) {
        window.alert('Futurista gay')
    }else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'nenemM.JPG')
            }else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'jovemM.JPG')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'SenhorM.JPG')
            }else{
                //idoso
                img.setAttribute('src', 'SenhorM.JPG')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'nenem.JPG')
            }else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'jovemF.JPG')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.JPG')
            }else{
                //idoso
                img.setAttribute('src', 'senhora.JPG')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `
         <div class="resultado">
         <div class="texto">
            Foi detectado o gênero <strong>${genero}</strong> e a idade calculada é <strong>${idade}</strong> anos.
        </div>
        </div>
        `
document.querySelector('#res .resultado').appendChild(img)

        res.appendChild(img)
    }
}
