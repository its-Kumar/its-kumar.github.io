// JavaScript for interactivity
console.log('Portfolio website loaded successfully!');

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Save dark mode preference in local storage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

function getThemePreference() {
    return localStorage.getItem('theme');
}

// Ensure dark mode is applied correctly on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getThemePreference();
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('dark-mode');
        });

        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.classList.add('dark-mode');
        });
    } else {
        body.classList.remove('dark-mode');
        document.querySelector('header').classList.remove('dark-mode');
        document.querySelector('footer').classList.remove('dark-mode');

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('dark-mode');
        });

        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.classList.remove('dark-mode');
        });
    }
});

// Update local storage when theme is toggled
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });

    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.classList.toggle('dark-mode');
    });

    const isDarkMode = body.classList.contains('dark-mode');
    saveThemePreference(isDarkMode ? 'dark' : 'light');
});
