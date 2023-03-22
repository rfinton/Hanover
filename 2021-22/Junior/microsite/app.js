import { MDCRipple } from '@material/ripple';
import { gsap } from "gsap";

const hanoverBlue = 'rgb(63, 142, 218)';
const purl = document.querySelector('#purl').dataset.purl;
const seed = document.querySelector('#purl').dataset.seed;
const buttons = document.querySelectorAll('.mdc-button');
const opt = document.querySelectorAll('input[type="checkbox"]');

const pii = {
	fn: document.querySelector('#fn'),
	ln: document.querySelector('#ln'),
	em: document.querySelector('#em'),
	ph: document.querySelector('#ph'),
};

const generateEfcid = () => {
	return 'FUEL-JR' + Math.floor(Math.random() * (999999 - 100000) + 100000);
};

Array.from(buttons).forEach(button => {
	new MDCRipple(button);
});

Array.from(opt).forEach(e => {
	e.addEventListener('change', function() {
		if (e.checked) {
			gsap.to(e.nextElementSibling, {
				backgroundColor: hanoverBlue,
				duration: 0.5
			});
		} else {
			gsap.to(e.nextElementSibling, {
				backgroundColor: 'transparent',
				duration: 0.5
			});
		}
	});
});

if (!purl) {
	for (let i in pii) {
		pii[i].style.display = 'block';
	}
} else {
	document.querySelector('form p').style.display = 'none';
}

document.forms[0].addEventListener('submit', function(evt) {
	document.querySelector('.loader').style.display = 'inline-block';
	document.querySelector('#submit').style.display = 'none';

	if (!document.querySelector('#efcid').value) {
		evt.preventDefault();
		document.querySelector('#efcid').value = generateEfcid();
		document.querySelector('input[name="gurl"]').value = 'true';
		document.querySelector('input[name="prefname"]').value = pii.fn.value;
		this.submit();
	}
});

if (document.body.classList.contains('delay5')) {
	(function() {
		let counter = 5;
		const timer = document.querySelector('#timer');
		const delay = setInterval(() => {
			if (counter < 0) {
				clearInterval(delay);
				window.location = `https://www.hanover.edu/admission?pid=${purl}&evt=201917&utm_source=Senior&utm_medium=Microsite&utm_campaign=FUEL`;
			} else {
				let txt = `(Your browser will redirect to <br>www.hanover.edu/admission<br> in <b style="font-family: Avenir-Heavy, sans-serif;">${counter}</b> seconds.)`;
				timer.innerHTML = txt;
				counter -= 1;
			}
		}, 1000);
	})();
}