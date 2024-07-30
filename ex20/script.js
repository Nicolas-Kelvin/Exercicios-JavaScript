let num = document.querySelector("input#txtn");
let lista = document.querySelector("select#listval");
let tab = document.querySelector("div#res");
let valores = [];
let msg = document.getElementById("msgtxt");
//msg.outerHTML= ' '

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexof(number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    window.alert("TUDO OK!");
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
}

function finalizar() {}
