import calculating from "./calculation.js"; //<<
import display from "./display.js";
const screen = document.querySelector(".display");
const btns = document.querySelector(".btns");

function onClickbtn(event) {
	const btnClass = event.srcElement.classList;
	const btnText = event.srcElement.innerText;

	if (btnClass[1] === "btn-equal") {
		screen.innerText = calculating(screen.innerText);
	} else {
		display(btnClass[1], btnText);
	}
}

btns.addEventListener("click", onClickbtn);
