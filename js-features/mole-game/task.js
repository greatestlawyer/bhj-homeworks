//Задача 3
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let countDead = 0;
let countLost = 0;


for (let i = 0; i < 10; i++) {

hole.addEventListener('click', function() {
	if (hole.classList.contains('hole_has-mole')) {
	countDead++;
	dead.textContent = countDead;
} else {
	countLost++;
	lost.textContent = countLost;
}
});
}
