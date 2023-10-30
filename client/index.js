const finger_1 = document.getElementById("finger_1");
const finger_2 = document.getElementById("finger_2");
const finger_3 = document.getElementById("finger_3");
const finger_4 = document.getElementById("finger_4");
const finger_5 = document.getElementById("finger_5");

fetch("http://143.110.254.118:3001/")
	.then(response => response.json())
	.then(data => {
		finger_1.innerText = data.finger_one;
		finger_2.innerText = data.finger_two;
		finger_3.innerText = data.finger_three;
		finger_4.innerText = data.finger_four;
		finger_5.innerText = data.finger_five;
	});


window.setInterval(() => {window.location.reload()}, 3000);