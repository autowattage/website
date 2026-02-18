// // At some point, I'd really like to turn this into a separate JSON file, but I've no idea..
// const funfacts = [
//   "My art is on the <a href=\"https://knowyourmeme.com/photos/2610282-meows-morales\">know your meme website</a>.",
//   "I've never broken a bone before. But I once tripped on a gaga pit and sprained my arm so bad I had to wear a cast.",
//   "I'm left-handed!",
//   "I just lost <a href=\"http://losethegame.com\">the game</a>!",
//   "I used to play Tetr.io and osu competitively but was a complete beginner.",
//   "I have absurd amounts of luck. I won a lottery with a 0.1% chance and won around $1.75k USD.",
//   "The Summer of Making starts now! The premise is simple: build stuff, get stuff!",
//   "I once almost crashed into Micheal Reeves' car with a scooter board. If you're reading this, I'm sorry.",
//   "I was the first to coin the term RV3/V3R for the Tamagotchi 20th anniversary Connection.",
//   "My first fursona was a fox.",
//   "I am <a href=\"https://www.bopimo.com/users/bunnyguy\">the 97th user</a> to sign up for <a href=\"https://bopimo.com\">Bopimo</a>, an online 3D platformer. I also own the <a href=\"https://www.bopimo.com/users/foo\">foo user</a>."
// ]
// function funfact() {
//   var index;
//   do {
//     index = Math.floor(Math.random()*funfacts.length);
//   } while ( document.getElementById("funfact").innerHTML == funfacts[index] );
//   document.getElementById("funfact").innerHTML = funfacts[index];
// }

// Source - https://stackoverflow.com/a/14698372
// Posted by Oleg, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-17, License - CC BY-SA 3.0

// Wrap the module in a self-executing anonymous function
// to avoid leaking variables into global scope:
var zdex = 1;
(function (document) {
    // Enable ECMAScript 5 strict mode within this function:
    'use strict';

    // Obtain a node list of all elements that have class="draggable":
    var draggable = document.getElementsByTagName("details"),
        draggableCount = draggable.length, // cache the length
        i; // iterator placeholder

    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt) {

        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; // "this" refers to the current element,
                         // let's keep it in cache for later use.

        that.style.zIndex = zdex;
        document.getElementsByTagName("footer")[0].style.zIndex = zdex+1;
        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }

        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            zdex += 1;
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }

    // Now that all the variables and functions are created,
    // we can go on and make the elements draggable by assigning
    // a "startDrag" function to a "mousedown" event that occurs
    // on those elements:
    for (i = 0; i < draggableCount; i += 1) {
        draggable[i].addEventListener('mousedown', startDrag);
    }
}(document));
