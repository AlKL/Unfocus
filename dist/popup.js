window.addEventListener('DOMContentLoaded', function () {
    const cases = document.querySelector(".cases")
    var apiKey = config.YOUTUBE_API_KEY;
    const apiCall = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=" + apiKey + "&type=video&maxResults=3&videoDuration=short";

    // link.addEventListener('click', function () {
    // var newURL = "http://youtube.com/";
    // chrome.tabs.create({ url: newURL });
    // cases.textContent = youtubeKey

    const sugg1img = document.querySelector("#sugg1 img");
    const sugg1title = document.querySelector("#title1");
    const sugg1desc = document.querySelector("#desc1")
    sugg1img.src = "https://i.ytimg.com/vi/gqrb5Jr8Fxw/default.jpg";
    sugg1title.textContent = "TITLE ONE";
    sugg1desc.textContent = "DESC ONE"

    const sugg2img = document.querySelector("#sugg2 img");
    const sugg2title = document.querySelector("#title2");
    const sugg2desc = document.querySelector("#desc2")
    sugg2img.src = "https://i.ytimg.com/vi/gqrb5Jr8Fxw/default.jpg";
    sugg2title.textContent = "TITLE TWO";
    sugg2desc.textContent = "DESC TWO";

    const sugg3img = document.querySelector("#sugg3 img");
    const sugg3title = document.querySelector("#title3");
    const sugg3desc = document.querySelector("#desc3")
    sugg3img.src = "https://i.ytimg.com/vi/gqrb5Jr8Fxw/default.jpg";
    sugg3title.textContent = "TITLE THREE";
    sugg3desc.textContent = "DESC THREE";

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

//Youtube thumbnail
//items[i].snippet.thumbnails.default.url

//Youtube title
//

//Youtube description
//