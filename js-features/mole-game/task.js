//Задача 3
const holeOne = document.getElementById('hole1');
const holeTwo = document.getElementById('hole2');
const holeThree = document.getElementById('hole3');
const holeFour = document.getElementById('hole4');
const holeFive = document.getElementById('hole5');
const holeSix = document.getElementById('hole6');
const holeSeven = document.getElementById('hole7');
const holeEight = document.getElementById('hole8');
const holeNine = document.getElementById('hole9');

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let countDead = 0;
let countLost = 0;

const arrayHoles = [];
arrayHoles.push(holeOne, holeTwo, holeThree, holeFour, holeFive, holeSix, holeSeven, holeEight, holeNine);

for (let i = 0; i < arrayHoles.length; i++) {
  return arrayHoles[i].addEventListener('click', function() {
    if (hole.classList.contains('hole_has-mole')) {
      countDead++;
      dead.textContent = countDead;
    } else {
        countLost++;
	    lost.textContent = countLost;
    }
  }
  if (countDead === '5'){
    dead.textContent = countDead;
    alert('Поражение!');
    countDead = 0;
  } else if (countLost === '10'){
      lost.textContent = countLost;
      alert('Победа!');
      countLost = 0;
  }
}