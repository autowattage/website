const mp3player = document.getElementById("mp3player");
const mp3children = mp3player.querySelectorAll<HTMLButtonElement>("button");
const mp3audio = mp3player.querySelector("audio");

interface MusicTrack {
    trackname: string;
    artist: string;
    filepath: string;
}

var tracklist: MusicTrack[] = [
    {trackname: "You Are Now Legally A Bird", artist: "Pascal Micheal Stiefel", filepath: "../assets/audio/index/yanlab.mp3"},
    {trackname: "Foo", artist: "Bob", filepath: "foo"},
    {trackname: "Foo", artist: "Bob", filepath: "foo"},
    {trackname: "Foo", artist: "Bob", filepath: "foo"}
];
var currentplaying: number = 0;

function updatemusic(index: number): void {
    mp3player.querySelector("marquee").innerHTML = `${tracklist[index].trackname} - ${tracklist[index].artist}`;
    mp3audio.firstElementChild?.setAttribute("src", tracklist[index].filepath);
}
mp3children[0].onclick = function() {
    currentplaying = currentplaying > 0 ? --currentplaying : tracklist.length-1;
    updatemusic(currentplaying);
}

mp3children[1].onclick = function() {
    mp3audio.paused ? mp3audio.play() : mp3audio.pause();
}

mp3children[2].onclick = function() {
    currentplaying = ++currentplaying % tracklist.length;
    updatemusic(currentplaying);
}
