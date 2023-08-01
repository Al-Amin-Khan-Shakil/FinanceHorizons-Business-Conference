const speakers = [
  {
    image: './images/man-01.jpg',
    spkrName: 'Yochai Benkler',
    identy: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    identyDes: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {
    image: './images/man-02.jpg',
    spkrName: 'Kilnam Chon',
    identy: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    identyDes: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame'
  },
  {
    image: './images/woman-02.jpg',
    spkrName: 'Yochai Benkler',
    identy: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    identyDes: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {
    image: './images/woman-01.jpg',
    spkrName: 'Kilnam Chon',
    identy: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    identyDes: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame'
  },
  {
    image: './images/woman-03.jpg',
    spkrName: 'Yochai Benkler',
    identy: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    identyDes: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {
    image: './images/man-03.jpg',
    spkrName: 'Kilnam Chon',
    identy: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    identyDes: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame'
  }
  
];
const speakerContainer = document.getElementById('speaker-container');

for (let i = 0; i < speakers.length; i += 1) {
  let fetch = speakerContainer.innerHTML;

  speakerContainer.innerHTML = `${fetch}
  <div class="speaker-card">
            <div class="card-photo-container">
              <div class="design-element"></div>
              <img src=${speakers[i].image} alt="Speaker photo" class="speaker-photo">
            </div>
            <div class="card-content-container">
              <div class="name">${speakers[i].spkrName}</div>
              <div class="identy">
                ${speakers[i].identy}
              </div>
              <div class="separation-line"></div>
              <div class="identy-description">
                ${speakers[i].identyDes}
              </div>
            </div>
          </div>`
};

function mobileBehavior() {
  const mobileMenu = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger-link');
  const closebtn = document.getElementById('closebtn');

  function openMenu() {
    navbar.style.right = '0'; 
  }

  function closeMenu() {
    navbar.style.right = '100%'; 
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
        navbar.style.right = '100%';
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