function add(a, b) {
	return a + b;
}
function multiple(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}

// innerText 를 숫자와 연산으로 구분
function divStr(str) {
	// str = display.innerText
	const strLen = str.length;
	let numbers = [];
	let operators = [];
	let i = 0;
	let k = 0; //숫자의 시작점
	for (i = 0; i < strLen; i++) {
		if (!Number(str[i]) && str[i] !== "." && str[i] !== "0") {
			// .이 아닌 !numbers 를 발견하면 그 전까지 숫자로 저장
			numbers.push(str.slice(k, i));
			operators.push(str[i]);
			k = i + 1;
		}
	}
	numbers.push(str.slice(k, i));
	return { numbers, operators };
}

export default function calculating(btnText) {
	let newStr = divStr(btnText);
	let { operators, numbers } = newStr;
	let operLen = operators.length;
	let i = 0;

	for (; i < operLen; i++) {
		if (!numbers[i + 1]) {
			break;
		}
		if (operators[i] === "x") {
			numbers[i] = multiple(numbers[i], numbers[i + 1]);
			numbers[i + 1] = null;
			operators[i] = null;
		} else if (operators[i] === "/") {
			numbers[i] = divide(numbers[i], numbers[i + 1]);
			numbers[i + 1] = null;
			operators[i] = null;
		}
	}

	numbers = numbers.filter((num, i) => num !== null);
	operators = operators.filter((operator, i) => operator !== null);

	let result = numbers[0];
	operLen = operators.length;
	for (i = 0; i < operLen; i++) {
		if (!numbers[i + 1]) {
			break;
		}
		result = add(
			parseFloat(result),
			parseFloat(`${operators[i]}${numbers[i + 1]}`)
		);
	}
	return Math.round(result * 10000) / 10000;
}
