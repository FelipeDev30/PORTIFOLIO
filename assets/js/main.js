const button = document.querySelector('.trigger');

button.addEventListener('click', () => {
    document.querySelector('.content').classList.toggle('active');
    document.querySelector('.arrow').classList.toggle('rotate');
});