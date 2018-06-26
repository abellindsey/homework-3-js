
function toCamCase(str) {
	let inputStr = str.split(/-|_/)
	let resStr;
	for (let i = 1; i < inputStr.length; i++) {
		inputStr[i] = inputStr[i][0].toUpperCase() + inputStr[i].slice(1).toLowerCase();
	}
	return resStr = inputStr.join("");
}
console.log(toCamCase("_My-Name_is-jane"))