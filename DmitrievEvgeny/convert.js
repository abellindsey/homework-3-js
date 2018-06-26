var inputHash = {
	name: 'Jeremy',
	age: 24,
	role: 'Software Engineer',
};

var resArr = [];
var resArr2 = [];
var twoDimArr = [];

function convert(hash) {

	for (var key in hash) {
		resArr.push(key);
	}

	resArr.forEach(function (item, i, arr) {
		resArr2[i] = resArr[i] + ' : ' + inputHash[item];
	})
	for (var i = 0; i < resArr2.length; i++) {
		twoDimArr[i] = [];
		twoDimArr[i][0] = resArr2[i];

	}

}
convert(inputHash);
console.log(twoDimArr);
