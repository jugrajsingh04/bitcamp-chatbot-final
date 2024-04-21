chrome.action.onClicked.addListener((tab) => {
    const blockedProtocolsAndDomains = ['chrome://', 'chrome-extension://', 'https://accounts.google.com'];
    const cacheKey = 'assistantIdsCache';

    // Check if the URL is blocked
    if (blockedProtocolsAndDomains.some(prefix => tab.url.startsWith(prefix))) {
        console.error('Cannot inject script into protected pages.');
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'images/icon48.png',
            title: 'Injection Blocked',
            message: 'Extensions are not allowed to inject scripts into this page.'
        });
        return;
    }

    // Fetch the domain from the tab URL
    const url = new URL(tab.url);
    const domain = url.hostname;
    chrome.storage.local.set({ 'currentDomain': domain });

    // Function to handle script injection and message sending
    function injectAndSendMessage(assistantId) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['inject.js']
        }).then(() => {
            chrome.tabs.sendMessage(tab.id, { action: "toggleChatbot", assistantId });
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

    // Check cache for the domain
    chrome.storage.local.get([cacheKey], function(result) {
        const cache = result[cacheKey] || {};

        if (cache[domain]) {
            injectAndSendMessage(cache[domain]); // Assistant ID is cached
        } else {
            // Dummy API call to fetch assistant ID
            console.log(domain)
            fetch(`https://bitcamp-chatbot-api-zywa.vercel.app/api/dummy-scrape-site/${domain}`)
                .then(response => response.json())
                .then(data => {
                    const assistantId = data.message; // Assuming the API returns { message: "someAssistantId" }
                    console.error(`Assistant ID for domain ${domain}:`, assistantId);
                    cache[domain] = assistantId;
                    chrome.storage.local.set({ [cacheKey]: cache }); // Update cache
                    injectAndSendMessage(assistantId);
                })
                .catch(error => {
                    console.error(`API call failed for domain ${domain}:`, error.message || error);
                    chrome.notifications.create({
                        type: 'basic',
                        iconUrl: 'images/icon48.png',
                        title: 'API Call Failed',
                        message: `Failed to retrieve assistant ID for ${domain}. Error: ${error.message || 'Unknown error'}`
                    });
                });
                
        }
    });
});
