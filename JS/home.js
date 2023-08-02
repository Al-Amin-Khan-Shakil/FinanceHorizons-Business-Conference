const speakersData = [
  {
    image: './images/man-01.jpg',
    spkrName: 'David Chen',
    identy: 'Director of Finance, Sustainable Futures Foundation',
    identyDes: "As Director of Finance, David Chen's expert financial acumen and commitment to impactful projects contribute significantly to advancing the foundation's mission of sustainable development.",
  },
  {
    image: './images/man-02.jpg',
    spkrName: 'John Anderson',
    identy: 'CEO, Tech Innovations Inc.',
    identyDes: 'A visionary leader in the tech industry, John Anderson serves as the CEO of Tech Innovations Inc., renowned for groundbreaking advancements in artificial intelligence and data analytics.',
  },
  {
    image: './images/woman-02.jpg',
    spkrName: 'Sophia Lee',
    identy: 'Co-Founder & CEO, HealthTech Solutions',
    identyDes: "As the Co-Founder & CEO of HealthTech Solutions, Sophia Lee's passion for improving patient care and accessibility through innovative technologies has positioned her company as a game-changer in the health tech sector.",
  },
  {
    image: './images/woman-01.jpg',
    spkrName: 'Emily Roberts',
    identy: 'Chief Marketing Officer, Global Brands Group',
    identyDes: "Chief Marketing Officer of Global Brands Group, is a marketing virtuoso. Her expertise lies in crafting compelling brand stories and utilizing digital platforms to elevate global brands' growth and reach.",
  },
  {
    image: './images/woman-03.jpg',
    spkrName: 'Rachel Turner',
    identy: 'Director of Sustainability, EcoVations Corporation',
    identyDes: "Rachel Turner's dedication to environmental sustainability drives her role as the Director of Sustainability at EcoVations Corporation. She plays a pivotal part in promoting eco-friendly initiatives and forging a greener path to combat climate change.",
  },
  {
    image: './images/man-03.jpg',
    spkrName: 'Michael Johnson',
    identy: 'Chief Economist, Global Economics Institute',
    identyDes: 'As a leading economist Michael Johnson is widely recognized for his in-depth research and advisory expertise, providing invaluable insights to governments and businesses on global economic trends.',
  },

];

function createSpeakerCards() {
  const speakerContainer = document.getElementById('speaker-container');

  speakersData.forEach((speaker) => {
    const card = document.createElement('div');
    card.classList.add('speaker-card');

    const photoContainer = document.createElement('div');
    photoContainer.classList.add('card-photo-container');

    const designElement = document.createElement('div');
    designElement.classList.add('designElement');
    photoContainer.appendChild(designElement);

    const image = document.createElement('img');
    image.classList.add('speaker-photo');
    image.src = speaker.image;
    image.alt = 'Speaker photo';
    photoContainer.appendChild(image);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('card-content-container');

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = speaker.spkrName;
    contentContainer.appendChild(name);

    const identy = document.createElement('div');
    identy.classList.add('identy');
    identy.textContent = speaker.identy;
    contentContainer.appendChild(identy);

    const line = document.createElement('div');
    line.classList.add('separation-line');
    contentContainer.appendChild(line);

    const description = document.createElement('div');
    description.classList.add('identy-description');
    description.textContent = speaker.identyDes;
    contentContainer.appendChild(description);

    card.appendChild(photoContainer);
    card.appendChild(contentContainer);

    speakerContainer.appendChild(card);
  });
}

window.addEventListener('load', createSpeakerCards);

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

  document.addEventListener('click', (event) => {
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
    document.getElementById('navbar').style.right = '0';
  }
}

mobileDevice(mediaQuery);
mediaQuery.addEventListener('change', mobileDevice);