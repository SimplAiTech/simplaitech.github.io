(function(){
  var s=Date.parse("2026-11-27T00:00:00-05:00"), e=Date.parse("2026-12-01T23:59:59-05:00"), n=Date.now();
  if(n<s||n>e) return;
  try{ if(localStorage.getItem("bf26_closed")) return; }catch(x){}
  var d=document.createElement("div");
  d.setAttribute("style","position:fixed;top:0;left:0;right:0;z-index:99999;background:#111;color:#f5c542;font:600 14px/1.4 system-ui,sans-serif;text-align:center;padding:8px 40px 8px 12px;border-bottom:1px solid #f5c542");
  d.innerHTML='\u{1F5A4} Black Friday \u00b7 Nov 27 \u2013 Dec 1 \u00b7 70% off the SimplAiTech store with code <b>BLACKFRIDAY</b> \u2192 <a href="https://simplaitech.gumroad.com/" target="_blank" rel="noopener" style="color:#fff;text-decoration:underline">Shop</a><span id="bf26x" style="position:absolute;right:14px;top:6px;cursor:pointer;font-size:18px">\u00d7</span>';
  document.body.appendChild(d);
  document.getElementById("bf26x").onclick=function(){d.remove();try{localStorage.setItem("bf26_closed","1")}catch(x){}};
})();
