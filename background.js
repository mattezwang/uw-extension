// Event listener to check if on tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes('enroll.wisc.edu')) {
        console.log('Clicked on Tab! ' + tab.url);

        if (changeInfo.status === 'complete'){
            chrome.tabs.sendMessage(tabId, {
                message: 'NEW'
            });
        }
    }
});