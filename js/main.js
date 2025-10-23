window.addEventListener('load', () => {
	// Navbar
	fetch('navbar.html')
		.then(res => res.text())
		.then(data => document.getElementById('navbar-container').innerHTML = data)
		.catch(err => console.error('Error al cargar navbar:', err));

	// Footer
	fetch('footer.html')
		.then(res => res.text())
		.then(data => document.getElementById('footer-container').innerHTML = data)
		.catch(err => console.error('Error al cargar footer:', err));

});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar-container');
  if (window.scrollY > 100) {
    nav.classList.add('opacity-85', 'nav-blur');
  } else {
    nav.classList.remove('opacity-85', 'nav-blur');
  }
});