document.addEventListener('click', function () {
    console.log('click call');
    // window.parent.postMessage({ type: 'toggleCallModal' }, '*'); // Adjust the target origin in production
});
