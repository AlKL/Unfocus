window.addEventListener('DOMContentLoaded', function () {
    const cases = document.querySelector(".cases")
    // your button here
    // var link = document.getElementById('test');
    // onClick's logic below:

    var apiKey = config.YOUTUBE_API_KEY;
    const apiCall = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=" + apiKey + "&type=video&maxResults=3&videoDuration=short";

    // link.addEventListener('click', function () {
    // var newURL = "http://youtube.com/";
    // chrome.tabs.create({ url: newURL });
    // cases.textContent = youtubeKey
    fetch(apiCall)
        .then(res => {
            // if (res.status !== 200) {
            //     cases.textContent = 'ERROR!!!!';
            //     return;
            // }
            res.json().then(data => {
                cases.textContent = JSON.stringify(data.error.code);
            })
        })
        .catch(function (err) {
            cases.textContent = 'ERROREEEE';
        })

    return true;

    // });
});

//Standard youtube link
//https://www.youtube.com/watch?v=gqrb5Jr8Fxw 