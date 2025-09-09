function contar() {
  let inicio = document.getElementById("pnumero");
  let fim = document.getElementById("fnumero");
  let passo = document.getElementById("passo");
  let res = document.getElementById("res");

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = "⚠️ Faltam dados!";
  } else {
    res.innerHTML = "Contando: <br>";

    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
      alert("Passo inválido! Considerando PASSO 1");
      p = 1;
    }

    if (i < f) {
      // contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} 👉 `;
      }
    } else {
      // contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} 👉 `;
      }
    }

    res.innerHTML += "🏁";
  }
}
