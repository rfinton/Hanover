import * as mdb from 'mdb-ui-kit';
import gsap from 'gsap';

const choices = document.querySelectorAll('.choice input');
const buttons = document.querySelectorAll('button[type="submit"]');

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener('click', (evt) => {
    if (evt.target.checked) {
      gsap.to(evt.target.parentElement.nextElementSibling, { duration: 1, translateY: '100%' });
    } else {
      gsap.to(evt.target.parentElement.nextElementSibling, { duration: 1, translateY: '0%' });
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (evt) => {
    document.querySelector('input[name="submitaction"]').value = evt.target.value;
    document.forms[0].submit();
  });
}

function populateChoices(ffr) {
  let ffrHasValues = false;

  function createListItem(item) {
    const li = document.createElement('li');
    li.innerHTML = item;
    return li;
  }

  for (let i = 0; i < ffr.length; i++) {
    if (ffr[i] !== '') {
      ffrHasValues = true;
      document.querySelector('ul').appendChild(createListItem(ffr[i]));
    }
  }

  return ffrHasValues;
}

function hideChoices() {
  document.querySelector('main > section > p:nth-of-type(2)').style.display = 'none';
  document.querySelector('.interests').style.display = 'none';
}

if (window.location.pathname.search(/thank/) !== -1) {
  populateChoices(ffr_a) || populateChoices(ffr_b) || hideChoices();
  
  if (phone !== '') {
    document.querySelector('input').setAttribute('disabled', true);
    document.querySelector('.phone.check-true').style.display = 'flex';
    document.querySelector('.phone.check-false').style.display = 'none';
  }
} else {
  document.forms[0].onsubmit = function (evt) {
    evt.preventDefault();
  };
}

export default { mdb };
