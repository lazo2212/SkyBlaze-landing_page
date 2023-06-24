const menuBtn = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('opened');
  navigation.classList.toggle('nav--visible');
});

addEventListener('scroll', () => {
  menuBtn.classList.remove('opened');
  navigation.classList.remove('nav--visible');
});
