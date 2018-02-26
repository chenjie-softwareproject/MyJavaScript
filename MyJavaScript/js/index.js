footer.style.height = header.offsetHeight * 1.5 + 'px';
section.style.height = (document.body.offsetHeight - header.offsetHeight - footer.offsetHeight) + 'px';

var ulList = document.getElementsByClassName("ulList")[0];

var len = lessonList.length;
			
ulList.innerHTML = "<li class='sign'>"+ 
		"<div class='liLeft left'>" + lessonList[0].project[0].text + "</div>" +
		"<div class='liRight right'><img src='img/right.png'/></div>" +
	"</li>";
for (var i = 1;i < len;i++) {
	ulList.innerHTML += "<li>" + 
		"<div class='liLeft left'>" + lessonList[i].project[0].text + "</div>" +
		"<div class='liRight right'><img src='img/right.png'/></div>" +
	"</li>";
}

for (var i = 0;i < len;i++) {
	ulList.getElementsByTagName("li")[i].addEventListener("touchstart", function() {
		var title = this.getElementsByTagName("div")[0].innerHTML;
		for (var j = 0;j < len;j++) {
			if (title == lessonList[j].project[0].text) {
				window.location = "lessonDetail.html?number=" + j;
				break;
			}
		}
	});
}


document.addEventListener('plusready', function(){
	//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
});