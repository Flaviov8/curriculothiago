// Exemplo de interatividade simples:
document.querySelectorAll('section h2').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});