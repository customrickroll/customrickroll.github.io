var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '405',
        width: '720',
        videoId: 'QtBDL8EiNZo',
        playerVars: { 'autoplay': 1, 'controls': 0, 'enablejsapi': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onStateChange,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onStateChange(event) {
    if (event.data == YT.PlayerState.PAUSED) {
        return false;
    }
}
