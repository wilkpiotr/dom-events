console.log('I am a.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  counting();
});

// A.1 - Stworz licznik ktory nalicza numery co 1 sekunde i wstawia liczbe to html
const counting = () => {
  const counter = document.querySelector('section > label');
  let  number = 0;  
setInterval(() => {
  number++;
  counter.innerText = 'Counter: ' + number;
},1000)
}

// A.2 - Stworz minutnik ktory posiada strukture 00:00 - inkrementuje sekundy, pokazuje ile uplynelo minut i sekund

const minuting = () => {
  const timer = document.querySelector('#timer')
}
// A.3 - Stworz funkcje ktora na wejsciu dostaje co ile minutnik ma sie inkrementowac - po wywolaniu
// ma dodac do strony kolejny minutnik ktory inkrementuje zgodnie z zadanym argumentem
// A.4 - Dodaj mozliwość ustawienia maksymalnej liczby minutnika po ktorej minutnik ma sie zatrzymac
// A.5 - Dodaj mozliwosc ustawienia czasu dzialania minutnika po ktorym minutnik stanie

// A.6 - Dodaj przycisk zatrzymujacy i uruchamiajacy minutnik 