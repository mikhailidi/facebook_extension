// chrome.runtime.onMessage.addListener(function (request, idListener, sendResponse) {
//     if (request == 'take_screenshot'){
//        
//         chrome.tabs.captureVisibleTab(null, {"format": "jpeg"}, function (img) {
//             var xhr = new XMLHttpRequest(),
//                 formData = new FormData(),
//                 url = 'http://localhost:8888/1WORK/Extention/getData/image.php';
//
//             formData.append("img_val", img);
//             xhr.open("POST", url, true);
//             xhr.send(formData);
//         });
//     } else if (request == 'finish_screenshot'){
//         var xhr = new XMLHttpRequest(),
//             formData = new FormData(),
//             url = 'http://localhost:8888/1WORK/Extention/getData/image.php';
//
//         formData.append("finish_screenshot", "1");
//         xhr.open("POST", url, true);
//         xhr.send(formData);
//     }
// });
//
//
//
//
//
//
