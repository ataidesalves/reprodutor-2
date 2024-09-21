// Função para trocar a música
function playMusic(musicFile) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = musicFile;
    audioPlayer.play();
}

// Opcional: Reproduz a primeira música ao carregar a página
window.onload = function() {
    playMusic('./Tiro de 12 .mp3');
};
