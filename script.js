'use Strict';

const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransition() {
  // Button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }

  //Section actve class
  for (let i = 0; i < allSections.length; i++) {
    allSections[i].addEventListener('click', function (e) {
      const id = e.target.dataset.id;
      if (id) {
        // remove selected from the other btn
        secBtn.forEach(btn => {
          btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // hide other section
        sections.forEach(section => {
          section.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
      }
    });
  }

  //   Toogle Theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}
pageTransition();
