var mark = parseInt(localStorage.getItem('score')); // Баллы
document.getElementById("nname").innerHTML = localStorage.getItem('name');
document.getElementById("res_marks").innerHTML = mark + " баллов";

var mas = [];
mas[0] = document.getElementById("num0");
mas[1] = document.getElementById("num1");
mas[2] = document.getElementById("num2");
mas[3] = document.getElementById("num3");
mas[4] = document.getElementById("num4");
mas[5] = document.getElementById("num5");
mas[6] = document.getElementById("num6");
mas[7] = document.getElementById("num7");
mas[8] = document.getElementById("num8");
mas[9] = document.getElementById("num9");
mas[10] = document.getElementById("num10");

var res = [];
res[0] = document.getElementById("u0");
res[1] = document.getElementById("u1");
res[2] = document.getElementById("u2");
res[3] = document.getElementById("u3");
res[4] = document.getElementById("u4");
res[5] = document.getElementById("u5");
res[6] = document.getElementById("u6");
res[7] = document.getElementById("u7");
res[8] = document.getElementById("u8");
res[9] = document.getElementById("u9");
res[10] = document.getElementById("u10");

var constTop = 105 + 'px';
var constLeft = 150 + 'px';

function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

// счетчик
var a = 0;

setInterval(function () {
	// Получаем случайный ключ массива
	var rand = Math.floor(Math.random() * mas.length);
	var elem = mas[rand];

	var j = randomInteger(20, 800);
	var right = elem.offsetLeft;
	elem.style.left = right + j + 'px';

	var delay = 55, i = 0;
	var startTimer = function () {
		var bottom = elem.offsetTop;

		if (i < 30) {
			elem.style.opacity = "1";
			elem.style.top = bottom + 10 + 'px';
		}
		else {
			elem.style.top = constTop;
			elem.style.left = constLeft;
			elem.style.opacity = "0";
			clearInterval(timer);
		}
		i++;
	};
	var timer = setInterval(startTimer, delay);
}, 1400);


function number0(number0) {
	let img = document.getElementById('img0').src;
	res[a].src = img;
	document.getElementById("num0").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num0'));
	mas.splice(index, 1); // начиная с позиции i, удалить 1 элемент
	a++;
	if (a == 11) check();
}
function number1(number1) {
	let img = document.getElementById('img1').src;
	res[a].src = img;
	document.getElementById("num1").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num1'));
	mas.splice(index, 1);
	a++;
	if (a == 11) check();
}
function number2(number2) {
	let img = document.getElementById('img2').src;
	res[a].src = img;
	document.getElementById("num2").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num2'));
	mas.splice(index, 1);
	a++;
	if (a == 11) check();
}
function number3(number3) {
	let img = document.getElementById('img3').src;
	res[a].src = img;
	document.getElementById("num3").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num3'));
	mas.splice(index, 1); // начиная с позиции i, удалить 1 элемент
	a++;
	if (a == 11) check();
}
function number4(number4) {
	let img = document.getElementById('img4').src;
	res[a].src = img;
	document.getElementById("num4").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num4'));
	mas.splice(index, 1);
	a++;
	if (a == 11) check();
}
function number5(number5) {
	let img = document.getElementById('img5').src;
	res[a].src = img;
	document.getElementById("num5").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num5'));
	mas.splice(index, 1); // начиная с позиции i, удалить 1 элемент
	a++;
	if (a == 11) check();
}
function number6(number6) {
	let img = document.getElementById('img6').src;
	res[a].src = img;
	document.getElementById("num6").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num6'));
	mas.splice(index, 1);
	a++;
	if (a == 11) check();
}
function number7(number7) {
	let img = document.getElementById('img7').src;
	res[a].src = img;
	document.getElementById("num7").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num7'));
	mas.splice(index, 1); // начиная с позиции i, удалить 1 элемент
	a++;
	if (a == 11) check();
}
function number8(number8) {
	let img = document.getElementById('img8').src;
	res[a].src = img;
	document.getElementById("num8").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num8'));
	mas.splice(index, 1);
	a++;
	if (a == 11) check();
}
function number9(number9) {
	let img = document.getElementById('img9').src;
	res[a].src = img;
	document.getElementById("num9").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num9'));
	mas.splice(index, 1); // начиная с позиции i, удалить 1 элемент
	a++;
	if (a == 11) check();
}
function number10(number10) {
	let img = document.getElementById('img10').src;
	res[a].src = img;
	document.getElementById("num10").style.visibility = "hidden";
	let index = mas.indexOf(document.getElementById('num10'));
	mas.splice(index, 1);
	a++;
	if (a == 11) check();
}

// Проверка ответов
function check() {
	if (res[0].src == document.getElementById('img0').src &&
		res[1].src == document.getElementById('img1').src &&
		res[2].src == document.getElementById('img2').src &&
		res[3].src == document.getElementById('img3').src &&
		res[4].src == document.getElementById('img4').src &&
		res[5].src == document.getElementById('img5').src &&
		res[6].src == document.getElementById('img6').src &&
		res[7].src == document.getElementById('img7').src &&
		res[8].src == document.getElementById('img8').src &&
		res[9].src == document.getElementById('img9').src &&
		res[10].src == document.getElementById('img10').src) {
		good();
	}
	else bad();
}
var ball = 0;

// Когда все правильно
function good() {
	ball = 20;
	if (mark >= 30) {
		document.getElementById("win_good").style.visibility = "visible";
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		localStorage.setItem('score', mark);
	}
	else {
		document.getElementById("win_good").style.visibility = "visible";
		mark += 20;
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
let time = 180; // Время в секундах
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
	else if (ball == 20 || e == 1) {
		time = -1;
	}
	else {
		bad();
		// блокировка нажатия кнопки
		document.getElementById("num0").disabled = true;
		document.getElementById("num1").disabled = true;
		document.getElementById("num2").disabled = true;
		document.getElementById("num3").disabled = true;
		document.getElementById("num4").disabled = true;
		document.getElementById("num5").disabled = true;
		document.getElementById("num6").disabled = true;
		document.getElementById("num7").disabled = true;
		document.getElementById("num8").disabled = true;
		document.getElementById("num9").disabled = true;
		document.getElementById("num10").disabled = true;
	}
}

var e = 0;
function exit() {
	document.getElementById("win_bed").style.visibility = 'hidden';
	document.getElementById("win_good").style.visibility = 'hidden';
	document.getElementById("win_exit").style.visibility = 'visible';
	if (ball != 0 || mark == 30)
		document.getElementById("num_level").innerHTML = "Вы прошли 2 уровня из 5";
	else document.getElementById("num_level").innerHTML = "Вы прошли 1 уровень из 5";
	document.getElementById("all_ball").innerHTML = "Ваш результат: " + mark + " баллов";
	e = 1;
}




