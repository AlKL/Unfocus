var youtubeKey = config.YOUTUBE_API_KEY;

window.addEventListener('DOMContentLoaded', function() {
    // your button here
    var link = document.getElementById('test');
    // onClick's logic below:
    link.addEventListener('click', function() {
        var newURL = "http://youtube.com/";
        chrome.tabs.create({ url: newURL });
    });
});
