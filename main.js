'use strict';

{
  // ハンバーガーメニュー
  const body = document.querySelector('body');
  const bar = document.getElementById('bar');
  const hide = document.getElementById('hide');

  const menu = document.getElementById('menu');
  const menuList = document.querySelectorAll('.menuList');

  bar.addEventListener('click', () => {
    menu.classList.add('open');
  })
  menuList.forEach(eachMenu => {
    eachMenu.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
  hide.addEventListener('click', () => {
    menu.classList.remove('open');
  });

}
