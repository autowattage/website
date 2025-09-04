const mp3player = document.getElementById("mp3player") as HTMLElement;
const mp3children = mp3player.querySelectorAll<HTMLButtonElement>("button");
const mp3audio = mp3player.querySelector("audio") as HTMLAudioElement;

interface MusicTrack {
    trackname: string;
    artist: string;
    filepath: string;
}

var tracklist: MusicTrack[] = [
    {trackname: "Serenade", artist: "Pop Up!", filepath: "/src/assets/audio/index/serenade.mp3"},
    {trackname: "Casin", artist: "glue70", filepath: "/src/assets/audio/index/casin.mp3"},
    {trackname: "You Are Now Legally A Bird", artist: "Pascal Micheal Stiefel", filepath: "/src/assets/audio/index/yanlab.mp3"},
    {trackname: "Caterpillar Cake Club", artist: "PROTODOME", filepath: "/src/assets/audio/index/ccc.mp3"},
    {trackname: "Crystal Dolphin", artist: "Engelwood", filepath: "/src/assets/audio/index/crystaldolphin.mp3"},
    {trackname: "Artists Parade 1", artist: "Bob Vessin", filepath: "/src/assets/audio/index/ap1.mp3"}
];
var tracklist_night: MusicTrack[] = [
    {trackname: "", artist: "", filepath: ""}
];

var currentplaying: number = 0;

function updatemusic(): void {
    mp3player.querySelector("marquee").innerHTML = `${tracklist[currentplaying].trackname} - ${tracklist[currentplaying].artist}`;
    mp3audio.firstElementChild?.setAttribute("src", tracklist[currentplaying].filepath);
    mp3audio.load();
}
mp3children[0].addEventListener('click', () => {
    currentplaying = currentplaying > 0 ? --currentplaying : tracklist.length-1;
    updatemusic();
});
mp3children[1].addEventListener('click', () => {
    mp3audio.paused ? mp3audio.play() : mp3audio.pause();
});
mp3children[2].addEventListener('click', () => {
    currentplaying = ++currentplaying % tracklist.length;
    updatemusic();
});
window.onload = function() {updatemusic();}
