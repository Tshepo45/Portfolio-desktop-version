const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Mobimage: 'vectors/snap.png',
    id: 'uno',
    Desktimage: 'vectors/snap20.png',
    technologies: ['html', 'css', 'javascript'],
    live_link: 'https://tshepo45.github.io/',
    source_link: 'https://github.com/Tshepo45/Portfolio-desktop-version.git',
    company: 'CANOPY',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Desktimage: 'vectors/snap4.png',
    id: 'swap2',
    Mobimage: 'vectors/snap2.png',
    technologies: ['html', 'css', 'javascript'],
    live_link: 'https://tshepo45.github.io/',
    source_link: 'https://github.com/Tshepo45/Portfolio-desktop-version.git',
    company: 'FACEBOOK',
  },

  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    Desktimage: 'vectors/snap.png',
    id: 'desktp',
    technologies: ['html', 'css', 'javascript'],
    live_link: 'https://tshepo45.github.io/',
    source_link: 'https://github.com/Tshepo45/Portfolio-desktop-version.git',
    company: 'FACEBOOK',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    Desktimage: 'vectors/snap2.png',
    technologies: ['html', 'css', 'javascript'],
    id: 'swap',
    live_link: 'https://tshepo45.github.io/',
    source_link: 'https://github.com/Tshepo45/Portfolio-desktop-version.git',
    company: 'UBER',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Mobimage: 'vectors/snap3.png',
    technologies: ['html', 'css', 'javascript'],
    id: 'yoga',
    live_link: 'https://tshepo45.github.io/',
    source_link: 'https://github.com/Tshepo45/Portfolio-desktop-version.git',
    company: 'CANOPY',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Desktimage: 'vectors/snap4.png',
    id: 's',
    Mobimage: 'vectors/snap4.png',
    technologies: ['html', 'css', 'javascript'],
    live_link: 'https://tshepo45.github.io/',
    source_link: 'https://github.com/Tshepo45/Portfolio-desktop-version.git',
    company: 'FACEBOOK',
  },

];

const projectsContainer = document.querySelector('.grid-item');

for (let i = 0; i < projects.length; i += 1) {
  // Create the card
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', projects[i].id);
  // Create the image
  const image = document.createElement('img');

  if (window.innerWidth < 768) {
    image.classList.add('card-img');
    image.src = projects[i].Mobimage;
  } else if (window.innerWidth > 768) {
    image.classList.add('card-img');
    image.setAttribute('id', 'two');
    image.src = projects[i].Desktimage;
  }
  card.appendChild(image);
  // Create the left block

  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block');
  card.appendChild(leftBlock);
  // Create the card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  leftBlock.appendChild(cardBody);
  // Create the card title
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = projects[i].name;
  cardBody.appendChild(cardTitle);
  // Create the card list
  const cardList = document.createElement('ul');
  if (projects[i].id === 'swap' || projects[i].id === 'swap2') {
    cardList.classList.add('card-list2');
  } else {
    cardList.classList.add('card-list');
  }

  cardList.setAttribute('id', 'lis');
  cardBody.appendChild(cardList);
  // Create the card text
  const cardText = document.createElement('li');
  cardText.classList.add('card-text');
  if (projects[i].id === 'desktp' || projects[i].id === 'swap2' || projects[i].id === 'desktp' || projects[i].id === 's' || projects[i].id === 'yoga' || projects[i].id === 'uno') {
    cardText.setAttribute('id', 'dt');
  } else { cardText.setAttribute('id', ''); }
  cardText.textContent = projects[i].company;
  // technologies.join(', ');
  cardList.appendChild(cardText);
  // Create the dot
  const dot = document.createElement('li');
  dot.classList.add('dot');
  cardList.appendChild(dot);
  // Create the dev
  const dev = document.createElement('li');
  dev.classList.add('dev');

  if (projects[i].name === 'Tonic') {
    dev.textContent = 'Back End Dev';
  } else if (projects[i].name === 'Multi-Post Stories') {
    dev.textContent = 'Full Stack Dev';
  } else if (projects[i].name === 'Facebook 360') {
    dev.textContent = 'Full Stack Dev';
  } else if (projects[i].name === 'Uber Navigation') {
    dev.textContent = 'Lead Developer';
  }

  cardList.appendChild(dev);
  // Create the dot
  const dots = document.createElement('li');
  dots.classList.add('dot');
  cardList.appendChild(dots);
  // Create the year
  const year = document.createElement('li');
  year.classList.add('year');
  year.textContent = '2015';
  cardList.appendChild(year);
  // Create the card description
  const cardDescription = document.createElement('p');
  cardDescription.classList.add('text');
  cardDescription.textContent = projects[i].description;
  cardBody.appendChild(cardDescription);
  // create tags list
  const ul = document.createElement('ul');
  ul.classList.add('tags');
  ul.setAttribute('id', 'tg');
  cardBody.appendChild(ul);
  // create li
  const btn1 = document.createElement('li');
  btn1.classList.add('button1');
  btn1.setAttribute('id', 'html');
  btn1.innerHTML = `
    <li ><a href="#">${projects[i].technologies[0]}</a></li>`;
  ul.appendChild(btn1);
  // create li
  const btn2 = document.createElement('li');
  btn2.classList.add('button2');
  btn2.setAttribute('id', 'css');
  btn2.innerHTML = `
  <li id="css"><a href="#">${projects[i].technologies[1]}</a></li>`;
  ul.appendChild(btn2);
  // create li
  const btn3 = document.createElement('li');
  btn3.classList.add('button3');
  btn3.setAttribute('id', 'js');
  btn3.innerHTML = `
  <li id="js"><a href="#">${projects[i].technologies[2]}</a></li>`;
  ul.appendChild(btn3);
  // create button
  const proj = document.createElement('div');

  if (window.innerWidth < 768) {
    proj.classList.add('project');
    const bt = document.createElement('a');
    bt.classList.add('button');
    bt.textContent = 'see project';
    bt.setAttribute('id', 'proj', 'projectz');
    proj.appendChild(bt);
  } else if (window.innerWidth > 768) {
    proj.classList.add('project-Desktop');
    proj.setAttribute('id', 'projectz');
    const bt = document.createElement('a');
    bt.classList.add('button');
    bt.textContent = 'see project';
    bt.setAttribute('id', 'proj');
    proj.appendChild(bt);
  }
  cardBody.appendChild(proj);
  projectsContainer.appendChild(card);
}
window.addEventListener('resize', () => this.location.reload());

