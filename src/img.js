function fix_images() {
	var __imglist = document.querySelectorAll("[data-img]");
	for (var i=0;i<__imglist.length;i++) {
		urls = __imglist[i].getAttribute('data-img').split(",");
		urls = urls.join("'), url('");
		prop = "url('" + urls + "')";
		__imglist[i].style.backgroundImage = prop;
		//__imglist[i].style.background = prop;
	}
};
