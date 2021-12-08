function start(start) {
	var Name = document.getElementById("name").value;
	localStorage.setItem('name', Name);
	localStorage.setItem('score', 0);

	if (Name != "") {
		document.getElementById("steps").style.visibility = 'visible';
		document.getElementById("input").style.visibility = 'hidden';
		document.getElementById("mist").style.visibility = 'hidden';
	}
	else document.getElementById("mist").style.visibility = 'visible';

	if (localStorage.getItem('score') == 0) {
		document.getElementById("level1").disabled = false;
		document.getElementById("level1").style.fontWeight = "bolder";
	}
	if (localStorage.getItem('score') == 10) {
		document.getElementById("level2").disabled = false;
		document.getElementById("level2").style.fontWeight = "bolder";
	}
	if (localStorage.getItem('score') == 30) {
		document.getElementById("level3").disabled = false;
		document.getElementById("level3").style.fontWeight = "bolder";
	}
	if (localStorage.getItem('score') == 60) {
		document.getElementById("level4").disabled = false;
		document.getElementById("level4").style.fontWeight = "bolder";
	}
	if (localStorage.getItem('score') == 100) {
		document.getElementById("level5").disabled = false;
		document.getElementById("level5").style.fontWeight = "bolder";
	}
}

document.getElementById("name").value = localStorage.getItem('input');
