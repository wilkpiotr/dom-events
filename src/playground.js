console.log('I am playground.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  textarea();
});

const textarea = () => {
  const div = document.querySelector('#here');
  const ta = document.querySelector('textarea');
  ta.addEventListener('keypress', (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      div.innerText = e.currentTarget.value;
    }
  });
}