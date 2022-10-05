const list = document.getElementsByClassName('dropdown__list'),
      item = document.getElementsByClassName('dropdown__item'),
      items = Array.from(item),
      value = document.getElementsByClassName('dropdown__value'),
      values = Array.from(value);

values.forEach(elem => {
    elem.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    items.forEach(element => {
        element.addEventListener('click', (e) => {
            elem.textContent = element.textContent;
            list.classList.remove('dropdown__list_active');
            e.preventDefaulft();
        });
    });
});