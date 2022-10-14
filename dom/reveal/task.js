function viewOnScroll() {


    let isInViewport = function(element) {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        return elementTop < viewportHeight ? true : false;
    };
    const divAll = Array.from(document.querySelectorAll('div.reveal'));
    for (let i = 0; i < divAll.length; i++) {
        const div = divAll[i];

        if (isInViewport(div) & div.getBoundingClientRect().top > 0) {
            div.classList.add('reveal_active');
        } else {
            div.classList.remove('reveal_active');
        }
    }
}
document.addEventListener('scroll', viewOnScroll);