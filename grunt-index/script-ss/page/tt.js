define(function(require,exports){
	var t2 = require('./t2');
	var c = 0;
	function add(a,b){
		a = a + c;
		return a+b;
	}
	add(1,2);

	
	console.log('tt');
});