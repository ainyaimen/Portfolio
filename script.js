const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');


function toggleMenu() {
    mobileMenu.classList.toggle('active');
}


menuIcon.addEventListener('click', toggleMenu);


const menuLinks = mobileMenu.querySelectorAll('a'); 

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active'); 
    });
});
