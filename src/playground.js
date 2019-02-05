console.log('I am playground.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  // doItInSecond();
  // changeBgAfter10seconds();
  // addDivInInterval();
  // setClickOnButtonInOrange();
  // setClickOnButtonInOrangeBubbling();
  // setClickOnButtonInOrangeBubblingBody();
  // changeColorAfterButtonClick();
  // orangeDivListener();
  // mouseHandlers();
  // scrollEvent();
  // formChangeEvents();
  // textarea();
});
const scrollEvent = () => {
  window.addEventListener('scroll', (e) => {
    console.log('scroll');
  });

  window.addEventListener('scroll', (e) => {
    const div = document.createElement('div');
    div.className = 'with-padding red bordered';
    document.querySelector('body').appendChild(div);
  });
}

const mouseHandlers = () => {
  const orange = document.querySelector('#orange-div');
  // orange.addEventListener('mouseover',(e) => {
  //   e.currentTarget.innerHTML += '<b>called every time</b>';
  // });

  orange.addEventListener('mouseenter',(e) => {
    if (e.currentTarget === e.target) {
      e.currentTarget.querySelector('#message').innerText = ' I am on the div';
    }
  });

  // orange.addEventListener('mousemove', (e) => {
  //   e.currentTarget.querySelector('#xy').innerText = e.clientX + ',' +e.clientY;
  // });

  orange.addEventListener('mouseleave', (e) => {
    e.currentTarget.querySelector('#message').innerText = ' I am out of the div';
  });
}
const orangeDivListener = () => {
  const orange = document.querySelector('#orange-div');
  orange.addEventListener('click', (event) => {
    event.currentTarget.style.backgroundColor = 'green';
    // event.stopPropagation();
  })
}

const changeColorAfterButtonClick = () => {
  const button = document.querySelector('#orange-div button');
  button.addEventListener('click', (event) => {
    event.currentTarget.parentElement.style.backgroundColor = 'blue';
    event.stopImmediatePropagation();
  });

  button.addEventListener('click', (event) => {
    event.currentTarget.parentElement.style.backgroundColor = 'black';
  });
}
const setClickOnButtonInOrangeBubblingBody = () => {
  const button = document.querySelector('body');
  button.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
  });
}

const setClickOnButtonInOrangeBubbling = () => {
  const button = document.querySelector('#orange-div');
  button.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
  });
}

const setClickOnButtonInOrange = () => {
  const button = document.querySelector('#orange-div button');
  button.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
  });
}

const addDivInInterval = () => {
  const orange = document.querySelector('#orange-div');
  const interval = setInterval(() => {
    const div = document.createElement('div');
    div.classList.add('bordered');
    div.classList.add('with-padding');
    div.innerText = 'New Div!'
    orange.appendChild(div);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
}

const changeBgAfter10seconds = () => {
  setTimeout(() => {
    document.querySelector('#orange-div').style.backgroundColor = 'blue';
  }, 10000)
}

const doItInSecond = () => {
  setTimeout(() => {
    console.log('After second');
  }, 2000);
  console.log('I am called before');
};

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