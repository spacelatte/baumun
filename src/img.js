function fix_images() {
	var __imglist = document.querySelectorAll("[data-img]");
	for (var i=0;i<__imglist.length;i++) {
		var url = __imglist[i].getAttribute('data-img');
		__imglist[i].style.backgroundImage="url('" + url + "')";
	}
};
