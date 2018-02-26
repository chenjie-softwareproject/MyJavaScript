var args = getArgumentsByHref(window.location.href);    // 获取通过href传递过来的参数

section.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';

var index = args.number;
document.getElementsByTagName("header")[0].getElementsByClassName("detail")[0].innerHTML = 
	lessonList[index].project[0].text;

document.getElementById("back").addEventListener("touchstart", function() {
	window.location = "index.html";
});
				
section.getElementsByTagName("ul")[0].innerHTML = 
	"<li class='sign item' urlPath='" + lessonList[index].project[1].href + "'>" +
		"<div class='liLeft left'>" + lessonList[index].project[1].text + "</div>" +
		"<div class='liRight right'><img src='img/right.png'/></div>" + 
	"</li>";

for (var i = 2;i < lessonList[index].project.length;i++) {
	section.getElementsByTagName("ul")[0].innerHTML += 
	"<li class='item' urlPath='" + lessonList[index].project[i].href + "'>" +
		"<div class='liLeft left'>" + lessonList[index].project[i].text + "</div>" +
		"<div class='liRight right'><img src='img/right.png'/></div>" + 
	"</li>";
}

var len = document.getElementsByClassName("item").length;
for (var i = 0;i < len;i++) {
	document.getElementsByClassName("item")[i].addEventListener("touchstart", function() {
		var urlPath = "lesson/" + this.getAttribute("urlPath") + "?index=" + index;
		console.log(urlPath);
		window.location = urlPath;
	});
}
