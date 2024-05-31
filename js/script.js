console.log('script');
const typed = new Typed('.typing', {
  strings: [
    '',
    'Software Developer',
    'Web Designer',
    'React.js Developer',
    'Node.js Developer',
  ],
  typeSpeed: 520,
  BackSpeed: 80,
  loop: true,
});

const menuList = document.querySelectorAll('.menu');
function setActiveLink(link) {
  menuList.forEach((style, index) => {
    if (link === style.getAttribute('title')) {
      style.classList.add('active');
      showSection(style);
    } else {
      console.log(style, 'stylel,', link);
      if (menuList.length - 1 == index) {
        menuList[index].classList.add('back-section');
      }
      style.classList.remove('active');
    }
  });
}

function showSection(ele) {
  for (let i = 0; i < document.querySelectorAll('.section').length; i++) {
    document.querySelectorAll('.section')[i].classList.remove('active');
  }
  console.log(ele.getAttribute('title'), 'style');
  const targetElement = ele.getAttribute('title');
  document.querySelector('#' + targetElement).classList.add('active');
}
