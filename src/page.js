window.onload = function() {
	fix_images();
	fix_links();
	footer = document.getElementsByTagName("footer")[0];
	footer.innerHTML += window.atob("PGJyPgo8c3BhbiBzdHlsZT0nZm9udC1zaXplOjAuNWVtOyc+ZGV2ZWxvcG1lbnQgJmFtcDsgZGVzaWduOiBtZXJ0IGFrZW5naW48L3NwYW4+Cg==");
	document.getElementsByTagName("nav")[0].getElementsByClassName("menu")[0].addEventListener('click',function(e) { $(this).toggleClass("opn"); });
	return;
}
