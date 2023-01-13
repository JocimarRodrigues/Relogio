const horas = document.querySelector("[data-horas]");
const minutos = document.querySelector("[data-minutos]");
const segundos = document.querySelector("[data-segundos]");
const data = document.querySelector('[data]')


const relogio = setInterval(function () {
  let dataAtual = new Date();
  let hora = dataAtual.getHours();
  let minuto = dataAtual.getMinutes();
  let segundo = dataAtual.getSeconds();

  if (hora < 10) {hora = '0' + hora}
  if (minuto < 10) {minuto = '0' + minuto}
  if (segundo < 10) {segundo = '0' + segundo}



  horas.innerText = hora;
  minutos.innerText = minuto;
  segundos.innerText = segundo;
});
