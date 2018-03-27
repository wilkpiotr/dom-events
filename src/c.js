console.log('I am c.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
 // c1();
 // c2();
 // c3();
//  c4();
   c5();
});


// C.1 - obsluz klikniecie w przycisk Delete - usun element z listy
const c1 = () => {
  const ul = document.querySelector('ul');
  const as = document.querySelectorAll('a');
  const asArr = Array.from(as);
  asArr.forEach((a) => {
    a.addEventListener('click', (e) => {
      event.target.parentElement.setAttribute("id","remove_me");
      ul.removeChild(document.querySelector('#remove_me'));
      
    })
  })
}
// C.2 - obsluz przycisk reset - ma wstawic ponownie wszystkie elementy jak bylo na poczatku

const c2 = () => {
  
  const ul = document.querySelector('ul');
  const newUl = ul.innerHTML;
  const button = document.querySelector('button');
  button.addEventListener('click', (e) => {
    ul.innerHTML = newUl;
  })

}
// C.3 - wykonaj zadanie C.1 ale naloz event handler na li

const c3 = () => {
  const ul = document.querySelector('ul');
  const lis = document.querySelectorAll('li');
  const lisArr = Array.from(lis);
  lisArr.forEach((li) => {
    li.addEventListener('click', (e) => {
      ul.removeChild(event.target);
    })
  })
}
// C.4 - wykonaj zadanie z C.3 ale naloz handler na body

const c4 = () => {
  const body = document.querySelector('body');
  body.addEventListener('click', (e) => {
    event.target.parentElement.removeChild(event.target);
  })
}
// C.5 - przed usunieciem pokaz okienko dialogowe z id modal, zeby je pokazac ustaw je jako widoczne
// czyli uzyj style.display = 'block', zeby schowac style.display = 'none'
// dodaj w okienku 2 przyciski jeden z Yes - po ktorym element jest usuniety a okienko schowane
// i No - po ktorym tylko okienko sie chowa
const c5 = () => {
  const body = document.querySelector('body');
  body.addEventListener('click', (e) => {
    event.target.setAttribute("id","remove_me");
    const div = document.querySelector('#modal');
    const div2 = div.firstElementChild;
    div.style.display = "block";
    const yes = document.createElement('button');
    yes.innerText = 'YES';
    const no = document.createElement('button');
    no.innerText = 'NO';
    div2.appendChild(yes);
    div2.appendChild(no);
    e.stopPropagation();
    yes.addEventListener('click', (e) => {
      body.removeEventListener('click', (e));
      div.style.display = "none";
      document.querySelector('#remove_me').parentElement.removeChild(document.querySelector('#remove_me'));
    })
    e.stopPropagation();
    no.addEventListener('click', (e) => {
      body.removeEventListener('click', (e));
      div.style.display = "none";
    })
  })
}

// C.6 - po kliknieciu Delete naloz klase .fade-out na element li oraz usun element z opoznieniem 1 sekundy
// uzyj setTimeout