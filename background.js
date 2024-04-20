chrome.action.onClicked.addListener((tab) => {
    // List of protocols and domains where injection is typically blocked
    const blockedProtocolsAndDomains = ['chrome://', 'chrome-extension://', 'https://accounts.google.com'];
    
    // Check if the current tab's URL starts with any of the blocked patterns
    if (blockedProtocolsAndDomains.some(prefix => tab.url.startsWith(prefix))) {
        console.error('Cannot inject script into protected pages.');
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'images/icon48.png',
            title: 'Injection Blocked',
            message: 'Extensions are not allowed to inject scripts into this page.'
        });
    } else {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['inject.js']
        }).catch(error => {
            console.error('Failed to inject script: ', error);
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'images/icon48.png',
                title: 'Injection Failed',
                message: 'There was an error injecting the chatbot.'
            });
        });
    }
});
