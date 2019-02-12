console.log('I am a.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  // a1();
  a2('10', '06', 75);
  // a3(10000);
});

// A.1 - Stworz licznik ktory nalicza numery co 1 sekunde i wstawia liczbe to html
const a1 = () => {
  const counter = document.querySelector('#counter');
  let  number = 0;  
setInterval(() => {
  number += 1;
  counter.innerText = number;
},10000)
}

// A.2 - Stworz minutnik ktory posiada strukture 00:00 - inkrementuje sekundy, pokazuje ile uplynelo minut i sekund


const a2 = (value, stopMinutes, stopFN) => {
  let seconds = document.querySelector('#sec'); 
  let minutes = document.querySelector('#min');
  const buttonStart = document.querySelector('#startMe')
  const buttonStop = document.querySelector('#stopMe')
  const intervalFn = () => {
    const interval = setInterval(() => {
    seconds.innerText++ ;
    seconds.innerText = seconds.innerText < 10 ? '0' + seconds.innerText : seconds.innerText;
    if (minutes === stopMinutes) {
      clearInterval(interval)
      seconds--;
      seconds = seconds < 10 ? '0' + seconds : seconds;
    }
    if (seconds.innerText === value) {
      seconds.innerText = '00';
      minutes.innerText++;
      minutes.innerText = minutes.innerText < 10 ? '0' + minutes.innerText : minutes.innerText ;
    } 
  },1000)
    setTimeout(() => clearInterval(interval), stopFN * 1000);

    buttonStop.addEventListener('click', (e) => {
      console.log(intervalFn)
      setTimeout(() => clearInterval(interval), 10);
    })
    
  };
  buttonStart.addEventListener('click', (e) => {
    intervalFn();
  })
  
  
 };

// A.3 - Stworz funkcje ktora na wejsciu dostaje co ile minutnik ma sie inkrementowac - po wywolaniu
// ma dodac do strony kolejny minutnik ktory inkrementuje zgodnie z zadanym argumentem

// A.4 - Dodaj mozliwość ustawienia maksymalnej liczby minutnika po ktorej minutnik ma sie zatrzymac

// A.5 - Dodaj mozliwosc ustawienia czasu dzialania minutnika po ktorym minutnik stanie

// A.6 - Dodaj przycisk zatrzymujacy i uruchamiajacy minutnik 