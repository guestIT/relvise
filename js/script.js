"use strict"
const menuButton = document.querySelector ('.menu__toggle');
const menuList = document.querySelector ('.menu__list');

document.querySelector('.menu__toggle').addEventListener('click', function(){
    document.querySelector('.menu__toggle--burger').classList.toggle('menu__toggle--burger-active');
  })

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu__toggle--active');
    menuList.classList.toggle('menu__list--open');
  });
