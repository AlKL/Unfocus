

















// let user_signed_in = false;


// const CLIENT_ID = encodeURIComponent('912099096037-t5n02sb0nt6q79s9bk5p4p8vgsanjuua.apps.googleusercontent.com');
// const RESPONSE_TYPE = encodeURIComponent('code');
// // const RESPONSE_TYPE = encodeURIComponent('code');

// const REDICRECT_URI = encodeURIComponent('https://gipdmgaabpjgmbpjangmpkfejodglhkf.chromiumapp.org');
// const STATE = encodeURIComponent('jfkls3n');
// const SCOPE = encodeURIComponent('openid');
// // const SCOPE = encodeURIComponent('https://www.googleapis.com/auth/youtube.readonly');

// const PROMPT = encodeURIComponent('consent');

// function create_oauth2_url() {
//     let nonce = encodeURIComponent(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))

//     let url =
//         `
//     https://accounts.google.com/o/oauth2/v2/auth
// ?client_id=${CLIENT_ID}
// &response_type=${RESPONSE_TYPE}
// &redirect_uri=${REDICRECT_URI}
// &state=${STATE}    
// &scope=${SCOPE}
// &PROMPT=${PROMPT}
// &nonce=${nonce}
//     `;

//     return url;
// }

// // id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3NDU3MzIxOGM2ZjZhMmZlNTBlMjlhY2JjNjg2NDMyODYzZmM5YzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5MTIwOTkwOTYwMzctdDVuMDJzYjBudDZxNzlzOWJrNXA0cDh2Z3Nhbmp1dWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MTIwOTkwOTYwMzctdDVuMDJzYjBudDZxNzlzOWJrNXA0cDh2Z3Nhbmp1dWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDU0NjQ0OTgxNDI1MTQwNTA1OTkiLCJub25jZSI6IjA2Y2EyeWU0czNnNHNzYmNxMjc2Z3lwIiwiaWF0IjoxNjE4MjY4MDc2LCJleHAiOjE2MTgyNzE2NzYsImp0aSI6ImQ3NzVkZGMwY2VkOWNkNDcwOWZlYjAxNTBlODQxMjAwZTc0YWY0NjEifQ.MGzONFbpAEAwFSO5LbNGQbbpgQM_dnfM-dFtyEK15_El3z9Ts-dv9QNUfgAz5KU78V5NYP0qTSdTdIUeKLxmuNYh_eiHc5gfHMKTfiZiZjcjwKhvv29y_CXyWNJql8rSW5y-zSm3mT_-1QF2HHWwBeLxIHMuY9MCTrmTWVF0LZ6HFgakeaiV3fJritHISijXJgiTFSRTVB1bXNDzBIta1uSCEwvZdJeyxJjA9QY9FLqpUUwa1ymp1PG8zvV1Pqaq4nJBjhixtOlWQbCl8ITrQXUWJxeCIvDYxEDHN87B_t2Oiie798Awc7RVYcwH-04tNQ7VBc7WuQ2YchnPgdPAcw


// function is_user_signed_in() {
//     return user_signed_in;
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === 'login') {
//         if (is_user_signed_in()) {
//             console.log('user is already signed in');
//         } else {
//             chrome.identity.launchWebAuthFlow({
//                 url: create_oauth2_url(),
//                 interactive: true
//             }, function (redirect_url) {
//                 console.log(redirect_url);

//                 let id_token = redirect_url.substring(redirect_url.indexOf('id_token=') + 9)
//                 id_token = id_token.substring(0, id_token.indexOf('&'));
//                 const user_info = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(id_token.split(".")[1]))

//                 console.log(id_token);

//                 // chrome.identity.getAuthToken(CLIENT_ID, (token) => {
//                 //     console.log(token);
//                 // })

//                 if ((user_info.iss === 'https://accounts.google.com' || user_signed_in.iss === 'accounts.google.com') &&
//                     user_info.aud === CLIENT_ID) {

//                     chrome.browserAction.setPopup({ popup: './dist/popup-loggedIn.html' }, function () {
//                         user_signed_in = true;
//                         sendResponse('success');
//                     });
//                 } else {
//                     console.log("Could not authenticate");
//                 }
//             })
//             return true;
//         }
//     } else if (request.message === 'logout') {
//         chrome.browserAction.setPopup({ popup: './dist/popup.html' }, function () {
//             user_signed_in = false;
//             sendResponse('success');
//         });
//         user_signed_in = false;
//         return true;
//     } else if (request.message === 'isUserSignedIn') {
//         sendResponse(is_user_signed_in());
//     }
// });

// //https://gipdmgaabpjgmbpjangmpkfejodglhkf.chromiumapp.org