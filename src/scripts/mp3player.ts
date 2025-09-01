document.addEventListener("DOMContentLoaded", function() {
    const mp3children = document.getElementById("mp3player").querySelectorAll("button") as HTMLButtonElement;

    mp3children[0].onclick = function() {
        console.log("Reversed");
    }

    mp3children[1].onclick = function() {
        console.log("Play");
    }

    mp3children[2].onclick = function() {
        console.log("Skip");
    }
});
