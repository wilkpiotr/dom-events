console.log('I am d.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
});

// D.1 - Obsluz przycisk dodawania zadania - wartosc wpisana w textarea ma byc dodana do listy
// D.2 - Element li o id = no-task powinien zniknac jak zadanie zostaje dodane
// D.3 - Textarea new-task powinien miec czyszczona zawartosc po dodaniu zadania
// D.4 - Dodaj link (znacznik a) do zadania na liscie i usun zadanie z listy po jego kliknieciu
// D.5 - Pokaz w aplikacji licznik zadań
// D.6 - Dodaj do zadania na liście znacznik checkbox (input o type checkbox) - po kliknieciu
// w checkbox zadanie ma otrzymac atrybut class = task-done (powinno byc przekreslone)
// po odliknieciu zadanie powinno znowu nie byc przekreslone
// D.7 - W liczniku zadań uwzglednij zadania zrobione, pokaż licznik w postaci {zrobione}/{wszystkie}
// D.8 - po usunięciu wszystkich zadań id=no-task powinien pojawić się ponownie na stronie z informacją, że nie ma zadan
// D.9 - dodaj link ^ ktory pozwala na przesuniecie zadania w gore listy
// D.10 - dodaj link Edit - pozwala edytowac istniejace zadanie - w miejscu tekstu zadania pojawia sie textarea i pzycisk 
// zapisz i anuluj

