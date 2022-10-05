const prev = document.querySelector('.slider__arrow_prev'),
      next = document.querySelector('.slider__arrow_next');
    
const slides = document.querySelectorAll('.slider__item');
let i = 0;
prev.onclick = function(){
   slides[i].className = 'slider__item';
    i = i - 1;
    if( i < 0){
      i = slides.length - 1;  
    }
    slides[i].className = "slider__item_active";
};

next.onclick = function(){
    slides[i].className = "slider__item";
    i = i + 1; 
    if( i >= slides.length){
      i = 0;  
    }
    slides[i].className = "slider__item_active";
}