
exports.fizzbuzz = function(i) {
		var output = '';
		if (i % 3 == 0) {output += 'fizz';}
		if (i % 5 == 0) {output += 'buzz';}
		if (output == '') {output += i.toString();}
		return output;
	};
