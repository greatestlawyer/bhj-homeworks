const imgCookie = document.getElementById('cookie');

const click = document.getElementById('clicker__counter');

imgCookie.onclick = function() {
	click.textContent =  Number(click.textContent) + 1;
	imgCookie.width === 200 ? imgCookie.width = 250 : imgCookie.width = 200;
}


