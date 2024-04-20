(function() {
    // Check if the chatbot is already injected
    if (document.getElementById('chatbot-iframe-container')) return;

    var iframe = document.createElement('iframe');
    iframe.style.background = "transparent"; // Ensure background is transparent
    iframe.style.border = "none";
    iframe.style.height = "100vh";
    iframe.style.width = "100%";
    iframe.style.position = "fixed";
    iframe.style.bottom = "0px";
    iframe.style.right = "0px";
    iframe.style.zIndex = "1000000";
    iframe.allowTransparency = "true"; // Allow transparency
    iframe.src = chrome.runtime.getURL("chatbot.html");
    iframe.id = "chatbot-iframe-container";

    document.body.appendChild(iframe);
})();
