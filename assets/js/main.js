const button = document.querySelectorAll('.trigger');

button.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-id');
        
        // Fechar todas as outras sessões
        document.querySelectorAll('.content').forEach(content => {
            if (content.id !== targetId) {
                content.classList.remove('active');
            }
        });
        
        document.querySelectorAll('.arrow').forEach(arrow => {
            if (arrow.getAttribute('data-id') !== targetId) {
                arrow.classList.remove('rotate');
            }
        });
        
        // Toggle apenas a sessão correspondente
        document.getElementById(targetId).classList.toggle('active');
        document.querySelector(`.arrow[data-id="${targetId}"]`).classList.toggle('rotate');
    });
})