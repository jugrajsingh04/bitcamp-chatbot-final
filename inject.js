if (!window.hasAddedCreationListener) {
    chrome.runtime.onMessage.addListener(function(message) {
        if (message.action === "toggleChatbot") {
            var iframeModal = document.getElementById('chatbot-modal-container');
            var iframeCall = document.getElementById('chatbot-call-button-container');
            var iframeEmail = document.getElementById('chatbot-email-button-container');
            var iframeTrigger = document.getElementById('chatbot-trigger-button-container');
            var iframeEmailModal = document.getElementById('chatbot-email-modal-container');

            // Remove elements if they exist
            if (iframeModal) {
                document.body.removeChild(iframeModal);
            }
            if (iframeCall) {
                document.body.removeChild(iframeCall);
            }
            if (iframeTrigger) {
                document.body.removeChild(iframeTrigger);
            }
            if (iframeEmailModal) {
                document.body.removeChild(iframeEmailModal);
            }
            if (iframeEmail) {
                document.body.removeChild(iframeEmail);
            }

            // Create elements if they were not found (meaning they were removed)
            if (!iframeModal || !iframeCall || !iframeTrigger || !iframeEmailModal || !iframeEmail) {
                createChatbotElements();
            }

            updateChatHeader(message.url);
        }
    });

    window.addEventListener('message', function(event) {
        if (event.data.type === 'toggleModal') {
            var iframeModal = document.getElementById('chatbot-modal-container');
            iframeModal.style.display = (iframeModal.style.display === 'none' ? 'grid' : 'none');
            var iframeCall = document.getElementById('chatbot-call-button-container');
            iframeCall.style.display = (iframeCall.style.display === 'none' ? 'block' : 'none');
            var iframeEmail = document.getElementById('chatbot-email-button-container');    
            iframeEmail.style.display = (iframeEmail.style.display === 'none' ? 'block' : 'none');
            var iframeModal = document.getElementById('chatbot-email-modal-container');
            iframeModal.style.display = iframeModal.style.display === 'none';
        }
        if (event.data.type === 'toggleCallModal') {
            var iframeModal = document.getElementById('chatbot-email-modal-container');
            iframeModal.style.display = (iframeModal.style.display === 'none' ? 'grid' : 'none');
        }
    });

    window.hasAddedCreationListener = true;
}

function updateChatHeader(url) {
    const header = document.querySelector('.chatbox-widget-header h2');
    console.log("hi");
    console.log(header);
    if (header) {
        header.textContent = `Chat with ${new URL(url).hostname}`; // Display the domain name
    }
}


function createChatbotElements() {
    // Create and append iframe for chatbot modal
    var iframeModal = document.createElement('iframe');
    setupIframe(iframeModal, 'modal-container', '100px', '20px', '322px', '462px', 'none');
    document.body.appendChild(iframeModal);

    // Create and append iframe for chatbot call button
    var iframeCall = document.createElement('iframe');
    setupIframe(iframeCall, 'call-button-container', '510px', '360px', '54px', '54px', 'none');
    document.body.appendChild(iframeCall);

    // Create and append iframe for chatbot call button
    var iframeCall = document.createElement('iframe');
    setupIframe(iframeCall, 'email-button-container', '430px', '360px', '54px', '54px', 'none');
    document.body.appendChild(iframeCall);

    // Create and append iframe for chatbot trigger button
    var iframeTrigger = document.createElement('iframe');
    setupIframe(iframeTrigger, 'trigger-button-container', '20px', '20px', '54px', '54px', 'block');
    document.body.appendChild(iframeTrigger);

    // Create and append iframe for chatbot call modal
    var iframeEmailModal = document.createElement('iframe');
    setupIframe(iframeEmailModal, 'email-modal-container', '100px', '20px', '322px', '462px', 'none');
    document.body.appendChild(iframeEmailModal);
}

function setupIframe(iframe, id, bottom, right, width, height, display) {
    iframe.style.background = "transparent";
    iframe.style.colorScheme = "auto";
    iframe.style.border = "0";
    iframe.style.position = "fixed";
    iframe.style.bottom = bottom;
    iframe.style.right = right;
    iframe.style.zIndex = "1010";
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.style.pointerEvents = "auto";
    iframe.style.display = display;
    iframe.allowTransparency = "true";
    iframe.src = chrome.runtime.getURL(`chatbot-widget-${id.replace('-container', '')}.html`);
    iframe.id = `chatbot-${id}`;
}
