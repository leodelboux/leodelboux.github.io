document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Modal de Vídeo ---
    const videoModal = document.getElementById('videoModal');
    const modalFrame = document.getElementById('modalFrame');

    document.querySelectorAll('.work-preview').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data-video');
            // Autoplay ligado para já começar tocando
            modalFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            videoModal.style.display = 'block';
        });
    });

    // --- Lógica do Modal de Contato ---
    const contactModal = document.getElementById('contactModal');

    window.openContactModal = () => {
        contactModal.style.display = 'block';
    }

    window.closeContactModal = () => {
        contactModal.style.display = 'none';
    }

    // --- Lógica do Modal SOBRE MIM (NOVO) ---
    const aboutModal = document.getElementById('aboutModal');

    window.openAboutModal = () => {
        aboutModal.style.display = 'block';
    }

    window.closeAboutModal = () => {
        aboutModal.style.display = 'none';
    }


    // --- Fechamento Global ---

    // Fechar Vídeo (Limpa o SRC para parar o som)
    window.closeVideoModal = () => {
        videoModal.style.display = 'none';
        modalFrame.src = '';
    }

    // Fechar ao clicar fora da janela (fundo escuro)
    window.onclick = (e) => {
        if (e.target == videoModal) closeVideoModal();
        if (e.target == contactModal) closeContactModal();
        if (e.target == aboutModal) closeAboutModal(); // Fecha o Sobre Mim também
    }
});