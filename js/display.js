const screen = document.querySelector(".screen");

export default function display(btnClass, btnText) {
	switch (btnClass) {
		case "btn-num":
			displayNum(btnText);
			break;
		case "btn-rules":
			displayFtn(btnText);
			break;
		case "btn-abs":
			break;
		case "btn-clear":
			screen.innerText = "";
			break;
		case "btn-equal":
			screen.innerText = eval(screen.innerText);
	}
}
export function displayNum(btnText) {
	const disVal = screen.innerText;
	const lastDisVal = disVal[disVal.length - 1];
	if (lastDisVal === "." && btnText === ".") {
		screen.innerText = disVal.slice(0, disVal.length - 1);
	}
	screen.innerText += btnText;
}

export function displayFtn(btnText) {
	const disVal = screen.innerText;
	const lastDisVal = disVal[disVal.length - 1];

	switch (lastDisVal) {
		case undefined:
			break;
		case "+":
		case "-":
		case "x":
		case "/":
			screen.innerText = disVal.slice(0, disVal.length - 1);
		default:
			screen.innerText += btnText;
	}
}
