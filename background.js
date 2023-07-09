// // Event listener to check if on tab
// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//     if (tab.url && tab.url.includes("")) {
//         const queryParameters = tab.url.split("?")[1];
//         const urlParameters = new URLSearchParams(queryParameters);
//     }
// });