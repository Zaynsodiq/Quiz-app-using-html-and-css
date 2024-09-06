
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const words = container.textContent.trim().split(' ');
    container.innerHTML = '';
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.setProperty('--i', index);
        container.appendChild(span);
        container.appendChild(document.createTextNode(' ')); // Add space between words
    });
});