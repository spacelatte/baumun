window.onload = function() {
	fix_images();
	fix_links();
	footer = document.getElementsByTagName("footer")[0];
	footer.innerHTML += window.atob("PGJyPgo8c3BhbiBzdHlsZT0nZm9udC1zaXplOjAuNWVtOyc+ZGV2ZWxvcG1lbnQgJmFtcDsgZGVzaWduOiBtZXJ0IGFrZW5naW48L3NwYW4+Cg==");
	document.getElementsByTagName("nav")[0].getElementsByClassName("menu")[0].addEventListener('click',function(e) { $(this).toggleClass("opn"); });
	return;
}

function blabla() {
	var _links = Array.prototype.slice.call(document.getElementsByClassName('tabs')[0].getElementsByTagName('A'));
	var mlinks = Array.prototype.slice.call(document.getElementsByClassName('cont')[0].getElementsByTagName('A'));
	_links = _links.concat(mlinks);
	for(i=0;i<_links.length;i++) {
		_links[i].onclick = function(e) {
			for(j=0;j<_links.length;j++)
				_links[j].removeAttribute("T");
			this.setAttribute("T","");
			if( _links.indexOf(this) >= mlinks.length )
				_links[ mlinks.indexOf(this) ].setAttribute("T","");
			var req = new XMLHttpRequest();
			req.onload = function(e) {
				if(this.status != 200)
					return;
				document.getElementsByClassName("cont")[0].setAttribute("data-img",this.response.split("\n")[0]);
				txt = this.response.split("\n");
				console.log(txt);
				txt.shift()
				document.getElementsByClassName('cont')[0].innerHTML = "<span class=j >\n"+txt.join("\n")+"</span>\n";
				fix_images();
			};
			req.open("GET",this.hash.slice(1),true);
			req.send(null);
			return false;
		};
		continue;
	}
}