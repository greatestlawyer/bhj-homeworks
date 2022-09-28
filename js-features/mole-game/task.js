//Задача 3
const holes = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let countDead = 0;
let countLost = 0;

for (let i = 0; i < holes.length; i++) {
  holes[i].addEventListener('click', function() {
    if (holes[i].classList.contains('hole_has-mole')) {
      countDead++;
      dead.textContent = countDead;
    } else {
        countLost++;
	      lost.textContent = countLost;
    }
    if (countLost === 5){
      lost.textContent = countLost;
      alert('Поражение!');
      countLost = 0;
      countDead = 0;
  } else if (countDead === 10){
      dead.textContent = countDead;
      alert('Победа!');
      countDead = 0;
      countLost = 0;
    }
  });
}


