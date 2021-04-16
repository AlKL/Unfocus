// returns a number between 0 and max - 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.addEventListener('DOMContentLoaded', function () {
    var apiKey = config.YOUTUBE_API_KEY2;

    const cases = document.querySelector(".cases")

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

    //(items/snippet/thumbnails/default/url), (items/snippet/title), (items/snippet/description), (items/id/videoId)
    var sortCategories = ["date", "rating", "relevance", "title", "viewCount", "viewCount"];

    chrome.storage.sync.get({ list: [] }, (data) => {

        var storedChannelIds = data.list;
        // cases.textContent = storedChannelIds;

        var randomCatIndex = getRandomInt(sortCategories.length);
        var randomVidIndex = [getRandomInt(25), getRandomInt(25), getRandomInt(25)];
        var randomChannelIndex = [getRandomInt(storedChannelIds.length), getRandomInt(storedChannelIds.length), getRandomInt(storedChannelIds.length)]

        // returns api stirng
        function getApiString(i) {
            return 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId='
                + storedChannelIds[randomChannelIndex[i]]
                + '&maxResults=25&order='
                + sortCategories[randomCatIndex]
                + '&fields=items%2Fid%2FvideoId%2C%20items%2Fsnippet%2Ftitle%2C%20items%2Fsnippet%2Fdescription%2C%20items%2Fsnippet%2Fthumbnails%2Fdefault%2Furl&key='
                + apiKey;
        }

        fetch(getApiString(0))
            .then(res => {
                if (res.status !== 200) {
                    sugg1title.textContent = 'Status return error (not 200)';
                    sugg1img.src = "../images/error.png";
                    return;
                }
                res.json().then(data => {
                    sugg1img.src = data.items[randomVidIndex[0]].snippet.thumbnails.default.url;
                    sugg1title.textContent = data.items[randomVidIndex[0]].snippet.title;
                    sugg1desc.textContent = data.items[randomVidIndex[0]].snippet.description;
                    sugg1.addEventListener("click", () => {
                        window.open(`https://www.youtube.com/watch?v=${data.items[randomVidIndex[0]].id.videoId}`, '_blank').focus();
                    })
                })
            })

        fetch(getApiString(1))
            .then(res => {
                if (res.status !== 200) {
                    sugg2title.textContent = 'Status return error (not 200)';
                    sugg2img.src = "../images/error.png";
                    return;
                }
                res.json().then(data => {
                    sugg2img.src = data.items[randomVidIndex[1]].snippet.thumbnails.default.url;
                    sugg2title.textContent = data.items[randomVidIndex[1]].snippet.title;
                    sugg2desc.textContent = data.items[randomVidIndex[1]].snippet.description;
                    sugg2.addEventListener("click", () => {
                        window.open(`https://www.youtube.com/watch?v=${data.items[randomVidIndex[1]].id.videoId}`, '_blank').focus();
                    })
                })
            })

        fetch(getApiString(2))
            .then(res => {
                if (res.status !== 200) {
                    sugg3title.textContent = 'Status return error (not 200)';
                    sugg3img.src = "../images/error.png";
                    return;
                }
                res.json().then(data => {
                    sugg3img.src = data.items[randomVidIndex[2]].snippet.thumbnails.default.url;
                    sugg3title.textContent = data.items[randomVidIndex[2]].snippet.title;
                    sugg3desc.textContent = data.items[randomVidIndex[2]].snippet.description;
                    sugg3.addEventListener("click", () => {
                        window.open(`https://www.youtube.com/watch?v=${data.items[randomVidIndex[2]].id.videoId}`, '_blank').focus();
                    })
                })
            })
    })

    return true;
});