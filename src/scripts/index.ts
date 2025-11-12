const root = document.querySelector(":root");
const accentlist: string[] = ["--accent-1", "--accent-2", "--accent-3"];
function setpalette(i: string): void {
  console.log("Yay");
  root.classList = i;
}

function setsystem(i: number): void {
  console.log("Yaycool");
  root.style.setProperty('--accent-current', 'var(' + accentlist[i] + ')');
}

document.getElementById("palettecymk")!.addEventListener('click', function() { setpalette('cmyk'); });
document.getElementById("paletteb4g")!.addEventListener('click', function() { setpalette('b4g'); });
document.getElementById("syshome")!.addEventListener('click', function() { setsystem(0); });
document.getElementById("sysart")!.addEventListener('click', function() { setsystem(1); });
document.getElementById("syscs")!.addEventListener('click', function() { setsystem(2); });
