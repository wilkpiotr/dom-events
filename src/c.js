console.log('I am c.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  // c1();
  c2();
  // c3();
  c4c6();
  // c5();
});


// C.1 - obsluz klikniecie w przycisk Delete - usun element z listy
const c1 = () => {
  const list = document.querySelector('ul');
  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      list.removeChild(e.target.parentElement);
    }
  })
}
// C.2 - obsluz przycisk reset - ma wstawic ponownie wszystkie elementy jak bylo na poczatku

const c2 = () => {
  const list = document.querySelector('ul');
  const fullList = list.innerHTML;
  const button = document.querySelector('button');
  button.addEventListener('click', (e) => {
    list.innerHTML = fullList;
  })

}
// C.3 - wykonaj zadanie C.1 ale naloz event handler na li

const c3 = () => {
  const list = document.querySelector('ul');
  const sports = Array.from(document.querySelectorAll('li'));
  sports.forEach((sport) => {
    sport.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
      list.removeChild(event.currentTarget);
      }
    })
  })
}
// C.4 - wykonaj zadanie z C.3 ale naloz handler na body

const c4c6 = () => {
  const body = document.querySelector('body');
  const list = document.querySelector('ul');
  body.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.target.parentElement.classList.add('fade-out');
      setTimeout(() => {
        list.removeChild(e.target.parentElement);
      }, 1000)
    }
  })
}
// C.5 - przed usunieciem pokaz okienko dialogowe z id modal, zeby je pokazac ustaw je jako widoczne
// czyli uzyj style.display = 'block', zeby schowac style.display = 'none'
// dodaj w okienku 2 przyciski jeden z Yes - po ktorym element jest usuniety a okienko schowane
// i No - po ktorym tylko okienko sie chowa
const c5 = () => {
  const list = document.querySelector('ul');
  const yes = document.createElement('button');
  yes.innerText = 'YES';
  const no = document.createElement('button');
  no.innerText = 'NO';
  const modal = document.querySelector('#modal');
  const modalContent = document.querySelector('.modal-content');
  modalContent.appendChild(yes);
  modalContent.appendChild(no)

  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      modal.style.display = "block";
      const deleteMe = e.target.parentElement;

      modal.addEventListener('click', (e) => {
        if (e.target.innerText === "YES") {
          list.removeChild(deleteMe);
          modal.style.display = "none";
        } else if (e.target.innerText === "NO") 
          modal.style.display = "none"
      })
    }
  })
}

// C.6 - po kliknieciu Delete naloz klase .fade-out na element li oraz usun element z opoznieniem 1 sekundy
// uzyj setTimeout