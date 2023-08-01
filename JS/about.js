function mobileBehavior() {
  const mobileMenu = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger-link');
  const closebtn = document.getElementById('closebtn');

  function openMenu() {
    mobileMenu.style.right = '0'; 
  }

  function closeMenu() {
    mobileMenu.style.right = '100%'; 
  }

  const menuLinks = document.querySelectorAll('.menu-link');

  hamburger.onclick = openMenu;
  closebtn.onclick = closeMenu;

  document.addEventListener('click', function (event) {
    switch (event.target) {
      case menuLinks[0]:
      case menuLinks[1]:
      case menuLinks[2]:
      case menuLinks[3]:
      case menuLinks[4]:
      case menuLinks[5]:
        mobileMenu.style.right = '100%';
        break;
      default:
    }
  });
}

const mediaQuery = window.matchMedia('(max-width: 768px');

function mobileDevice(event) {
  if (event.matches) {
    mobileBehavior();
  } else {
    navbar.style.right = '0';
  }
}

mobileDevice(mediaQuery);
mediaQuery.addEventListener('change', mobileDevice)