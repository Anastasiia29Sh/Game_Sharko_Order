document.getElementById("nname").innerHTML = localStorage.getItem('name');
var mark = parseInt(localStorage.getItem('score')); // Баллы
document.getElementById("res_marks").innerHTML = mark + " баллов";

var a = 0; // счетчик

var mas_start_img = [];
mas_start_img[0] = document.getElementById('img0');
mas_start_img[1] = document.getElementById('img1');
mas_start_img[2] = document.getElementById('img3');
mas_start_img[3] = document.getElementById('img5');
mas_start_img[4] = document.getElementById('img6');
mas_start_img[5] = document.getElementById('img10');
mas_start_img[6] = document.getElementById('img11');
mas_start_img[7] = document.getElementById('img13');

var mas_end_img = [];
mas_end_img[0] = document.getElementById('u0');
mas_end_img[1] = document.getElementById('u1');
mas_end_img[2] = document.getElementById('u2');
mas_end_img[3] = document.getElementById('u3');
mas_end_img[4] = document.getElementById('u4');
mas_end_img[5] = document.getElementById('u5');
mas_end_img[6] = document.getElementById('u6');
mas_end_img[7] = document.getElementById('u7');


function picture0() {

	let img = document.getElementById('img0').src;
	mas_end_img[a].src = img;
	document.getElementById("pic0").style.visibility = "hidden";
	a++;
	if (a == 8) check();

	// document.getElementById("n" + a).style.marginTop = -290 + 'px';
	// mas_end_img[a].style.width = 160 + 'px';
}
function picture1() {
	let img = document.getElementById('img1').src;
	mas_end_img[a].src = img;
	document.getElementById("pic1").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture2() {
	let img = document.getElementById('img2').src;
	mas_end_img[a].src = img;
	document.getElementById("pic2").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture3() {
	let img = document.getElementById('img3').src;
	mas_end_img[a].src = img;
	document.getElementById("pic3").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture4() {
	let img = document.getElementById('img4').src;
	mas_end_img[a].src = img;
	document.getElementById("pic4").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture5() {
	let img = document.getElementById('img5').src;
	mas_end_img[a].src = img;
	document.getElementById("pic5").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture6() {
	let img = document.getElementById('img6').src;
	mas_end_img[a].src = img;
	document.getElementById("pic6").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture7() {
	let img = document.getElementById('img7').src;
	mas_end_img[a].src = img;
	document.getElementById("pic7").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture8() {
	let img = document.getElementById('img8').src;
	mas_end_img[a].src = img;
	document.getElementById("pic8").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture9() {
	let img = document.getElementById('img9').src;
	mas_end_img[a].src = img;
	document.getElementById("pic9").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture10() {
	let img = document.getElementById('img10').src;
	mas_end_img[a].src = img;
	document.getElementById("pic10").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture11() {
	let img = document.getElementById('img11').src;
	mas_end_img[a].src = img;
	document.getElementById("pic11").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture12() {
	let img = document.getElementById('img12').src;
	mas_end_img[a].src = img;
	document.getElementById("pic12").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture13() {
	let img = document.getElementById('img13').src;
	mas_end_img[a].src = img;
	document.getElementById("pic13").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}
function picture14() {
	let img = document.getElementById('img14').src;
	mas_end_img[a].src = img;
	document.getElementById("pic14").style.visibility = "hidden";
	a++;
	if (a == 8) check();
}

// Проверка ответов
function check() {
	if (mas_end_img[0].src == mas_start_img[4].src &&
		mas_end_img[1].src == mas_start_img[0].src &&
		mas_end_img[2].src == mas_start_img[7].src &&
		mas_end_img[3].src == mas_start_img[2].src &&
		mas_end_img[4].src == mas_start_img[1].src &&
		mas_end_img[5].src == mas_start_img[3].src &&
		mas_end_img[6].src == mas_start_img[6].src &&
		mas_end_img[7].src == mas_start_img[5].src) {
		good();
	}
	else bad();
}

var ball = 0;

// Когда все правильно
function good() {
	ball = 50;
	if (mark >= 150) {
		document.getElementById("win_good").style.visibility = "visible";
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		document.getElementById("all_res").innerHTML += mark;
		localStorage.setItem('score', mark);
	}
	else {
		document.getElementById("win_good").style.visibility = "visible";
		mark += 50;
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		document.getElementById("all_res").innerHTML += mark;
		localStorage.setItem('score', mark);
	}
}
// Когда неправильно
function bad() {
	document.getElementById("win_bed").style.visibility = "visible";
	document.getElementById("mark_bed").innerHTML = "+ " + ball + " баллов";
}

// Таймер
let time = 50; // Время в секундах
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
	else if (ball == 50 || e == 1) {
		time = -1;
	}
	else {
		bad();
		// блокировка нажатия кнопки
		document.getElementById("pic0").disabled = true;
		document.getElementById("pic1").disabled = true;
		document.getElementById("pic2").disabled = true;
		document.getElementById("pic3").disabled = true;
		document.getElementById("pic4").disabled = true;
		document.getElementById("pic5").disabled = true;
		document.getElementById("pic6").disabled = true;
		document.getElementById("pic7").disabled = true;
		document.getElementById("pic8").disabled = true;
		document.getElementById("pic9").disabled = true;
		document.getElementById("pic10").disabled = true;
		document.getElementById("pic11").disabled = true;
		document.getElementById("pic12").disabled = true;
		document.getElementById("pic13").disabled = true;
	}
}

var e = 0;
function exit() {
	document.getElementById("win_bed").style.visibility = 'hidden';
	document.getElementById("win_good").style.visibility = 'hidden';
	document.getElementById("win_exit").style.visibility = 'visible';
	document.getElementById("num_level").innerHTML = "Вы прошли 4 уровня из 5";
	document.getElementById("all_ball").innerHTML = "Ваш результат: " + mark + " баллов";
	e = 1;
}