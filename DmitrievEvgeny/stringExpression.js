function stringExpression(str) {
	var inputArr = str.split('');
	var resArr1 = [];
	var resArr2 = [];
	console.log(inputArr);

	for (let i = 0; i < inputArr.length; i++) {
		if (inputArr[i] !== NaN & inputArr[i] !== inputArr[i - 1]) {
			resArr1.push(inputArr[i]);
		} else continue;
	};
	for (var i = 0; i < resArr1.length; i++) {
		if (isNaN(resArr1[i]))
			continue;
		else {
			for (var a = 0; a < +resArr1[i]; a++) {
				resArr2.push(resArr1[i + 1]);
			}
		}
		console.log(resArr2.toString().replace(/,/g, ""));
	}
}
stringExpression("22222222A4w555C7z");