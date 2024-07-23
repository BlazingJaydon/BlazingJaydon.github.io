const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    borderBar = document.getElementById('border-bar');


toggleMenu.addEventListener('click',() => {
    navMenu.classList.toggle('show');
    borderBar.classList.toggle('show');

})
