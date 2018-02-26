var val = document.getElementsByClassName("detail")[0].innerHTML;
var args = getArgumentsByHref(window.location.href);

document.getElementById("back").addEventListener("touchstart", function() {
	window.location = "../../../lessonDetail.html?number=" + args.index;
});