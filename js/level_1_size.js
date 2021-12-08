document.getElementById("nname").innerHTML = localStorage.getItem('name');
var mark = parseInt(localStorage.getItem('score')); // Баллы
document.getElementById("res_marks").innerHTML = mark + " баллов";

var a = 0; // счетчик

var mas_start_img = [];
mas_start_img[0] = document.getElementById('img0');
mas_start_img[1] = document.getElementById('img1');
mas_start_img[2] = document.getElementById('img2');
mas_start_img[3] = document.getElementById('img3');
mas_start_img[4] = document.getElementById('img4');
mas_start_img[5] = document.getElementById('img5');
mas_start_img[6] = document.getElementById('img6');

var mas_end_img = [];
mas_end_img[0] = document.getElementById('u0');
mas_end_img[1] = document.getElementById('u1');
mas_end_img[2] = document.getElementById('u2');
mas_end_img[3] = document.getElementById('u3');
mas_end_img[4] = document.getElementById('u4');
mas_end_img[5] = document.getElementById('u5');
mas_end_img[6] = document.getElementById('u6');


function cupcake0() {
	let img = document.getElementById('img0').src;
	mas_end_img[a].src = img;
	document.getElementById("cupc0").style.visibility = "hidden";
	document.getElementById("n" + a).style.marginTop = -290 + 'px';
	mas_end_img[a].style.width = 160 + 'px';
	a++;
	if (a == 7) check();
}
function cupcake1() {
	let img = document.getElementById('img1').src;
	mas_end_img[a].src = img;
	document.getElementById("cupc1").style.visibility = "hidden";
	document.getElementById("n" + a).style.marginLeft = -50 + 'px';
	mas_end_img[a].style.width = 170 + 'px';
	a++;
	if (a == 7) check();
}
function cupcake2() {
	let img = document.getElementById('img2').src;
	mas_end_img[a].src = img;
	document.getElementById("cupc2").style.visibility = "hidden";
	document.getElementById("n" + a).style.marginTop = 40 + 'px';
	document.getElementById("n" + a).style.marginLeft = 20 + 'px';
	mas_end_img[a].style.width = 80 + 'px';
	a++;
	if (a == 7) check();
}
function cupcake3() {
	let img = document.getElementById('img3').src;
	mas_end_img[a].src = img;
	document.getElementById("cupc3").style.visibility = "hidden";
	document.getElementById("n" + a).style.marginTop = -110 + 'px';
	mas_end_img[a].style.width = 160 + 'px';
	a++;
	if (a == 7) check();
}
function cupcake4() {
	let img = document.getElementById('img4').src;
	mas_end_img[a].src = img;
	document.getElementById("cupc4").style.visibility = "hidden";
	document.getElementById("n" + a).style.marginTop = 40 + 'px';
	document.getElementById("n" + a).style.marginLeft = -50 + 'px';
	mas_end_img[a].style.width = 100 + 'px';
	a++;
	if (a == 7) check();
}
function cupcake5() {
	let img = document.getElementById('img5').src;
	mas_end_img[a].src = img;
	document.getElementById("cupc5").style.visibility = "hidden";
	mas_end_img[a].style.width = 100 + 'px';
	a++;
	if (a == 7) check();
}
function cupcake6() {
	let img = document.getElementById('img6').src;
	mas_end_img[a].src = img;
	document.getElementById("cupc6").style.visibility = "hidden";
	document.getElementById("n" + a).style.marginTop = -20 + 'px';
	document.getElementById("n" + a).style.marginLeft = -50 + 'px';
	mas_end_img[a].style.width = 160 + 'px';
	a++;
	if (a == 7) check();
}

// Проверка ответов
function check() {
	if (mas_end_img[0].src == mas_start_img[2].src &&
		mas_end_img[1].src == mas_start_img[4].src &&
		mas_end_img[2].src == mas_start_img[1].src &&
		mas_end_img[3].src == mas_start_img[5].src &&
		mas_end_img[4].src == mas_start_img[6].src &&
		mas_end_img[5].src == mas_start_img[0].src &&
		mas_end_img[6].src == mas_start_img[3].src) {
		good();
	}
	else bad();
}

var ball = 0;

// Когда все правильно
function good() {
	ball = 10;
	if (mark >= 10) {
		document.getElementById("win_good").style.visibility = "visible";
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		localStorage.setItem('score', mark);
	}
	else {
		document.getElementById("win_good").style.visibility = "visible";
		mark += 10;
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		localStorage.setItem('score', mark);
	}
}
// Когда неправильно
function bad() {
	document.getElementById("win_bed").style.visibility = "visible";
	document.getElementById("mark_bed").innerHTML = "+ " + ball + " баллов";
}

// Таймер
let time = 25; // Время в секундах
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
	else if (ball == 10 || e == 1) {
		time = -1;
	}
	else {
		bad();
		// блокировка нажатия кнопки
		document.getElementById("cupc0").disabled = true;
		document.getElementById("cupc1").disabled = true;
		document.getElementById("cupc2").disabled = true;
		document.getElementById("cupc3").disabled = true;
		document.getElementById("cupc4").disabled = true;
		document.getElementById("cupc5").disabled = true;
		document.getElementById("cupc6").disabled = true;
	}
}
var e = 0;
function exit() {
	document.getElementById("win_bed").style.visibility = 'hidden';
	document.getElementById("win_good").style.visibility = 'hidden';
	document.getElementById("win_exit").style.visibility = 'visible';
	if (ball != 0 || mark == 10)
		document.getElementById("num_level").innerHTML = "Вы прошли 1 уровень из 5";
	else document.getElementById("num_level").innerHTML = "Вы прошли 0 уровней из 5";
	document.getElementById("all_ball").innerHTML = "Ваш результат: " + mark + " баллов";
	e = 1;
}




