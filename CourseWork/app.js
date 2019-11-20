let btn = document.querySelector('#play'),
    img_icon = document.querySelector(".img-play"),
    filling = document.querySelector(".progress-bar__filling"),
    songs = [
        "trek_1.mp3",
        "ace-of-base_-_happy-nation.mp3", "duke-dumont_-_ocean-drive.mp3"
    ],
    btn_play = document.querySelector('#play'),
    song = new Audio(),
    currentSong = 0;

window.onload = playSong;

function playSong() {
    song.src = songs[currentSong];
    song.play();
    // alert(song);
}

function playOrPauseSong() {
    if (song.paused) {
        song.play();
        img_icon.setAttribute('src', 'pause.svg');
        // img_icon.style.transition = '.5s';
    } else {
        song.pause();
        img_icon.setAttribute('src', 'play-button.svg');
        // img_icon.style.transition = '5s';
    }
}
btn.onclick = playOrPauseSong;

song.addEventListener("timeupdate", timeUp);

function timeUp() {
    let place = song.currentTime / song.duration;
    filling.style.width = place * 100 + '%';
    console.log(place * 100+'%');
}