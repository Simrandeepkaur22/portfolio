// Toggle Dark/Light Mode
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const themeButton = document.querySelector('.theme-toggle');
    themeButton.textContent = document.body.classList.contains('light-mode') ? '🌙' : '🌞';
});

// Modal Functionality
document.querySelectorAll('.modal-btn').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
