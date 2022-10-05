const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const showSuccess = document.querySelector('.show-success');

modal.classList.add('modal_active');

modalClose.addEventListener ('click', function() {
  modal.classList.remove('modal_active');
  });

showSuccess.addEventListener ('click', function() {
  showSuccess.classList.add('btn_success');
  });


