function reverse(str) {
	var newArr = [];
	var resArr = str.split(' ');
	
	console.log(resArr);
	
	resArr.forEach(function (item, i, arr){
		newArr[i] = item.split('').reverse().join('');
	})
	console.log(newArr.join(' '));
}

reverse("Hello my dear friend!")
