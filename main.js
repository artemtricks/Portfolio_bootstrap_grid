let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll(`${'.nav__close'}, ${'.nav__link'}`); 
  
burger.addEventListener('click', function () {
    menu.classList.toggle('nav--active');
    
});
  
menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        menu.classList.remove('nav--active');
    })
  
});