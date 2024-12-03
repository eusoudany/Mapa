function openVideo(url) {
    document.getElementById("video-container").style.display = "block"; // Mostra o contêiner do vídeo
    document.getElementById("video").src = url; // Define o src do iframe com a URL do vídeo
    window.scrollTo({
        top: document.getElementById("video-container").offsetTop, // Rola a página até o vídeo
        behavior: 'smooth' // Rolagem suave
    });
}

function closeVideo() {
    document.getElementById("video-container").style.display = "none"; // Oculta o contêiner do vídeo
    document.getElementById("video").src = ""; // Limpa o src do iframe
}

function redirectToInstagram() {
    window.open ("https://www.instagram.com/mapaculturalifba/", "_blank");
}
