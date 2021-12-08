document.getElementById("nname").innerHTML = localStorage.getItem('name');
var mark = parseInt(localStorage.getItem('score')); // Баллы
document.getElementById("res_marks").innerHTML = mark + " баллов";

var mas_let = [];
mas_let[0] = document.getElementById("img0");
mas_let[1] = document.getElementById("img1");
mas_let[2] = document.getElementById("img2");
mas_let[3] = document.getElementById("img3");
mas_let[4] = document.getElementById("img4");
mas_let[5] = document.getElementById("img5");
mas_let[6] = document.getElementById("img6");
mas_let[7] = document.getElementById("img7");
mas_let[8] = document.getElementById("img8");
mas_let[9] = document.getElementById("img9");
mas_let[10] = document.getElementById("img10");
mas_let[11] = document.getElementById("img11");
mas_let[12] = document.getElementById("img12");
mas_let[13] = document.getElementById("img13");
mas_let[14] = document.getElementById("img14");
mas_let[15] = document.getElementById("img15");
mas_let[16] = document.getElementById("img16");
mas_let[17] = document.getElementById("img17");
mas_let[18] = document.getElementById("img18");
mas_let[19] = document.getElementById("img19");
mas_let[20] = document.getElementById("img20");
mas_let[21] = document.getElementById("img21");
mas_let[22] = document.getElementById("img22");
mas_let[23] = document.getElementById("img23");
mas_let[24] = document.getElementById("img24");
mas_let[25] = document.getElementById("img25");
mas_let[26] = document.getElementById("img26");
mas_let[27] = document.getElementById("img27");
mas_let[28] = document.getElementById("img28");
mas_let[29] = document.getElementById("img29");
mas_let[30] = document.getElementById("img30");
mas_let[31] = document.getElementById("img31");
mas_let[32] = document.getElementById("img32");

var mas_res = [];
mas_res[0] = document.getElementById("u0");
mas_res[1] = document.getElementById("u1");
mas_res[2] = document.getElementById("u2");
mas_res[3] = document.getElementById("u3");
mas_res[4] = document.getElementById("u4");
mas_res[5] = document.getElementById("u5");
mas_res[6] = document.getElementById("u6");
mas_res[7] = document.getElementById("u7");
mas_res[8] = document.getElementById("u8");
mas_res[9] = document.getElementById("u9");
mas_res[10] = document.getElementById("u10");
mas_res[11] = document.getElementById("u11");
mas_res[12] = document.getElementById("u12");
mas_res[13] = document.getElementById("u13");
mas_res[14] = document.getElementById("u14");
mas_res[15] = document.getElementById("u15");
mas_res[16] = document.getElementById("u16");
mas_res[17] = document.getElementById("u17");
mas_res[18] = document.getElementById("u18");
mas_res[19] = document.getElementById("u19");
mas_res[20] = document.getElementById("u20");
mas_res[21] = document.getElementById("u21");
mas_res[22] = document.getElementById("u22");
mas_res[23] = document.getElementById("u23");
mas_res[24] = document.getElementById("u24");
mas_res[25] = document.getElementById("u25");
mas_res[26] = document.getElementById("u26");
mas_res[27] = document.getElementById("u27");
mas_res[28] = document.getElementById("u28");
mas_res[29] = document.getElementById("u29");
mas_res[30] = document.getElementById("u30");
mas_res[31] = document.getElementById("u31");
mas_res[32] = document.getElementById("u32");


window.onload = function () {
	for (let el of mas_let) {
		// var image = document.querySelectorAll("div.display img");
		var maxWidth = "100px";
		var maxheight = "100px";
		var minWidth = "80px";
		var minheight = "80px";
		el.onmouseover = function () {
			this.style.width = maxWidth;
			this.style.height = maxheight;
		};
		el.onmouseout = function () {
			this.style.width = minWidth;
			this.style.height = minheight;
		};
	};
}

var a = 0;

