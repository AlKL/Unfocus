// import axios from "axios";
var youtubeKey = config.YOUTUBE_API_KEY;
const cases = document.querySelector(".cases")

window.addEventListener('DOMContentLoaded', function() {
    // your button here
    var link = document.getElementById('test');
    // onClick's logic below:
    link.addEventListener('click', function() {
        // var newURL = "http://youtube.com/";
        // chrome.tabs.create({ url: newURL });

        cases.textContent = "TEST"

    });
});

