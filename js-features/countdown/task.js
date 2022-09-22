//Задача 1
const addText = function() {
	const timerCountdown = document.getElementById('timer');
	timerCountdown.textContent -= 1;
	if (timerCountdown.textContent === '0'){
		clearInterval(clearTime);
		setTimeout(() => {
			window.alert('Вы победили в конкурсе!')}, 1000)
	}
}

let clearTime = setInterval(addText, 1000);
