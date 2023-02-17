const segundo = 1000;
const minuto = segundo * 60;
const hora = minuto * 60;
const dia = hora * 24;
const contar = document.querySelector('#contar')

let contagemRegressiva = new Date('21/12/2033 00:00:00').getTime();
let x = setInterval(() => countDown(), segundo);

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diferenca = contagemRegressiva - now;

  document.getElementById('dias').innerText = Math.floor(diferenca / dia);
  document.getElementById('horas').innerText = Math.floor(diferenca % dia / hora);
  document.getElementById('minutos').innerText = Math.floor(diferenca % hora / minuto);
  document.getElementById('segundos').innerText = Math.floor(diferenca % minuto / segundo);
}

contar.addEventListener('click', (e) => {
  e.preventDefault();
  clearInterval(x);
  let date_end = document.querySelector("#data_final").value;
  contagemRegressiva = new Date(`${date_end} 00:00:00`).getTime();
  x = setInterval(() => countDown(), segundo);
})
