
//Function and global variables for handling whether the horizonal scroll bar is displayed depending on view-width

const targetWidth = window.innerWidth * 0.95;
const userResizeWidth = window.innerWidth * 1.05;

function adjustOverflow() {

    console.log('Current width:', window.innerWidth);
    console.log('90% of viewport width:', targetWidth);

    if (window.innerWidth >= targetWidth) {
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.overflowX = 'hidden';
    } else {
        document.documentElement.style.overflowX = 'visible';
        document.body.style.overflowX = 'visible';
    } if (window.innerWidth <= 1200){
         document.documentElement.style.overflowX = 'visible';
         document.body.style.overflowX = 'visible';
    } if (window.innerWidth >= userResizeWidth){
         document.documentElement.style.overflowX = 'hidden';
         document.body.style.overflowX = 'hidden';
    }
}

// Adjust overflow on window resize
window.addEventListener('resize', adjustOverflow);

// Adjust overflow on initial load
adjustOverflow();
/////////////////////////////////////////////////////////////////////////////////////////////

const navMenu=document.getElementById('nav-menu'),
        toggleMenu=document.getElementById('toggle-menu'),
        resumeButton=document.getElementById('resume'),
        logoAnch=document.getElementById('logo-anch'),
        borderBar=document.getElementById('border-bar'),
        headshotPic=document.getElementById('headshot-img'),
        headshotArrow=document.getElementById('arrow'),
        contactButton=document.getElementById('contact-btn'),
        githubButton=document.getElementById('github-svg'),
        linkedinButton=document.getElementById('linkedin-svg'),
        twitterButton=document.getElementById('twitter-svg'),
        instaButton=document.getElementById('instagram-svg'),
        discordButton=document.getElementById('discord-svg'),
        MEEE=document.getElementById('MEEE');

var navToggles=document.getElementsByClassName('page-links');

//----HELPER FUNCTIONS FOR HEADSHOT IMG HANDLING----//
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

//changing opacity to 1 of the MEEE text that appears
MEEE.addEventListener('mouseover', ()=>{
    MEEE.classList.add('show2');
    MEEE.style.opacity = '1';
})

//reseting the opacticty to 0 of the MEEE text
MEEE.addEventListener('mouseout', ()=>{
    MEEE.classList.remove('show2');
    MEEE.style.opacity = '';
})

//----Below 4 functions are to handle toggling the nav bar when the screen is a small size//
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

//------HELPER FUNCTIONS FOR SOCIALS LINKS------//

document.addEventListener('DOMContentLoaded', function () {
    const githubSvg = document.getElementById('github-svg');
    const linkedinSvg = document.getElementById('linkedin-svg');

    function adjustBackgroundSize(svgElement) {
        const boundingBox = svgElement.getBBox();
        const width = boundingBox.width;
        const height = boundingBox.height;

        svgElement.style.backgroundSize = `${width}px ${height}px`;
        svgElement.style.padding = '0.05rem 0.35rem 0.05rem 0.35rem'; // Adjust the padding as needed
    }

    // Adjust background size for GitHub SVG
    adjustBackgroundSize(githubSvg);

    // Adjust background size for LinkedIn SVG
    adjustBackgroundSize(linkedinSvg);
});

//GitHub Button//
githubButton.addEventListener('mouseover',() => {
    githubButton.style.backgroundColor = '#615EFC'
})

githubButton.addEventListener('mouseout',() => {
    githubButton.style.backgroundColor = ''
})

githubButton.addEventListener('click',() => {
    window.open('https://github.com/BlazingJaydon', '_blank')
})

//LinkedIn Button//
linkedinButton.addEventListener('mouseover',() => {
    linkedinButton.style.backgroundColor = '#615EFC'
})

linkedinButton.addEventListener('mouseout',() => {
    linkedinButton.style.backgroundColor = ''
})

linkedinButton.addEventListener('click',() => {
    window.open('https://www.linkedin.com/in/jaydon-hodge-8a6771263/', '_blank')
})

//Twitter Button//
twitterButton.addEventListener('mouseover',() => {
    twitterButton.style.fill = '#615EFC'
})

twitterButton.addEventListener('mouseout',() => {
    twitterButton.style.fill = ''
})

twitterButton.addEventListener('click',() => {
    window.open('https://x.com/yajenio', '_blank');
})

//Instagram Button//
instaButton.addEventListener('mouseover',() => {
    instaButton.style.fill = '#615EFC'
})

instaButton.addEventListener('mouseout',() => {
    instaButton.style.fill = ''
})

instaButton.addEventListener('click',() => {
    window.open('https://www.instagram.com/jayhodge72?igsh=MXcxaDFieWlnN3l3Mw%3D%3D&utm_source=qr', '_blank');
})

//Discord Button//
discordButton.addEventListener('mouseover',() => {
    discordButton.style.fill = '#615EFC'
})

discordButton.addEventListener('mouseout',() => {
    discordButton.style.fill = ''
})

discordButton.addEventListener('click',() => {
    window.open('http://discord.com/users/290289343677988864', '_blank');
})

/////////////////////////////////////////////////////////////////////////////