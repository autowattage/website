// At some point, I'd really like to turn this into a separate JSON file, but I've no idea..
const funfacts = [
  "My art is on the <a href=\"https://knowyourmeme.com/photos/2610282-meows-morales\">know your meme website</a>.",
  "I've never broken a bone before. But I once tripped on a gaga pit and sprained my arm so bad I had to wear a cast.",
  "I'm left-handed!",
  "I just lost <a href=\"http://losethegame.com\">the game</a>!",
  "I used to play Tetr.io and osu competitively but was a complete beginner.",
  "I have absurd amounts of luck. I won a lottery with a 0.1% chance and won around $1.75k USD.",
  "The Summer of Making starts now! The premise is simple: build stuff, get stuff!",
  "I once almost crashed into Micheal Reeves' car with a scooter board. If you're reading this, I'm sorry.",
  "I was the first to coin the term RV3/V3R for the Tamagotchi 20th anniversary Connection.",
  "My first fursona was a fox.",
  "I am <a href=\"https://www.bopimo.com/users/bunnyguy\">the 97th user</a> to sign up for <a href=\"https://bopimo.com\">Bopimo</a>, an online 3D platformer. I also own the <a href=\"https://www.bopimo.com/users/foo\">foo user</a>."
]
function funfact() {
  var index;
  do {
    index = Math.floor(Math.random()*funfacts.length);
  } while ( document.getElementById("funfact").innerHTML == funfacts[index] );
  document.getElementById("funfact").innerHTML = funfacts[index];
}
