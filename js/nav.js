document.addEventListener('DOMContentLoaded', () => {
  const navHamburger = document.getElementById('nav-hamburger');
  const navClose = document.getElementById('nav-btn-close');
  const headerNavList = document.querySelector('nav ul');
  
  navHamburger.addEventListener('click', () => {
    navHamburger.classList.add('hide');
    navClose.classList.remove('hide');
    headerNavList.classList.remove('hide');
  });

  navClose.addEventListener('click', () => {
    navHamburger.classList.remove('hide');
    navClose.classList.add('hide');
    headerNavList.classList.add('hide');
  });
});