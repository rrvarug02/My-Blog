const styleButton = document.getElementById('lightMode')
const container = document.querySelector('.container')
const header = document.querySelector('header')

// Initial mode
let mode = 'light'

// Function to switch between light and dark mode
function switchMode() {
    console.log('called')
    if (mode === 'light') {
        container.setAttribute('class', 'container dark')
        header.classList.add('dark');
        styleButton.textContent = '🌙';   // Moon icon for dark mode
        mode = 'dark'
    } else {
        container.setAttribute('class', 'container')
        header.classList.remove('dark');
        styleButton.textContent = '☀️';   // Sun icon for light mode
        mode = 'light'
    }
}

styleButton.addEventListener('click', switchMode)