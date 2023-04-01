let timer;

function ativarTempo() {
  timer = setInterval(mostrarHora, 1000);
}

function mostrarHora() {
  let date = new Date();

  let horas = document.querySelector(".horas-js");
  let minutos = document.querySelector(".minutos-js");
  let segundos = document.querySelector(".segundos-js");

  horas = date.getHours();
  minutos = date.getMinutes();
  segundos = date.getSeconds();

  if(horas < 10){
    let mostrarHora = `0${horas}`;
    document.querySelector(".horas-js").innerHTML = mostrarHora;
  }else{
    let mostrarHora = `${horas}`;
    document.querySelector(".horas-js").innerHTML = mostrarHora;
  }

  if(minutos < 10){
    let mostrarMinutos = `0${minutos}`
    document.querySelector(".minutos-js").innerHTML = mostrarMinutos
  }else{
    let mostrarMinutos = `${minutos}`
    document.querySelector(".minutos-js").innerHTML = mostrarMinutos
  }
 
  if(segundos < 10){
    let mostrarSegundos = `0${segundos}`
    document.querySelector(".segundos-js").innerHTML = mostrarSegundos
  }else{
    let mostrarSegundos = `${segundos}`
    document.querySelector(".segundos-js").innerHTML = mostrarSegundos
  }
}
