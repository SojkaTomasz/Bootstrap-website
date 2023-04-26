document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');

	function addNavBg() {
		if (window.scrollY >= 100) {
			nav.classList.add('nav-bg');
		} else {
			nav.classList.remove('nav-bg');
		}
	}

	window.addEventListener('scroll', addNavBg);
})

const showClick = document.querySelector('.navbar-collapse');

function showClickshow() {
	showClick.classList.remove('show');
}

showClick.addEventListener('click', showClickshow);