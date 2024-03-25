let dayName = new Array(
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
);
let monName = new Array(
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Agosto",
  "Outubro",
  "Novembro",
  "Dezembro"
);
let now = new Date();
const dataText = document.querySelector("#date");

dataText.innerHTML = `${dayName[now.getDay()]}, ${now.getDate()} de ${monName[now.getMonth()]} de ${now.getFullYear()}`;
