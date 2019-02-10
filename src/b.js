console.log('I am b.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
//  b1();
//  b2();
//  b3();
//  b4();
 b6();
});
// B.1 - Za każdym kliknięciem na dowolny przycisk dopisz do diva clicked-info data-id kliknietego przycisku.
const b1 = () => {
  const buttons = Array.from(document.querySelectorAll('body > button'));
  const divInfo = document.querySelector('#clicked-info');
  buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
      divInfo.innerText =  divInfo.innerText + ' ' + e.target.dataset.id;
  })
})
}

// B.2 - Zapisuj ile razy uzytkownik klika w dany przycisk i pokaz taka infomacje w formacie A: 3, B: 2, C: 0, gdzie
// format odpowiada {data-id przycisku}: {ilosc klikniec}
  const b2 = () => {
  const buttons = document.querySelectorAll('body > button');
  const divInfo = document.querySelector('#clicked-info');
  let clicksA = 0, clicksB = 0, clicksC = 0;
  const buttonArr = Array.from(buttons);
  buttonArr.forEach((button) => {
    button.addEventListener('click',(e) => {
      if (e.target.dataset.id === 'A') {
        clicksA += 1;
      }
      else if (e.target.dataset.id === 'B') {
        clicksB += 1;
      }
      if (e.target.dataset.id === 'C') {
        clicksC += 1;
      }
      divInfo.innerText =  'A' + ': ' + clicksA + ' B' + ': ' + clicksB + ' C'+ ': ' + clicksC;
    })
  })
} 

// B.3 - dodaj na stronie wiecej przyciskow. Po kliknieciu w przycisk o danym data-id wszystkie przyciski z tym data-id
// maja zniknac ze strony

  const b3 = () => {
    const body = document.body;
    body.addEventListener('click',(e) => {
      if (!e.target.hasAttribute('data-id')) {
      return;
      }
    const dataId = e.target.dataset.id;
    const buttons = document.querySelectorAll('button[data-id="'+dataId+'"]');
    buttons.forEach((button) => {
      body.removeChild(button);
    })
  })
} 
// B.4 - po kliknieciu w przycisk o id = add dodac nowy div z tekstem wpisanym w input

  const b4 = () => {
    const body = document.body;
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
  const body = document.body;
  body.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button' && e.target.hasAttribute('data-id')) {
      const newButton = document.createElement('button');
      newButton.dataset.id = e.target.dataset.id;
      newButton.innerText = e.target.innerText;
      body.appendChild(newButton);
    }
  });
}

// np. klikamy w przycisk C - pojawia sie nowy przycisk C, po kliknieciu w niego znowu pojawia sie przycisk C