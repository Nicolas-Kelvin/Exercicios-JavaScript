function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERROR] verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "./assets/foto-bebe-m.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./assets/foto-jovem-m.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./assets/foto-adulto-m.png");
      } else {
        //Idoso
        img.setAttribute("src", "./assets/foto-idoso-m.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "./assets/foto-bebe-f.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./assets/foto-jovem-f.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./assets/foto-adulto-f.png");
      } else {
        //Idoso
        img.setAttribute("src", "./assets/foto-idoso-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
