const getData = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/audio-content.json");
    xhr.send();
    xhr.addEventListener("load" , () => {
        if(xhr.status == 200) {
            let aD = JSON.parse(xhr.responseText)
            // console.log(d);
            main_func(aD);
            
            for (let i = 0; i < aD.length; i++) {
                let li = document.createElement('li');
                li.style.cursor = 'pointer';
                li.innerHTML = aD[i]["name-song"];
                list.appendChild(li);
            }
        }        
    });            
}
getData();

let currentSong = 3;
let song = new Audio(),

btn = document.querySelector('#play'),
img_icon = document.querySelector(".img-play"),
filling = document.querySelector(".progress-bar__filling"),
btn_play = document.querySelector('#play'),
list = document.querySelector('.song-list'),
nextBtn = document.querySelector('#next'),
backBtn = document.querySelector('#back');

window.addEventListener("DOMContentLoaded", playSong);
function main_func(data) {
    let aD = data;
    // console.log( "afefa",aD );
    function playSong() {
        song.src = aD[currentSong]["audio"];
        // console.log(aD[currentSong]["audio"]);
        song.play();
    }
    let vs = document.querySelector(".volume");
    vs.addEventListener("mousemove", function() {
        song.volume =  vs.value / 100;
    });

    // ФУНКЦИЯ ДЛЯ ПРОИГРЫВАНИЯ И ОСТАНОВЛЕНИЯ МУЗЫКИ 
    btn.addEventListener( "click", () => {
        if (song.paused) {
            song.play() 
            img_icon.setAttribute('src', 'pause.svg');
            playSong()
        }
        else {
            song.pause();
            img_icon.setAttribute('src', 'play-button.svg');    
        }   
    });

    // btn.addEventListener("click", playOrPauseSong);
    song.addEventListener("timeupdate", timeUp);

    function timeUp() {
        let place = song.currentTime / song.duration;
        filling.style.width = place * 100 + '%';
        // console.log(place * 100 + '%');
    }

    // nextBtn.addEventListener("click",next); 
   
    nextBtn.addEventListener("click", () => {
        currentSong++;
        console.log("next",aD);
        if(currentSong > aD.length) 
            currentSong = 0;
        song.pause();

    });

    // backBtn.addEventListener("click" prev);
    // function prev() {
    backBtn.addEventListener("click", () => {
        currentSong--;
        if(currentSong <= 0)
            currentSong = aD[-1];
        playSong();
    // console.log(currentSong);
    });
}