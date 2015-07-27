/**
 * 
 */
define(function(require,exports){
	var $ = require('jquery');
	var onWindowSizeCng = [];
	var delay;

	function resizeFn(){
		delay && clearTimeout(delay);
		delay = window.setTimeout(function(){
			var j = onWindowSizeCng.length;
			for (var i = 0 ; i < j; i++) onWindowSizeCng[i]();
			} , 240);
		};


	/**
	 * $.browser.msie' 为空或不是对象，
	 * 这个是jQuery错误出现这个错误，是因为升级了jQuery版本，
	 * 从1.9以前升级到1.9以后，因为$.browser.msie在1.9以后的jQuery中不存在了，
	 * 所以报错
	 */
	if( $.browser.msie ){
		var mask = document.createElement("div");
		mask.style.cssText = "width:100%;height:0px;position:absolute;bottom:0px;left:0px;overflow:hidden";
		document.body.appendChild(mask);
		mask.onresize = resizeFn; 
	} else {
		window.onresize = resizeFn;	
	}

	exports.bind = function(f) {
		onWindowSizeCng.push(f);		
    };
});

/*});*/