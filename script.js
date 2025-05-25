document.getElementById('toggle').addEventListener('click', function() {
    document.getElementById('login-container').style.transform = 'rotateY(180deg)';
    document.getElementById('register-container').style.transform = 'rotateY(0deg)';
});

document.getElementById('toggle-back').addEventListener('click', function() {
    document.getElementById('login-container').style.transform = 'rotateY(0deg)';
    document.getElementById('register-container').style.transform = 'rotateY(180deg)';
});
const toggleThemeButton = document.getElementById('toggleTheme');
const themeIcon = document.getElementById('themeIcon');

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = 'moon.svg'; // Altere para o caminho da imagem da lua
        themeIcon.alt = 'Tema Escuro';
    } else {
        themeIcon.src = 'sun.svg'; // Altere para o caminho da imagem do sol
        themeIcon.alt = 'Tema Claro';
    }
});
