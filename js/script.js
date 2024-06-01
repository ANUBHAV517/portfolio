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

// const menuList = document.querySelectorAll('.menu');
// function setActiveLink(link) {
//   menuList.forEach((style, index) => {
//     if (link === style.getAttribute('title')) {
//       style.classList.add('active');
//       showSection(style);
//     } else {
//       console.log(style, 'stylel,', link);
//       if (menuList.length - 1 == index) {
//         menuList[index].classList.add('back-section');
//       }
//       style.classList.remove('active');
//     }
//   });
// }
const nav = document.querySelector('.nav'),
  navList = document.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');
  a.addEventListener('click', function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        addBackSection(j);
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    console.log(this, 'this');
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('back-section');
  }
}
function addBackSection(index) {
  allSection[index].classList.add('back-section');
}
function showSection(ele) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }
  const targetElement = ele.getAttribute('href').split('#')[1];
  console.log(targetElement, 'target');
  document.querySelector('#' + targetElement).classList.add('active');
}
function updateNav(ele) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector('a').classList.remove('active');
    const target = ele.getAttribute('href').split('#')[1];
    if (
      target ===
      navList[i].querySelector('a').getAttribute('href').split('#')[1]
    ) {
      navList[i].querySelector('a').classList.add('active');
    }
  }
}
document.querySelector('.hire-me').addEventListener('click', function () {
  const sectionIndex = this.getAttribute('data-section-index');
  showSection(this);
  updateNav(this);
  removeBackSection();
  console.log(sectionIndex, 'sectionindex', this);
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}

// var data = {
//   service_id: 'YOUR_SERVICE_ID',
//   template_id: 'YOUR_TEMPLATE_ID',
//   user_id: 'YOUR_PUBLIC_KEY',
//   template_params: {
//     username: 'Anubhav',
//     // 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
//   },
// };

// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//   type: 'POST',
//   data: JSON.stringify(data),
//   contentType: 'application/json',
// })
//   .done(function () {
//     alert('Your mail is sent!');
//   })
//   .fail(function (error) {
//     alert('Oops... ' + JSON.stringify(error));
//   });

function sendMail() {
  let param = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_g2iyb9e', 'template_ojmqyfp', param).then(
    () => {
      alert('Message sent successfully!');
    },
    (err) => {
      alert('Failed to send message. Please try again.');
      console.log('Failed to send email. Error: ', err);
    }
  );
}
