var firstIframe = document.querySelector('iframe[src^="//www.youtube"]');
var src = firstIframe.src;
var newSrc = src + '?autoplay=1';
firstIframe.src = newSrc;
