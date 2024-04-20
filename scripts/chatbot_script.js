document.addEventListener('DOMContentLoaded', function() {
    console.log('Chatbot script loaded');
    var toggleButton = document.querySelector('.chatbox-widget-trigger-button');
    var chatModal = document.getElementById('chatbox-widget-modal');

    toggleButton.addEventListener('click', function() {
        console.log('Toggle chatbot modal');
        if (chatModal.style.display === 'none') {
            chatModal.style.display = 'grid'; // Show the modal
        } else {
            chatModal.style.display = 'none'; // Hide the modal
        }
    });

    // Add this event listener to handle form submissions
    var chatForm = document.querySelector('.chatbox-form');
    chatForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way
        sendMessage(); // Call your existing sendMessage function
    });
});

function sendMessage() {
    var input = document.querySelector('.chatbox-form-message');
    var message = input.value.trim();
    if (message) {
        displayMessage(message, 'user');
        // Here you could add your chatbot response logic
        displayMessage('Echo: ' + message, 'bot'); // This is a placeholder
    }
    input.value = ''; // Clear input box
    input.focus(); // Keep focus on input
}

function displayMessage(message, sender) {
    var chatbox = document.querySelector('.chatbox-chat');
    var msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    if (sender === 'user') {
        msgDiv.classList.add('user');
    } else {
        msgDiv.classList.add('bot');
    }
    msgDiv.textContent = message;
    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}
