document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('btnContar').addEventListener('click', contar)

  function contar() {
    const ini = document.getElementById('txti').value
    const fim = document.getElementById('txtf').value
    const passo = document.getElementById('txtp').value
    const res = document.getElementById('res')

    if (!ini || !fim || !passo) {
      alert("[ERROR] Faltam dados!")
      res.innerHTML = 'Impossivel contar!'
      return;
    }

    res.innerHTML = 'Contando: '
    let i = Number(ini)
    let f = Number(fim)
    let p = Number(passo)

    if (p <= 0) {
      alert("[ERROR] Passo inválido! Considere PASSO 1")
      p = 1
    }

    const step = i < f ? p : -p;
    for (let c = i; (step > 0 ? c <= f : c >= f); c += step) {
      res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
  }
});

/*TESTE
    if (ini.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Faltam dados!')
    } else {
        alert('TUDO OK!')
    }*/
