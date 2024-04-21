document.addEventListener('click', function () {
    console.log('click');
    window.parent.postMessage({ type: 'toggleModal' }, '*'); // Adjust the target origin in production
});
