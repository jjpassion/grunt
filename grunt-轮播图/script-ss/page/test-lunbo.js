define(function(require,exports){
	var $ = require('../app/jquery')
	var slide = require('../app/slide')
	
	var	unit = '.top_bnr .banner li';
	slide.bind({
		'unit' : unit
		,'btn': '.round .adType a'
		,'transition' : 'fade'
		,'btnpn': '.bnr_btn'  //左右按钮
		,'toprev':'.bnr_btn_left'
		,'tonext':'.bnr_btn_right',
		cbk: function(el) {
			if(typeof el == 'number') {
				el = $(unit).eq(el);
			}
		}
	})

	alert(22)

	// $('.banner,.bnr_btn').hover(function(){
	// 	$('.bnr_btn_wrap .bnr_btn').show();
	// },function(){
	// 	$('.bnr_btn_wrap .bnr_btn').hide();
	// });


	
	// alert(111)
});