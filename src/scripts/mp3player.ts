const mp3player = document.getElementById("mp3player") as HTMLElement;
const mp3children = mp3player.querySelectorAll<HTMLButtonElement>("button");
const mp3audio = mp3player.querySelector("audio") as HTMLAudioElement;

interface MusicTrack {
    trackname: string;
    artist: string;
    filepath: string;
}

var currentplaying: number = 0;
var tracklist: MusicTrack[] = [
    {trackname: "Artists Parade 1", artist: "Bob Vessin", filepath: "/audio/index/ap1.mp3"},
    {trackname: "Serenade", artist: "Pop Up!", filepath: "/audio/index/serenade.mp3"},
    {trackname: "Casin", artist: "glue70", filepath: "/audio/index/casin.mp3"},
    {trackname: "You Are Now Legally A Bird", artist: "Pascal Micheal Stiefel", filepath: "/audio/index/yanlab.mp3"},
    {trackname: "Caterpillar Cake Club", artist: "PROTODOME", filepath: "/audio/index/ccc.mp3"},
    {trackname: "Crystal Dolphin", artist: "Engelwood", filepath: "/audio/index/crystaldolphin.mp3"}
];
var tracklist_night: MusicTrack[] = [
    {trackname: "You're Mine", artist: "Carpenter Brut", filepath: "/audio/index/youremine.mp3"},
    {trackname: "READ BY THE BOOK", artist: "boggio, Crablooshi", filepath: "/audio/index/rbtb.mp3"},
    {trackname: "Spunky (Makoto Stage)", artist: "Capcom Sound Team", filepath: "audio/index/spunky.mp3"},
    {trackname: "STAGER", artist: "Ras", filepath: "/audio/index/stager.mp3"},
    {trackname: "song that plays when you encounter a caterpillar", artist: "Cat bus", filepath: "/audio/index/stpwyeac.mp3"},
    {trackname: "Resonance", artist: "Home", filepath: "/audio/index/resonance.mp3"}
];

function updatemusic(): void {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // dark mode
        mp3player.querySelector("marquee").innerHTML = `${tracklist_night[currentplaying].trackname} - ${tracklist_night[currentplaying].artist}`;
        mp3audio.firstElementChild?.setAttribute("src", tracklist_night[currentplaying].filepath);
    } else {
        // light mode
        mp3player.querySelector("marquee").innerHTML = `${tracklist[currentplaying].trackname} - ${tracklist[currentplaying].artist}`;
        mp3audio.firstElementChild?.setAttribute("src", tracklist[currentplaying].filepath);
    }
    mp3audio.load();
}
window.onload = function() {updatemusic();}

mp3children[0].addEventListener('click', () => {
    currentplaying = currentplaying > 0 ? --currentplaying : tracklist.length-1;
    updatemusic();
    mp3audio.play();
});

mp3children[1].addEventListener('click', () => {
    mp3audio.paused ? mp3audio.play() : mp3audio.pause();
});

function mp3next() {
    currentplaying = ++currentplaying % tracklist.length;
    updatemusic();
    mp3audio.play();
}
mp3children[2].addEventListener('click', () => {mp3next()});
mp3audio.onended = function() {mp3next();}
