function fix_images(){for(var t=document.querySelectorAll("[data-img]"),e=0;e<t.length;e++)urls=t[e].getAttribute("data-img").split(","),urls=urls.join("'), url('"),prop="url('"+urls+"')",t[e].style.backgroundImage=prop}function fix_links(){$('a[href^="#"]').on("click",function(t){var e=$($(this).attr("href"));e.length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},999,"easeInOutQuart"))})}function blabla(){var t=Array.prototype.slice.call(document.getElementsByClassName("tabs")[0].getElementsByTagName("A")),e=Array.prototype.slice.call(document.getElementsByClassName("cont")[0].getElementsByTagName("A"));for(t=t.concat(e),i=0;i<t.length;i++)t[i].onclick=function(n){for(j=0;j<t.length;j++)t[j].removeAttribute("T");this.setAttribute("T",""),t.indexOf(this)>=e.length&&t[e.indexOf(this)].setAttribute("T","");var s=new XMLHttpRequest;return s.onload=function(t){200==this.status&&(document.getElementsByClassName("cont")[0].setAttribute("data-img",this.response.split("\n")[0]),txt=this.response.split("\n"),console.log(txt),txt.shift(),document.getElementsByClassName("cont")[0].innerHTML="<span class=j >\n"+txt.join("\n")+"</span>\n",fix_images())},s.open("GET",this.hash.slice(1),!0),s.send(null),!1}}window.onload=function(){fix_images(),fix_links(),document.getElementsByClassName("contact")[0].innerHTML+="<br>\n<a href='malto:info@baumun.org' >info@baumun.org</a>\n",document.getElementsByTagName("nav")[0].getElementsByClassName("menu")[0].addEventListener("click",function(t){$(this).toggleClass("opn")}),document.getElementsByTagName("footer")[0].innerHTML+=window.atob("PGJyPgo8c3BhbiBzdHlsZT0nZm9udC1zaXplOjAuNWVtOyc+ZGV2ZWxvcG1lbnQgJmFtcDsgZGVzaWduOiBtZXJ0IGFrZW5naW48L3NwYW4+Cg==")};