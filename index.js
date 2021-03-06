// first part of javascript start

'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunc = function () {
	nav.classList.toggle('active');
};

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

for (let x = 0; x < themeBtn.length; x++) {
	themeBtn[x].addEventListener('click', function () {
		// toggle "light-theme" & "dark-theme" class from "body"
		// when clicked "theme-btn"
		document.body.classList.toggle('light-theme');
		document.body.classList.toggle('dark-theme');

		for (let x = 0; x < themeBtn.length; x++) {
			// When the "theme-btn" is clicked,
			// it toggles classes between "light" & "dark" for all "theme-btn".
			themeBtn[x].classList.toggle('light');
			themeBtn[x].classList.toggle('dark');
		}
	});
}

// second part of javascript start

const modal = document.getElementById('myModal');

const img = document.getElementById('images_modal');
// const img = document.getElementsByClassName('test-me');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
img.onclick = function () {
	modal.style.display = 'block';
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
};

// after clicking the close button display will be none
const span = document.getElementsByClassName('close')[0];

span.onclick = function () {
	modal.style.display = 'none';
};

// click to top button

const myButton = document.getElementById('topButton');

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = 'block';
	} else {
		myButton.style.display = 'none';
	}
}

// year update by default
document.getElementById('newYear').innerHTML = new Date().getFullYear();

// extra hero section start
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(arrow) {
	showSlides((slideIndex += arrow));
}

function currentSlide(arrow) {
	showSlides((slideIndex = arrow));
}

function showSlides(arrow) {
	let i;
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('demo');
	if (arrow > slides.length) {
		slideIndex = 1;
	}
	if (arrow < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}
