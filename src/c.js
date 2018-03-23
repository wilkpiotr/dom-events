console.log('I am c.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
});
// C.1 - obsluz klikniecie w przycisk Delete - usun element z listy
// C.2 - obsluz przycisk reset - ma wstawic ponownie wszystkie elementy jak bylo na poczatku
// C.3 - wykonaj zadanie C.1 ale naloz event handler na li
// C.4 - wykonaj zadanie z C.3 ale naloz handler na body
// C.5 - przed usunieciem pokaz okienko dialogowe z id modal, zeby je pokazac ustaw je jako widoczne
// czyli uzyj style.display = 'block', zeby schowac style.display = 'none'
// dodaj w okienku 2 przyciski jeden z Yes - po ktorym element jest usuniety a okienko schowane
// i No - po ktorym tylko okienko sie chowa
// C.6 - po kliknieciu Delete naloz klase .fade-out na element li oraz usun element z opoznieniem 1 sekundy
// uzyj setTimeout