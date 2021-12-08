document.getElementById("nname").innerHTML = localStorage.getItem('name');
var mark = parseInt(localStorage.getItem('score')); // Баллы
document.getElementById("res_marks").innerHTML = mark + " баллов";

var a = 0; // счетчик

var elem = [];
elem[0] = document.getElementById('img0');
elem[1] = document.getElementById('img1');
elem[2] = document.getElementById('img2');
elem[3] = document.getElementById('img3');
elem[4] = document.getElementById('img4');
elem[5] = document.getElementById('img5');
elem[6] = document.getElementById('img6');
elem[7] = document.getElementById('img7');
elem[8] = document.getElementById('img8');

var area = [];
area[0] = document.getElementById('n0');
area[1] = document.getElementById('n1');
area[2] = document.getElementById('n2');
area[3] = document.getElementById('n3');
area[4] = document.getElementById('n4');
area[5] = document.getElementById('n5');
area[6] = document.getElementById('n6');
area[7] = document.getElementById('n7');
area[8] = document.getElementById('n8');

var area_img = [];
area_img[0] = document.getElementById('u0');
area_img[1] = document.getElementById('u1');
area_img[2] = document.getElementById('u2');
area_img[3] = document.getElementById('u3');
area_img[4] = document.getElementById('u4');
area_img[5] = document.getElementById('u5');
area_img[6] = document.getElementById('u6');
area_img[7] = document.getElementById('u7');
area_img[8] = document.getElementById('u8');


for (let el of elem) el.ondragstart = drag;
for (let el of area) {
	el.ondragover = overr;
	el.ondrop = drop;
}
function overr(event) {
	console.log(event.target.id);
	if (event.target.id.includes("u") == true) return true;
	// разрешение на перетаскивание
	event.preventDefault();

}
function drag(event) {
	event.dataTransfer.setData('id', event.target.id);
}
function drop(event) {
	let itemId = event.dataTransfer.getData('id');
	let img = document.getElementById(itemId).src;
	let t = parseInt(event.target.id.substr(1, 1));
	area_img[t].src = img;
	document.getElementById(itemId).style.visibility = "hidden";
	a++;
	if (a == 9) check();
}
// Проверка ответов
function check() {
	if (area_img[0].src == elem[3].src &&
		area_img[1].src == elem[6].src &&
		area_img[2].src == elem[0].src &&
		area_img[3].src == elem[7].src &&
		area_img[4].src == elem[4].src &&
		area_img[5].src == elem[1].src &&
		area_img[6].src == elem[2].src &&
		area_img[7].src == elem[8].src &&
		area_img[8].src == elem[5].src) {
		good();
	}
	else bad();
}

var ball = 0;

// Когда все правильно
function good() {
	ball = 30;
	if (mark >= 60) {
		document.getElementById("win_good").style.visibility = "visible";
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		localStorage.setItem('score', mark);
	}
	else {
		document.getElementById("win_good").style.visibility = "visible";
		mark += 30;
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		localStorage.setItem('score', mark);
	}
}
// Когда неправильно
function bad() {
	document.getElementById("win_bed").style.visibility = "visible";
	document.getElementById("mark_bed").innerHTML = "+ " + 0 + " баллов";
}

// Таймер
let time = 45; // Время в секундах
setInterval(updateCountdown, 1000);

function updateCountdown() {
	if (time >= 0) {
		const minutes = Math.floor(time / 60);
		let seconds = time % 60;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;
		time--;
	}
	else if (ball == 30 || e == 1) {
		time = -1;
	}
	else {
		bad();
	}
}

var e = 0;
function exit() {
	document.getElementById("win_bed").style.visibility = 'hidden';
	document.getElementById("win_good").style.visibility = 'hidden';
	document.getElementById("win_exit").style.visibility = 'visible';
	if (ball != 0 || mark == 60)
		document.getElementById("num_level").innerHTML = "Вы прошли 3 уровня из 5";
	else document.getElementById("num_level").innerHTML = "Вы прошли 2 уровня из 5";
	document.getElementById("all_ball").innerHTML = "Ваш результат: " + mark + " баллов";
	e = 1;
}