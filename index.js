// firs part of javascript start

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
		// toggle `light-theme` & `dark-theme` class from `body`
		// when clicked `theme-btn`
		document.body.classList.toggle('light-theme');
		document.body.classList.toggle('dark-theme');

		for (let x = 0; x < themeBtn.length; x++) {
			// When the `theme-btn` is clicked,
			// it toggles classes between `light` & `dark` for all `theme-btn`.
			themeBtn[x].classList.toggle('light');
			themeBtn[x].classList.toggle('dark');
		}
	});
}

// second part fo javascript start