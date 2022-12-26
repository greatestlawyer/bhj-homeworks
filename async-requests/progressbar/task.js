const submitFile = document.getElementById('form');
const progress = document.getElementById('progress');

let i = 0;

function submitForm(e) {
    e.preventDefault();
    const form = new FormData(submitFile);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.addEventListener('progress', loaderForm);
    xhr.send(form);
}

function loaderForm() {
    if (this.status === 200) {
        i = i + 1;
        progress.value = i / 20;
    }
}

form.addEventListener('submit', submitForm);