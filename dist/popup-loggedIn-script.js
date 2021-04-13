











// document.querySelector('#sign-out').addEventListener('click', function () {
//     chrome.runtime.sendMessage({ message: 'logout' }, function (response) {
//         if (response === 'success') {
//             window.close();
//         }
//     });
// });

// document.querySelector('button').addEventListener('click', function () {
//     chrome.runtime.sendMessage({ message: 'isUserSignedIn' }, function (response) {
//         // alert(response);
//     });
// })





// const CLIENT_ID = '912099096037-dqcnfr7r6na9gcj66p2k6k73s1ubf3i5.apps.googleusercontent.com'
// const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
// const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly'

// // const authorizeButton = document.getElementById('authorize-button')
// // const signoutButton = document.getElementById('signout-button')

// window.addEventListener('DOMContentLoaded', () => {
//     // onload="this.onload(){}";
//     handleClientLoad();
//     // onreadystatechange="if (this.readyState === 'complete') this.onload()";
// })

// // Load auth2 library
// const handleClientLoad = () => {
//     // chrome.identity.getAuthToken({ interactive: true }, function (token) {
//     //     console.log('got the token', token);
//     // })

//     // gapi.load('client:auth2', initClient);
// }

// // Init API client library and sest up sign in listeners
// function initClient() {
//     // gapi.auth.setToken({
//     //     access_token: ""
//     // })
//     // gapi.client.init({
//     //     disoveryDocs: DISCOVERY_DOCS,
//     //     clientId: CLIENT_ID,
//     //     scope: SCOPES
//     // }).then(() => {
//     //     //Listen for sign in state changes
//     //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
//     //     // Handle initial sign in state
//     //     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//     //     authorizeButton.onclick = handleAuthClick;
//     //     signoutButton.onclick = handleSignoutClick;
//     // })
// }

// // // Update UI sign in state changes
// // const updateSigninStatus = (isSignedIn) => {
// //     if (isSignedIn) {
// //         authorizeButton.style.display = 'none';
// //         signoutButton.style.display = 'block';
// //     } else {
// //         authorizeButton.style.display = 'block';
// //         signoutButton.style.display = 'none';
// //     }
// // }

// // function handleAuthClick() {
// //     gapi.auth2.getAuthInstance().signIn();
// // }

// // function handleSignoutClick() {
// //     gapi.auth2.getAuthInstance().signOut();
// // }






// // window.addEventListener('DOMContentLoaded', function () {
// //     const cases = document.querySelector(".cases")
// //     var apiKey = config.YOUTUBE_API_KEY;
// //     const apiCall = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=" + apiKey + "&type=video&maxResults=3&videoDuration=short";


// //     //better search options

// //     //First you'll need to display a sign-in button
// //     //Once a user is logged in then we can show their videos

// //     const sugg1img = document.querySelector("#sugg1 img");
// //     const sugg1title = document.querySelector("#title1");
// //     const sugg1desc = document.querySelector("#desc1");
// //     const sugg2img = document.querySelector("#sugg2 img");
// //     const sugg2title = document.querySelector("#title2");
// //     const sugg2desc = document.querySelector("#desc2")
// //     const sugg3img = document.querySelector("#sugg3 img");
// //     const sugg3title = document.querySelector("#title3");
// //     const sugg3desc = document.querySelector("#desc3")

// //     var sugg1 = document.getElementById("sugg1");
// //     var sugg2 = document.getElementById("sugg2");
// //     var sugg3 = document.getElementById("sugg3");

// //     fetch(apiCall)
// //         .then(res => {
// //             if (res.status !== 200) {
// //                 cases.textContent = 'STATUS RETURN ERROR';
// //                 sugg1img.src = "../images/error.png";
// //                 sugg2img.src = "../images/error.png";
// //                 sugg3img.src = "../images/error.png";

// //                 sugg1title.textContent = "Error generating videos";
// //                 return;
// //             }
// //             res.json().then(data => {
// //                 // cases.textContent = JSON.stringify(data.items[0].id.videoId);

// //                 //data.items[0].snippet.thumbnails.default.url - video thumbnail url
// //                 //data.items[0].snippet.title
// //                 //data.items[0].snippet.description
// //                 //data.items[0].id.videoId

// //                 sugg1img.src = data.items[0].snippet.thumbnails.default.url;
// //                 sugg1title.textContent = data.items[0].snippet.title;
// //                 sugg1desc.textContent = data.items[0].snippet.description;

// //                 sugg2img.src = data.items[1].snippet.thumbnails.default.url;
// //                 sugg2title.textContent = data.items[1].snippet.title;
// //                 sugg2desc.textContent = data.items[1].snippet.description;

// //                 sugg3img.src = data.items[2].snippet.thumbnails.default.url;
// //                 sugg3title.textContent = data.items[2].snippet.title;
// //                 sugg3desc.textContent = data.items[2].snippet.description;

// //                 sugg1.addEventListener("click", () => {
// //                     window.open(`https://www.youtube.com/watch?v=${data.items[0].id.videoId}`, '_blank').focus();
// //                 })

// //                 sugg2.addEventListener("click", () => {
// //                     window.open(`https://www.youtube.com/watch?v=${data.items[1].id.videoId}`, '_blank').focus();
// //                 })

// //                 sugg3.addEventListener("click", () => {
// //                     window.open(`https://www.youtube.com/watch?v=${data.items[2].id.videoId}`, '_blank').focus();
// //                 })
// //             })
// //         })
// //         .catch(function (err) {
// //             cases.textContent = 'OTHER ERROR';
// //         })

// //     return true;
// // });