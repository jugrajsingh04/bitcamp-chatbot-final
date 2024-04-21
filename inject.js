window.addEventListener('message', function(event) {
    // Check the origin if needed and ensure the message is what you expect
    if (event.data.type === 'toggleModal') {
        var iframeModal = document.getElementById('chatbot-modal-container');
        iframeModal.style.display = (iframeModal.style.display === 'none' ? 'grid' : 'none');
        var iframeCall = document.getElementById('chatbot-call-container');
        iframeCall.style.display = (iframeCall.style.display === 'none' ? 'flex' : 'none');
    }
});


(function() {
    // Check if the chatbot is already injected
    if (document.getElementById('chatbot-modal-container')) return;

    var iframe = document.createElement('iframe');
    iframe.style.background = "transparent"; // Ensure background is transparent
    iframe.style.colorScheme = "auto";
    iframe.style.border = "0";
    iframe.style.position = "fixed";
    iframe.style.bottom = "100px";
    iframe.style.right = "20px";
    iframe.style.zIndex = "0";
    iframe.style.width = "320px";
    iframe.style.height = "460px";
    iframe.style.pointerEvents = "auto"
    iframe.style.display = "none";
    iframe.allowTransparency = "true"; // Allow transparency
    iframe.src = chrome.runtime.getURL("chatbot-widget-modal.html");
    iframe.id = "chatbot-modal-container";

    document.body.appendChild(iframe);
})();

(function() {
    if (document.getElementById('chatbot-trigger-container')) return;
    var iframeTrigger = document.createElement('iframe');
    iframeTrigger.style.background = "transparent";
    iframeTrigger.style.colorScheme = "auto";
    iframeTrigger.style.border = "0";
    iframeTrigger.style.position = "fixed";
    iframeTrigger.style.bottom = "20px";
    iframeTrigger.style.right = "20px";
    iframeTrigger.style.zIndex = "1010";
    iframeTrigger.style.width = "54px";
    iframeTrigger.style.height = "54px";
    iframeTrigger.allowTransparency = "true";
    iframeTrigger.src = chrome.runtime.getURL("chatbot-widget-trigger-button.html");
    iframeTrigger.id = "chatbot-trigger-container";
    document.body.appendChild(iframeTrigger);
})();


(function() {
    if (document.getElementById('chatbot-call-button-container')) return;
    var iframeCall = document.createElement('iframe');
    iframeCall.style.background = "transparent";
    iframeCall.style.colorScheme = "auto";
    iframeCall.style.border = "0";
    iframeCall.style.position = "fixed";
    iframeCall.style.bottom = "450px";
    iframeCall.style.right = "350px";
    iframeCall.style.zIndex = "1010";
    iframeCall.style.width = "54px";
    iframeCall.style.height = "54px";
    iframeCall.style.display = "none";
    iframeCall.allowTransparency = "true";
    iframeCall.src = chrome.runtime.getURL("chatbot-widget-call-button.html");
    iframeCall.id = "chatbot-call-container";
    document.body.appendChild(iframeCall);
})();