// modal
const see = document.querySelectorAll('.project');
see.forEach((btn) => (btn.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main-pop';
  const popup = document.createElement('div');
  popup.className = 'card-pop';
  popup.innerHTML = `
  <h5 class="card-title-pop">Tonic<i class="fas fa-times fa-2xs"></i></h5>
  <ul class="card-list-pop">
    <li class="card-text">CANOPY</li>
    <li class="dot"></li>
    <li class="dev">Back End Dev</li>
    <li class="dot"></li>
    <li class="year">2015</li>
    </ul>
  <img id="one" class="card-img-pop" src="vectors/snap.png" alt="Tonic project snapshot">
  <div class="left-block">
  <div class="card-body">
              
      <p class="text-pop">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
     <ul class="tags-pop">
     <li id="html"><a href="#" class="tags button1">html</a></li>
     <li id="css"><a href="#" class="tags button2">css</a></li>
     <li id="js"><a href="#" class="tags button3">javascript</a></li>
     </ul> 
      <hr id="hr-pop">
      <div class = "modal-button">
     <div class="project-pop">
      <a id="proj" href="https://fatmahussein.github.io/portfolio/" class="button" >See live &nbsp;<img src="vectors/Icon.png"></a>
     </div>
     <div class="project-pop2">
      <a id="proj" href="https://github.com/fatmahussein/portfolio" class="button" >See Source &nbsp;<img src="vectors/git.png"></a>
     </div>
     </div>
    </div>
  </div>
  
  `;
  main.appendChild(popup);
  body.appendChild(body);

  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    body.removeChild(body);
  });
})));

const open = document.querySelectorAll('.project-Desktop');
open.forEach((desktop) => (desktop.addEventListener('click', () => {
  const mains = document.createElement('div');
  mains.className = 'main-pops';
  const dPopup = document.createElement('div');
  dPopup.className = 'card-pops';
  dPopup.innerHTML = `
  
  <h5 class="card-title-pops">Tonic</h5>
  <i class="fas fa-times"></i> 
  <ul class="card-list-pops">
    <li class="card-text">CANOPY</li>
    <li class="dot"></li>
    <li class="dev">Back End Dev</li>
    <li class="dot"></li>
    <li class="year">2015</li>
    </ul>
  
  <img id="two" class="card-img-pops" src="vectors/snap20.png" alt="Tonic project snapshot">
  
  <div class="card-body">
    <p class="text-pops">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
    <ul class=" tags-pops">
    
      <li id="html-pop"><a href="#" class="tags button1">html</a></li>
      <li id="css-pop"><a href="#" class="tags button2">css</a></li>
      <li id="js-pop"><a href="#" class="tags button3">javascript</a></li>  
      <li id="git"><a href="#" class=" button3">github</a></li>
      <li id="ruby"><a href="#" class=" button3">ruby</a></li>
      <li id="bs"><a href="#" class=" button3">Bootstraps</a></li>
     </ul> 
     
     <hr id="hr-pops">
     <div class="project-pops">
      <a id="projp" href="https://fatmahussein.github.io/portfolio/" class="button" >See live &nbsp;<img src="vectors/Icon.png"></a>
     </div>
     <div class="project-pops2">
      <a id="projp" href="https://github.com/fatmahussein/portfolio" class="button" >See Source &nbsp;<img src="vectors/git.png"></a>
     </div>
   
    
  </div>
  
  `;
  mains.appendChild(dPopup);
  body.appendChild(mains);

  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    body.removeChild(mains);
  });
})
));

const form = document.querySelector('#register');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.style.visibility = 'visible';
    event.preventDefault();
  }
});
