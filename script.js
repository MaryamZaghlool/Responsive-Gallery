const menuToggle = document.getElementById('menu-toggle');
const contNavs =document.getElementById("cont-navs")

menuToggle.addEventListener('click', () => {
  contNavs.classList.toggle('show');
});