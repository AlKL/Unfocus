
window.addEventListener('DOMContentLoaded', function () {
    const cases = document.querySelector(".cases")
    var apiKey = config.YOUTUBE_API_KEY;
    const apiCall = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=" + apiKey + "&type=video&maxResults=3&videoDuration=short";

    const sugg1img = document.querySelector("#sugg1 img");
    const sugg1title = document.querySelector("#title1");
    const sugg1desc = document.querySelector("#desc1");
    const sugg2img = document.querySelector("#sugg2 img");
    const sugg2title = document.querySelector("#title2");
    const sugg2desc = document.querySelector("#desc2")
    const sugg3img = document.querySelector("#sugg3 img");
    const sugg3title = document.querySelector("#title3");
    const sugg3desc = document.querySelector("#desc3")

    var sugg1 = document.getElementById("sugg1");
    var sugg2 = document.getElementById("sugg2");
    var sugg3 = document.getElementById("sugg3");


    fetch(apiCall)
        .then(res => {
            if (res.status !== 200) {
                cases.textContent = 'STATUS RETURN ERROR';
                sugg1img.src = "../images/error.png";
                sugg2img.src = "../images/error.png";
                sugg3img.src = "../images/error.png";

                sugg1title.textContent = "Error generating videos";
                return;
            }
            res.json().then(data => {
                // cases.textContent = JSON.stringify(data.items[0].id.videoId);

                //data.items[0].snippet.thumbnails.default.url - video thumbnail url
                //data.items[0].snippet.title
                //data.items[0].snippet.description
                //data.items[0].id.videoId

                sugg1img.src = data.items[0].snippet.thumbnails.default.url;
                sugg1title.textContent = data.items[0].snippet.title;
                sugg1desc.textContent = data.items[0].snippet.description;

                sugg2img.src = data.items[1].snippet.thumbnails.default.url;
                sugg2title.textContent = data.items[1].snippet.title;
                sugg2desc.textContent = data.items[1].snippet.description;

                sugg3img.src = data.items[2].snippet.thumbnails.default.url;
                sugg3title.textContent = data.items[2].snippet.title;
                sugg3desc.textContent = data.items[2].snippet.description;

                sugg1.addEventListener("click", () => {
                    window.open(`https://www.youtube.com/watch?v=${data.items[0].id.videoId}`, '_blank').focus();
                })

                sugg2.addEventListener("click", () => {
                    window.open(`https://www.youtube.com/watch?v=${data.items[1].id.videoId}`, '_blank').focus();
                })

                sugg3.addEventListener("click", () => {
                    window.open(`https://www.youtube.com/watch?v=${data.items[2].id.videoId}`, '_blank').focus();
                })
            })
        })
        .catch(function (err) {
            cases.textContent = 'OTHER ERROR';
        })

    return true;
});