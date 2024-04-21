document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.chatbox-form');
    var messageInput = document.querySelector('.chatbox-form-message');
    var chatWindow = document.querySelector('.chatbox-chat');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        var userMessage = messageInput.value.trim(); // Get user input and trim any extra whitespace

        if (userMessage) { // Ensure the message isn't empty
            // Create a new div element for the user's message
            var messageDiv = document.createElement('div');
            messageDiv.textContent = userMessage;
            messageDiv.className = 'chatbox-message chatbox-user-message'; // Add class for styling

            // Append the user's message to the chat window
            chatWindow.appendChild(messageDiv);

            // Optionally clear the input after sending
            messageInput.value = '';

            // Scroll to the bottom of the chat window
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
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
