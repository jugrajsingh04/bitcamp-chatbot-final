(function() {
    // Check if the chatbot is already injected
    if (document.getElementById('chatbot-iframe-container')) return;

    var iframe = document.createElement('iframe');
    iframe.style.background = "white";
    iframe.style.border = "none";
    iframe.style.height = "400px";
    iframe.style.width = "300px";
    iframe.style.position = "fixed";
    iframe.style.bottom = "20px";
    iframe.style.right = "20px";
    iframe.style.zIndex = "1000000"; // Ensures the iframe is on top of most elements
    iframe.src = chrome.runtime.getURL("chatbot.html");
    iframe.id = "chatbot-iframe-container";

    document.body.appendChild(iframe);
})();
