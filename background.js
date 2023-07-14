// // Event listener to check if on tab
// var clickCount = 0;
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (tab.url && tab.url.includes('enroll.wisc.edu')) {
//         console.log('Clicked on Tab! ' + tab.url);
        
//         chrome.tabs.sendMessage(tabId, {
//             message: 'NEW'
//         });
//         console.log("Message sent!");
//         clickCount++;
//     }
// });