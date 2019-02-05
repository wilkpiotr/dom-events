console.log('I am a.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  counting();
});


const addUser = (name, lastName, age) => {
    const tbody = document.querySelector('#users tbody');
    cosnst 
    const user = document.createElement('tr');
    const userName = document.createElement('td')
    userName.innerText = name;
    const userLastName = document.createElement('td')
    userLastName.innerText = lastName;
    const userAge = document.createElement('td')
    userAge.innerText = age;
    user.appendChild(userName);
    user.appendChild(userLastName);
    user.appendChild(userAge);

    tbody.appendChild(user);
}

const setEventOnAddUserButton = () => {
    const button = document.querySelector('#new-user');
    button.addEventListener('click', (e) => {

    })
}