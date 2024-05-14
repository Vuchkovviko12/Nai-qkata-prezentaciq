document.addEventListener('DOMContentLoaded', function() {
    // Заменете [вашето име], [вашата възраст], [името ви], [произход на името], [значение на името], [ваш клас] и [дата] със съответните данни
    document.getElementById('name').textContent = 'Вашето име';
    document.getElementById('nameMeaning').textContent = 'Произход на името';

    // Пренасочване към друга страница след кликване на бутона
    document.getElementById('goToNextPage').addEventListener('click', function() {
        window.location.href = 'nextPage.html'; // Заменете 'nextPage.html' с името на страницата, към която искате да пренасочите
    });
});
document.getElementById('goToNextPage').addEventListener('click', function() {
    window.location.href = 'second-page.html';
});