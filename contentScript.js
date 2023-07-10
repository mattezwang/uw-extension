(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { message } = obj;

        if (message === 'NEW'){
            responseFunction();
        }
    });

    const responseFunction = () => {
        console.log('ResponseFunction runs!');
    }
})();