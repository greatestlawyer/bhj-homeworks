document.querySelectorAll('.menu__link').forEach(e => {
  e.addEventListener('click', e => {
    document.querySelectorAll('.menu_sub').forEach(e => {
      if(!document.querySelector('.menu_sub').classList.contains('menu_active')) {
        document.querySelector('.menu_sub').classList.add('menu_active');
      }
    });
  });
});


