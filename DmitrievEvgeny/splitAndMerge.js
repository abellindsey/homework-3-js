function splitAndMerge(str, sp) {
	var wordsArr = str.split(' ');
	var splittedWords;
	var jointArr = [];
	wordsArr.forEach(function (item, i, arr) {
		splittedWords = item.split('');

		splittedWords.forEach(function (item, i, arr) {
			jointArr.push(item);
		});


	});

	console.log(wordsArr);
	console.log(splittedWords);
	console.log(jointArr.join(sp));

}
splitAndMerge('My name is Jane', ' ');