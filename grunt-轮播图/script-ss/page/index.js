define(function(require,exports){
	var $ = require('../app/jquery')

	var oForm = $('#form_search')
	var oInput = oForm.children('.ipt')

	oForm.on('submit',function(e){
		e.preventDefault();
		var v = $.trim(oInput[0].value)
		if(v){

			alert(v); return;
			// 需要跳转的搜索页面
			window.location.assign('http://www.baidu.com?key='+ encodeURIComponent(v) )
		}else{
			alert('请输入搜索关键词')
		}
	})

});