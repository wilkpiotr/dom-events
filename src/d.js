console.log('I am d.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  d();
  
});

// D.1 - Obsluz przycisk dodawania zadania - wartosc wpisana w textarea ma byc dodana do listy

const d = () => {
  const ul = document.querySelector('ul');
  const button = document.querySelector('button');
  const textarea = document.querySelector('#new-task');
  const taskCounter = document.querySelector('#task-counter');
  const noTaskInfo = ul.innerHTML;
  // let allTasks = 0;

  button.addEventListener('click', (e) => {
    if (document.querySelector('#no-tasks')) {
      ul.removeChild(ul.firstElementChild)
    } 
    addTask();
    countTask();
  })

  const addTask = () => {
    if (textarea.value !== '') {
    const task = document.createElement('li');
    task.innerHTML = `<span>${textarea.value}</span> <a id="delete-me">delete</a> <a id="move-up">&#8657</a> <a id="move-down">&#8659;</a><input type="checkbox"> <a id="edit-me">edit</a>`;
    ul.appendChild(task);
    textarea.value = '';
    }
  }

  const editTask = () => {
    ul.addEventListener('click', (e) => {
      if (e.target.id === 'edit-me') {
        const task = e.target.parentElement;
        let taskContent = task.firstElementChild.innerText;
        const taskBody = task.innerHTML;
        const editTaskContent = `<textarea id="edited-task">${taskContent}</textarea><button id="save">save</button><button id="cancel">cancel</button>`;
        task.innerHTML = editTaskContent;
        task.addEventListener('click', (e) => {
          if (e.target.id === 'cancel') {
            task.innerHTML = taskBody;
          } else if (e.target.id === 'save') {
            const editedTask = document.querySelector('#edited-task').value;
            task.innerHTML = taskBody;
            task.firstElementChild.innerText = editedTask; 
          }
        })
      } 
    })
  };

  const deleteTask = () => {
    ul.addEventListener('click', (e) => {
    if (e.target.id === 'delete-me') {
      ul.removeChild(e.target.parentElement)
      countTask()
      } 
    })
  };

  const checkTask = () => {
    ul.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') {
        e.target.parentElement.classList.toggle('task-done');
      } 
      countTask();
    })
  }

  const moveTask = () => {
    ul.addEventListener('click', (e) => {
      if (e.target.id === 'move-up' && e.target.parentElement.previousElementSibling !== null) {
        e.target.parentElement.parentElement.insertBefore(e.target.parentElement, e.target.parentElement.previousElementSibling );
      } 
      else if (e.target.id === 'move-down' && e.target.parentElement.nextElementSibling !== null) {
        e.target.parentElement.parentElement.insertBefore(e.target.parentElement.nextElementSibling, e.target.parentElement );
      } 
    })
  }

  const countTask = () => {
    const list = Array.from(document.querySelectorAll('li'))
    const doneList = Array.from(document.querySelectorAll('li.task-done'));
    taskCounter.innerText = 'All tasks: ' + doneList.length + "/" + list.length;
    noTasks();
  }

  const noTasks = () => {
    const list = Array.from(document.querySelectorAll('li'))
    if (list.length === 0) {
      ul.innerHTML = noTaskInfo;
    }
  }

  deleteTask();
  checkTask();
  moveTask();
  editTask();
}

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