function letter1() {
	mas_res[a].src = mas_let[0].src;
	document.getElementById("let1").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter2() {
	mas_res[a].src = mas_let[1].src;
	document.getElementById("let2").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter3() {
	mas_res[a].src = mas_let[2].src;
	document.getElementById("let3").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter4() {
	mas_res[a].src = mas_let[3].src;
	document.getElementById("let4").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter5() {
	mas_res[a].src = mas_let[4].src;
	document.getElementById("let5").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter6() {
	mas_res[a].src = mas_let[5].src;
	document.getElementById("let6").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter7() {
	mas_res[a].src = mas_let[6].src;
	document.getElementById("let7").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter8() {
	mas_res[a].src = mas_let[7].src;
	document.getElementById("let8").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter9() {
	mas_res[a].src = mas_let[8].src;
	document.getElementById("let9").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter10() {
	mas_res[a].src = mas_let[9].src;
	document.getElementById("let10").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter11() {
	mas_res[a].src = mas_let[10].src;
	document.getElementById("let11").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter12() {
	mas_res[a].src = mas_let[11].src;
	document.getElementById("let12").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter13() {
	mas_res[a].src = mas_let[12].src;
	document.getElementById("let13").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter14() {
	mas_res[a].src = mas_let[13].src;
	document.getElementById("let14").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter15() {
	mas_res[a].src = mas_let[14].src;
	document.getElementById("let15").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter16() {
	mas_res[a].src = mas_let[15].src;
	document.getElementById("let16").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter17() {
	mas_res[a].src = mas_let[16].src;
	document.getElementById("let17").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter18() {
	mas_res[a].src = mas_let[17].src;
	document.getElementById("let18").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter19() {
	mas_res[a].src = mas_let[18].src;
	document.getElementById("let19").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter20() {
	mas_res[a].src = mas_let[19].src;
	document.getElementById("let20").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter21() {
	mas_res[a].src = mas_let[20].src;
	document.getElementById("let21").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter22() {
	mas_res[a].src = mas_let[21].src;
	document.getElementById("let22").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter23() {
	mas_res[a].src = mas_let[22].src;
	document.getElementById("let23").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter24() {
	mas_res[a].src = mas_let[23].src;
	document.getElementById("let24").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter25() {
	mas_res[a].src = mas_let[24].src;
	document.getElementById("let25").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter26() {
	mas_res[a].src = mas_let[25].src;
	document.getElementById("let26").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter27() {
	mas_res[a].src = mas_let[26].src;
	document.getElementById("let27").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter28() {
	mas_res[a].src = mas_let[27].src;
	document.getElementById("let28").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter29() {
	mas_res[a].src = mas_let[28].src;
	document.getElementById("let29").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter30() {
	mas_res[a].src = mas_let[29].src;
	document.getElementById("let30").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter31() {
	mas_res[a].src = mas_let[30].src;
	document.getElementById("let31").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter32() {
	mas_res[a].src = mas_let[31].src;
	document.getElementById("let32").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}
function letter33() {
	mas_res[a].src = mas_let[32].src;
	document.getElementById("let33").style.visibility = "hidden";
	a++;
	if (a == 33) check();
}

// Проверка ответов
function check() {
	if (mas_res[0].src == mas_let[11].src &&
		mas_res[1].src == mas_let[18].src &&
		mas_res[2].src == mas_let[20].src &&
		mas_res[3].src == mas_let[10].src &&
		mas_res[4].src == mas_let[19].src &&
		mas_res[5].src == mas_let[30].src &&
		mas_res[6].src == mas_let[31].src &&
		mas_res[7].src == mas_let[5].src &&
		mas_res[8].src == mas_let[14].src &&
		mas_res[9].src == mas_let[6].src &&
		mas_res[10].src == mas_let[0].src &&
		mas_res[11].src == mas_let[15].src &&
		mas_res[12].src == mas_let[17].src &&
		mas_res[13].src == mas_let[21].src &&
		mas_res[14].src == mas_let[7].src &&
		mas_res[15].src == mas_let[12].src &&
		mas_res[16].src == mas_let[8].src &&
		mas_res[17].src == mas_let[22].src &&
		mas_res[18].src == mas_let[26].src &&
		mas_res[19].src == mas_let[1].src &&
		mas_res[20].src == mas_let[24].src &&
		mas_res[21].src == mas_let[13].src &&
		mas_res[22].src == mas_let[28].src &&
		mas_res[23].src == mas_let[25].src &&
		mas_res[24].src == mas_let[2].src &&
		mas_res[25].src == mas_let[9].src &&
		mas_res[26].src == mas_let[27].src &&
		mas_res[27].src == mas_let[32].src &&
		mas_res[28].src == mas_let[29].src &&
		mas_res[29].src == mas_let[23].src &&
		mas_res[30].src == mas_let[4].src &&
		mas_res[31].src == mas_let[3].src &&
		mas_res[32].src == mas_let[16].src) {
		good();
	}
	else bad();
}

var ball = 0;

// Когда все правильно
function good() {
	ball = 40;
	if (mark >= 100) {
		document.getElementById("win_good").style.visibility = "visible";
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		localStorage.setItem('score', mark);
	}
	else {
		document.getElementById("win_good").style.visibility = "visible";
		mark += 40;
		document.getElementById("mark_good").innerHTML = "+ " + ball + " баллов";
		document.getElementById("res_marks").innerHTML = mark + " баллов";
		localStorage.setItem('score', mark);
	}
}
// Когда неправильно
function bad() {
	document.getElementById("win_bed").style.visibility = "visible";
	document.getElementById("mark_bed").innerHTML = 0 + " баллов";
}

// Таймер
let time = 90; // Время в секундах 
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
	else if (ball == 40 || e == 1) {
		time = -1;
	}
	else {
		bad();
		// блокировка нажатия кнопки
		document.getElementById("let1").disabled = true;
		document.getElementById("let2").disabled = true;
		document.getElementById("let3").disabled = true;
		document.getElementById("let4").disabled = true;
		document.getElementById("let5").disabled = true;
		document.getElementById("let6").disabled = true;
		document.getElementById("let7").disabled = true;
		document.getElementById("let8").disabled = true;
		document.getElementById("let9").disabled = true;
		document.getElementById("let10").disabled = true;
		document.getElementById("let11").disabled = true;
		document.getElementById("let12").disabled = true;
		document.getElementById("let13").disabled = true;
		document.getElementById("let14").disabled = true;
		document.getElementById("let15").disabled = true;
		document.getElementById("let16").disabled = true;
		document.getElementById("let17").disabled = true;
		document.getElementById("let18").disabled = true;
		document.getElementById("let19").disabled = true;
		document.getElementById("let20").disabled = true;
		document.getElementById("let21").disabled = true;
		document.getElementById("let22").disabled = true;
		document.getElementById("let23").disabled = true;
		document.getElementById("let24").disabled = true;
		document.getElementById("let25").disabled = true;
		document.getElementById("let26").disabled = true;
		document.getElementById("let27").disabled = true;
		document.getElementById("let28").disabled = true;
		document.getElementById("let29").disabled = true;
		document.getElementById("let30").disabled = true;
		document.getElementById("let31").disabled = true;
		document.getElementById("let32").disabled = true;
		document.getElementById("let33").disabled = true;
	}
}

var e = 0;
function exit() {
	document.getElementById("win_bed").style.visibility = 'hidden';
	document.getElementById("win_good").style.visibility = 'hidden';
	document.getElementById("win_exit").style.visibility = 'visible';
	if (ball != 0 || mark == 100)
		document.getElementById("num_level").innerHTML = "Вы прошли 4 уровня из 5";
	else document.getElementById("num_level").innerHTML = "Вы прошли 3 уровня из 5";
	document.getElementById("all_ball").innerHTML = "Ваш результат: " + mark + " баллов";
	e = 1;
}