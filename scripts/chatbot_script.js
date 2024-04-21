document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.chatbox-form');
    var messageInput = document.querySelector('.chatbox-form-message');
    var chatWindow = document.querySelector('.chatbox-chat');
    // get current tab url
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        console.log(tab.url);
        updateChatHeader(tab.url);  
    });


    function updateChatHeader(url) {
        const header = document.querySelector('.chatbox-widget-header h2');
        console.log("hi");
        console.log(header);
        if (header) {
            header.textContent = `Chat with ${new URL(url).hostname}`; // Display the domain name
        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        var userMessage = messageInput.value.trim(); // Get user input and trim any extra whitespace

        if (userMessage) { // Ensure the message isn't empty
            // Fetch the domain from the tab URL
            displayMessage(userMessage, 'in');
            chrome.storage.local.get('currentDomain', function(data) {
                var domain = data.currentDomain || 'defaultDomain'; // Handle the case where no domain is stored
                console.log('Domain:', domain);

                // Retrieve assistant key from local storage
                var cacheKey = 'assistantIdsCache';
                chrome.storage.local.get([cacheKey], function(result) {
                    const cache = result[cacheKey] || {};
                    var assistantKey = cache[domain] || 'Not Found'; // Use 'Not Found' if no key exists

                    // If an assistant key is found, make an API call
                    if (assistantKey !== 'Not Found') {
                        callOpenAI(assistantKey, userMessage);
                    } else {
                        displayMessage('Assistant key not found for the domain: ' + domain, 'out');
                    }
                });
            });

            // Optionally clear the input after sending
            messageInput.value = '';
        }
    });

    function callOpenAI(assistantId, userMessage) {
        var data = {
            assistant_id: assistantId,
            thread: {
                messages: [
                    {role: "user", content: userMessage}
                ]
            },
            tools: [
                {
                type: "file_search"
                }
            ]
        };

        fetch('https://api.openai.com/v1/threads/runs', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer s'+'k-'+'pro'+'j-o9gEXbYpRLElql9eQ3L9T3BlbkFJNpERazGqwj3YUKu8rDNj', // Replace this with your actual API key
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {
            if (data.error) {
                displayMessage('Error: ' + data.error.message);
            } else {
                const runId = data.id;
                const threadId = data.thread_id;
                pollForCompletion(threadId, runId);
            }
        });
    }

    function pollForCompletion(threadId, runId) {
        const interval = setInterval(() => {
            fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
                headers: {
                    'Authorization': 'Bearer s'+'k-'+'pro'+'j-o9gEXbYpRLElql9eQ3L9T3BlbkFJNpERazGqwj3YUKu8rDNj',
                    'OpenAI-Beta': 'assistants=v2'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.status !== 'queued' && data.status !== 'in_progress') {
                    clearInterval(interval);
                    if (data.status === 'completed') {
                        fetchFinalMessage(threadId);
                    }
                }
            });
        }, 500); // Check every 0.5 seconds
    }

    function fetchFinalMessage(threadId) {
        fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
            headers: {
                'Authorization': 'Bearer s'+'k-'+'pro'+'j-o9gEXbYpRLElql9eQ3L9T3BlbkFJNpERazGqwj3YUKu8rDNj',
                'OpenAI-Beta': 'assistants=v2'
            }
        })
        .then(response => response.json())
        .then(data => {
            const messages = data.data;
            // get message with the latest created_at
            const lastMessage = messages.reduce((acc, curr) => {
                return acc.created_at > curr.created_at ? acc : curr;
            });
            displayMessage(lastMessage.content[0].text.value, 'out');
            console.log('Final message:', lastMessage.content[0].text.value);
        });
    }

    function displayMessage(message, role = 'in') {
        var messageDiv = document.createElement('div');
        var messageSpan = document.createElement('span');
        messageSpan.textContent = message;
        messageDiv.appendChild(messageSpan);
        messageDiv.className = 'chatbox-chat-message chatbox-chat-message-' + role;
        chatWindow.appendChild(messageDiv);
        console.log('Message displayed:', message);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom of the chat window
    }
});
