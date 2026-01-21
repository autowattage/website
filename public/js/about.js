// At some point, I'd really like to turn this into a separate JSON file, but I've no idea..
const funfacts = [
  "My art is on the <a href=\"https://knowyourmeme.com/photos/2610282-meows-morales\">know your meme website</a>",
  "I've never broken a bone before",
  "I'm left-handed",
  "I just lost the game",
  "I used to play Tetr.io competitively",
  "The Summer of Making starts now! The premise is simple: build stuff, get stuff!"
  "I once almost crashed into Micheal Reeves' car with a scooter board",
  "I was the first to coin the term RV3/V3R for the Tamagotchi 20th anniversary Connection"
]
function funfact() {
  document.getElementById("funfact").innerHTML = funfacts[Math.floor(Math.random()*funfacts.length)];
}
