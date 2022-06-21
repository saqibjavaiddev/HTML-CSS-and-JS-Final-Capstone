// ==== JS for Mobile Menu ==== //
const openIcon = document.querySelector('#humberger');
const closeIcon = document.querySelector('.closeIcon');
const navbar = document.querySelector('.nav');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const navbarOverlay = document.getElementById('navbar-overlay');

// Open Menu on Click (Event) //

openIcon.addEventListener('click', () => {
  navbarOverlay.style.width = '100%';
  navbar.classList.add('blur');
  header.classList.add('blur');
  main.classList.add('blur');
});

// Close Menu on Click (Event) //

closeIcon.addEventListener('click', () => {
  navbarOverlay.style.width = '0%';
  navbar.classList.remove('blur');
  header.classList.remove('blur');
  main.classList.remove('blur');
});

// ==== JS for Dynamic Speakers Section ==== //

const speakersData = [
    {
      id: 1,
      name: 'Les Brown',
      topic: ' he is one of Egypt’s most influential community contributing figures',
      bio: 'Lee was a member of the Ohio House of Representatives from 1977 to 1981',
      urlImage: 'assets/img/Les-Brown.jpg',
    },
    {
      id: 2,
      name: 'Eric Thomas',
      topic: ' he is an American motivational speaker, author, consultant, and minister.',
      bio: 'Speeches by Thomas are popular on YouTube. Thomas spent twelve years working toward an undergraduate degree at Oakwood and graduated in 2001.',
      urlImage: 'assets/img/Eric-Thomas.jpg',
    },
    {
      id: 3,
      name: 'Tony Robbins',
      topic: 'is an American author, coach, speaker, and philanthropist',
      bio: ' He is known for his infomercials, seminars, and self-help books including the books Unlimited Power and Awaken the Giant.',
      urlImage: 'assets/img/Tony_Robbins.jpg',
    },
    {
      id: 4,
      name: 'Imran Khan',
      topic: 's a Pakistani politician and former cricketer who served as the 22nd prime minister of Pakistan',
      bio: 'At the height of his career, in 1982, the thirty-year-old Khan took over the captaincy of the Pakistan cricket team from Javed Miandad. As a captain, Khan played 48 Test matches, of which 14 were won by Pakistan, 8 lost and the remaining 26 were drawn',
      urlImage: 'assets/img/imran.jpg',
    },
    {
      id: 5,
      name: 'Tanzila Khan',
      topic: ' is a Pakistani disability rights activist, author, motivational speaker, and founder of Girly Things PK',
      bio: 'Khan recounts a personal experience of her period starting while she was running errands. She found herself in urgent need, but the shops were not accessible to wheelchair users such as herself.',
      urlImage: 'assets/img/Tanzila.jpg',
    },
    {
      id: 6,
      name: 'Qasim Ali Shah',
      topic: 'Qasim Ali Shah is a teacher, corporate trainer, and an inspirational speaker.',
      bio: 'Qasim Ali Shah is one of the well-known authors of Pakistan. He has written twelve books so far, which are among the best-selling books in Pakistan.',
      urlImage: 'assets/img/qasim.jpg',
    },
  ];
  
  
  const speakersContainer = document.querySelector('.speakers_container');
  speakersData.forEach((speaker) => {
    const speakerProject = document.createElement('div');
    let speakerContent = '';
    speakerContent = `  
    <div class="speakers_list_item">
    <div class="speaker_list_item_img">
        <img src=${speaker.urlImage} alt="${speaker.name}" />
    </div>
    <div class="speaker_list_item_content">
        <h3>${speaker.name}</h3>
        <p class="speaker_list_item_content_bio">
           ${speaker.topic}
        </p>
        <div class="speakers_bio_line">
  
        </div>
        <p>
        ${speaker.bio}
        </p>
    </div>
  </div>
  `;
  
    speakerProject.innerHTML = speakerContent;
    speakersContainer.appendChild(speakerProject);
  });
  