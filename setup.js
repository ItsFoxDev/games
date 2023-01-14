function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

document.title = gameid + ' | FoxDev';
var iframe = document.createElement('iframe');
iframe.src = srcurl;
document.body.appendChild(iframe);
changeFavicon(icourl);
