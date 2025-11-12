const root = document.querySelector(":root");
const accentlist: string[] = ["--accent-1", "--accent-2", "--accent-3"];
const cmykbglist: string[] = ['url("/src/assets/cmyk-tile-1.png")', 'url("/src/assets/cmyk-tile-2.png")', 'url("/src/assets/cmyk-tile-3.png")',]
function setpalette(i: string): void {
  console.log("Yay");
  root.classList = i;
}

function setsystem(i: number): void {
  console.log("Yaycool");
  root.style.setProperty('--accent-current', 'var(' + accentlist[i] + ')');
  if (root.className == "cmyk") {
    root.style.setProperty('--bg-current', cmykbglist[i]);
  }
}

document.getElementById("palettecymk")!.addEventListener('click', function() { setpalette('cmyk'); });
document.getElementById("paletteb4g")!.addEventListener('click', function() { setpalette('b4g'); });
document.getElementById("syshome")!.addEventListener('click', function() { setsystem(0); });
document.getElementById("sysart")!.addEventListener('click', function() { setsystem(1); });
document.getElementById("syscs")!.addEventListener('click', function() { setsystem(2); });
