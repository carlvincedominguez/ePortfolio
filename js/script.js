// Dark/Light Mode Toggle
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = "Toggle Theme";
toggleThemeButton.style.cssText = "position: fixed; top: 20px; right: 20px; padding: 10px; z-index: 1000;";
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Optional: Save mode to localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

toggleThemeButton.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});