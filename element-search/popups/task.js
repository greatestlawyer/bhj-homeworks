const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnSuccess = document.getElementsByClassName('btn_danger')[0];
const btnClose = Array.from(document.getElementsByClassName('modal__close_times'));


function showModal() {
    modalMain.classList.add('modal_active');//показывает модальное окно
}

function clickButton() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}// при клике на кнопку удаляет актив у одной модалки и добавляет другой

function close() {
    console.log(this.closest('div.modal'));
    this.closest('div.modal').classList.remove('modal_active');
}// закрывает модалку

document.addEventListener('DOMContentLoaded', showModal);// открытие модалки при запуске скрипта
btnSuccess.addEventListener('click', clickButton);// смена кнопки при клике


for (let i = 0; i < btnClose.length; i++) {
    const element = btnClose[i];
    element.addEventListener('click', close);
}// закрытие модалки
