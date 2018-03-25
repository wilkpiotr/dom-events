console.log('I am b.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
 // b1();
    b2();
 // b3();
 // b4();
 // b6();
});
// B.1 - Za każdym kliknięciem na dowolny przycisk dopisz do diva clicked-info data-id kliknietego przycisku.
/* const b1 = () => {
  const buttons = document.querySelectorAll('body button');
  const divInfo = document.querySelector('#clicked-info');
  const buttonArr = Array.from(buttons);
  buttonArr.forEach((button) => {
    button.addEventListener('click',(e) => {
      divInfo.innerText =  divInfo.innerText + ' ' + button.dataset.id;
  })
})
}*/

// B.2 - Zapisuj ile razy uzytkownik klika w dany przycisk i pokaz taka infomacje w formacie A: 3, B: 2, C: 0, gdzie
// format odpowiada {data-id przycisku}: {ilosc klikniec}
  const b2 = () => {
  const buttons = document.querySelectorAll('body button');
  const divInfo = document.querySelector('#clicked-info');
  const buttonArr = Array.from(buttons);
  const buttonA = document.querySelector('[data-id=A]')
  const buttonB = document.querySelector('[data-id=B]')
  const buttonC = document.querySelector('[data-id=C]')
  let clicks = 0;
  buttonArr.forEach((button) => {
    button.addEventListener('click',(e) => {
      clicks += 1;
      divInfo.innerText  =  e.target.dataset.id + ': ' + clicks;
    })
  })
} 

// B.3 - dodaj na stronie wiecej przyciskow. Po kliknieciu w przycisk o danym data-id wszystkie przyciski z tym data-id
// maja zniknac ze strony

 /* const b3 = () => {
  const body = document.querySelector('body');
  document.querySelector('body').addEventListener('click',(e) => {
    if (!e.target.hasAttribute('data-id')) {
     return;
    }
    const dataId = e.target.dataset.id;
    const buttons = document.querySelectorAll('button[data-id="'+dataId+'"]');

    buttons.forEach((button) => {
      body.removeChild(button);
    })
  })
} */ 
// B.4 - po kliknieciu w przycisk o id = add dodac nowy div z tekstem wpisanym w input

  const b4 = () => {
    const body = document.querySelector('body');
    const add = document.querySelector('#add');
    const input = document.querySelector('input');
    const newDiv = document.createElement('div');
    
    input.addEventListener('change', (e) => { 
      newDiv.innerText = e.currentTarget.value;
      })
    add.addEventListener('click',(e) => {
      body.appendChild(newDiv.cloneNode(true));
      input.value = '';
    })
  }
// B.5 - rozszerzenie B.4 - czysicic inputa po kazdym przycisnieciu przycisku
// B.6 - po kliknieciu w dowolny przycisk A, B, C ma pojawic sie nowy przycisk i ma rowniez obslugiwac kliniecia

const b6 = () => {
  const body = document.querySelector('body');
  const buttons = document.querySelectorAll('body button');
  const buttonArr = Array.from(buttons);
  buttonArr.forEach((button) => {
    button.addEventListener('click',(e) => {
      buttonArr.push(body.appendChild(e.target.cloneNode(true)));
    })
  })
}

// np. klikamy w przycisk C - pojawia sie nowy przycisk C, po kliknieciu w niego znowu pojawia sie przycisk C