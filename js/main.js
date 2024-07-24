const navMenu = document.getElementById('nav-menu'),
        toggleMenu = document.getElementById('toggle-menu'),
        resumeButton=document.getElementById('resume'),
        logoAnch=document.getElementById('logo-anch'),
        borderBar = document.getElementById('border-bar');

var navToggles=document.getElementsByClassName('page-links');


toggleMenu.addEventListener('click',() => {
    navMenu.classList.toggle('show');
    borderBar.classList.toggle('show');

})

resumeButton.addEventListener('click',() => {
    navMenu.classList.toggle('show');
    borderBar.classList.toggle('show');
})

logoAnch.addEventListener('click',() => {
    if (navMenu.classList.contains('show')) {
        navMenu.classList.toggle('show');
        borderBar.classList.toggle('show');
    }
})

Array.prototype.forEach.call(navToggles, function(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        borderBar.classList.toggle('show');
    });
});