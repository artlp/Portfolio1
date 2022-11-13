const mainBody = document.querySelector('.mainbody');
const home = document.querySelector('.home');
const aboutMe = document.querySelector('.aboutme');
const myProjects = document.querySelector('.myprojects');
const myContacts = document.querySelector('.mycontacts');
const btnHome = document.querySelector('#home');
const btnAbout = document.querySelector('#about');
const btnProjects = document.querySelector('#projects');
const btnContacts = document.querySelector('#contacts');

function hideScreens() {
    mainBody.children[0].classList.add('hidden');
    mainBody.children[1].classList.add('hidden');
    mainBody.children[2].classList.add('hidden');
    mainBody.children[3].classList.add('hidden');
    setTimeout(() => {
        myProjects.scrollTo(0,0);
        aboutMe.scrollTo(0,0);
        myContacts.scrollTo(0,0);
        home.scrollTo(0,0);
        mainBody.scrollTo(0,0);
    },1000)
}

btnHome.addEventListener('click', () => {
    hideScreens();
    home.classList.remove('hidden');
});
btnAbout.addEventListener('click', () => {
    hideScreens();
    aboutMe.classList.remove('hidden');
});
btnProjects.addEventListener('click', () => {
    hideScreens();
    myProjects.classList.remove('hidden');
});
btnContacts.addEventListener('click', () => {
    hideScreens();
    myContacts.classList.remove('hidden');
});
