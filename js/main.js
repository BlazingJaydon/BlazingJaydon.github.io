const navMenu = document.getElementById('nav-menu'),
        toggleMenu = document.getElementById('toggle-menu'),
        resumeButton= document.getElementById('resume'),
        logoAnch= document.getElementById('logo-anch'),
        borderBar = document.getElementById('border-bar'),
        headshotPic=document.getElementById('headshot-img'),
        headshotArrow=document.getElementById('arrow'),
        MEEE=document.getElementById('MEEE');

var navToggles=document.getElementsByClassName('page-links');


//for when user hovers over my headshot img
headshotPic.addEventListener('mouseover',() => {
    MEEE.classList.toggle('show2');
    MEEE.style.opacity = '1';
})

//for when user mouses out of my headshot img
headshotPic.addEventListener('mouseout',() => {
    MEEE.classList.toggle('show2');
    MEEE.style.opacity = '';
})

MEEE.addEventListener('mouseover', ()=>{
    MEEE.classList.add('show2');
    MEEE.style.opacity = '1';
})

MEEE.addEventListener('mouseout', ()=>{
    MEEE.classList.remove('show2');
    MEEE.style.opacity = '';
})

//Below 4 functions are to handle toggling the nav bar when the screen is a small size
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

/////////////////////////////////////////////////////////////////////////////