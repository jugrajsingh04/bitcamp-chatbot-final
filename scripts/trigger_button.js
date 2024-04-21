document.addEventListener('click', function () {
    console.log('click');
    window.parent.postMessage({ type: 'toggleModal' }, '*'); // Adjust the target origin in production
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.chatbox-widget-trigger-button');
    const image1 = document.getElementById('openChatBox');
    const image2 = document.getElementById('closeChatBox');

    toggleButton.addEventListener('click', function () {
        if (image1.style.display === 'block') {
            image1.style.display = 'none';
            image2.style.display = 'block';
        } else {
            image1.style.display = 'block';
            image2.style.display = 'none';
        }
    });
});
