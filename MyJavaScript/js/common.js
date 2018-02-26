var header = document.getElementsByTagName("header")[0];
var section = document.getElementsByTagName("section")[0];
var footer = document.getElementsByTagName("footer")[0];

// 获取页面之间跳转时传递的参数
function getArgumentsByHref(href) {
	var arg = href.split('?')[1].split('&');
	var argJSON = {};
	for (var i = 0;i < arg.length;i++) {
		var keys = arg[i].split('=')[0];
		var value = arg[i].split('=')[1];
		argJSON[keys] = value;
	}
	return argJSON;
}