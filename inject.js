if (!window.hasAddedCreationListener) {
    chrome.runtime.onMessage.addListener(function(message) {
        if (message.action === "toggleChatbot") {
            var iframeModal = document.getElementById('chatbot-modal-container');
            var iframeCall = document.getElementById('chatbot-call-button-container');
            var iframeTrigger = document.getElementById('chatbot-trigger-button-container');

            console.log(iframeModal, iframeCall, iframeTrigger);

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

            // Create elements if they were not found (meaning they were removed)
            if (!iframeModal || !iframeCall || !iframeTrigger) {
                createChatbotElements();
            }
        }
    });

    window.addEventListener('message', function(event) {
        if (event.data.type === 'toggleModal') {
            var iframeModal = document.getElementById('chatbot-modal-container');
            iframeModal.style.display = (iframeModal.style.display === 'none' ? 'grid' : 'none');
            var iframeCall = document.getElementById('chatbot-call-button-container');
            iframeCall.style.display = (iframeCall.style.display === 'none' ? 'flex' : 'none');
        }
    });

    window.hasAddedCreationListener = true;
}



function createChatbotElements() {
    // Create and append iframe for chatbot modal
    var iframeModal = document.createElement('iframe');
    setupIframe(iframeModal, 'modal-container', '100px', '20px', '320px', '460px', 'none');
    document.body.appendChild(iframeModal);

    // Create and append iframe for chatbot call button
    var iframeCall = document.createElement('iframe');
    setupIframe(iframeCall, 'call-button-container', '450px', '350px', '54px', '54px', 'none');
    document.body.appendChild(iframeCall);

    // Create and append iframe for chatbot trigger button
    var iframeTrigger = document.createElement('iframe');
    setupIframe(iframeTrigger, 'trigger-button-container', '20px', '20px', '54px', '54px', 'block');
    document.body.appendChild(iframeTrigger);
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
