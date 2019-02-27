// Images boxes

function cheesecake() {
    document.querySelector("div[data-nummer-type='english']").style.backgroundImage = "url('pictures/cheesecake.jpg')";
    document.querySelector("div[data-nummer-type='english']").style.backgroundSize = "100% 100%";
}

function sunday() {
    document.querySelector("div[data-nummer-type='english']").style.backgroundImage = "url('pictures/sundayroastbeef.jpg')";
    document.querySelector("div[data-nummer-type='english']").style.backgroundSize = "100% 100%";
}

function scotch() {
    document.querySelector("div[data-nummer-type='english']").style.backgroundImage = "url('pictures/scotchfriedeggs.jpg')";
    document.querySelector("div[data-nummer-type='english']").style.backgroundSize = "100% 100%";
}

function shepherds() {
    document.querySelector("div[data-nummer-type='english']").style.backgroundImage = "url('pictures/shepherdspie.jpg')";
    document.querySelector("div[data-nummer-type='english']").style.backgroundSize = "100% 100%";
}

function tartetatin() {
    document.querySelector("div[data-nummer-type='french']").style.backgroundImage = "url('pictures/tartetatin.jpg')";
    document.querySelector("div[data-nummer-type='french']").style.backgroundSize = "100% 100%";
}

function quichelorraine() {
    document.querySelector("div[data-nummer-type='french']").style.backgroundImage = "url('pictures/quichelorraine.jpg')";
    document.querySelector("div[data-nummer-type='french']").style.backgroundSize = "100% 100%";
}

function coqauvin() {
    document.querySelector("div[data-nummer-type='french']").style.backgroundImage = "url('pictures/coqauvi.jpg')";
    document.querySelector("div[data-nummer-type='french']").style.backgroundSize = "100% 100%";
}

function fruitsdemer() {
    document.querySelector("div[data-nummer-type='french']").style.backgroundImage = "url('pictures/fruitsdemer.jpg')";
    document.querySelector("div[data-nummer-type='french']").style.backgroundSize = "100% 100%";
}

function bratwurst() {
    document.querySelector("div[data-nummer-type='german']").style.backgroundImage = "url('pictures/bratwurst.jpg')";
    document.querySelector("div[data-nummer-type='german']").style.backgroundSize = "100% 100%";
}

function jagerschnitzel() {
    document.querySelector("div[data-nummer-type='german']").style.backgroundImage = "url('pictures/jagerschnitzel.jpg')";
    document.querySelector("div[data-nummer-type='german']").style.backgroundSize = "100% 100%";
}

function apfelstrudel() {
    document.querySelector("div[data-nummer-type='german']").style.backgroundImage = "url('pictures/apfelstrudel.jpg')";
    document.querySelector("div[data-nummer-type='german']").style.backgroundSize = "100% 100%";
}

function pretzel() {
    document.querySelector("div[data-nummer-type='german']").style.backgroundImage = "url('pictures/pretzel.jpg')";
    document.querySelector("div[data-nummer-type='german']").style.backgroundSize = "100% 100%";
}

function sangria() {
    document.querySelector("div[data-nummer-type='spain']").style.backgroundImage = "url('pictures/sangria.jpg')";
    document.querySelector("div[data-nummer-type='spain']").style.backgroundSize = "100% 100%";
}

function pancontomate() {
    document.querySelector("div[data-nummer-type='spain']").style.backgroundImage = "url('pictures/pancontomate.jpg')";
    document.querySelector("div[data-nummer-type='spain']").style.backgroundSize = "100% 100%";
}

function paellapollo() {
    document.querySelector("div[data-nummer-type='spain']").style.backgroundImage = "url('pictures/paellapollo.jpg')";
    document.querySelector("div[data-nummer-type='spain']").style.backgroundSize = "100% 100%";
}

function cremacatalana() {
    document.querySelector("div[data-nummer-type='spain']").style.backgroundImage = "url('pictures/cremacatalana.jpg')";
    document.querySelector("div[data-nummer-type='spain']").style.backgroundSize = "100% 100%";
}

// following mouse
window.addEventListener('mousemove', function (event) {
  var x = event.clientX/(window.innerWidth)*45-22.5;
  var y = event.clientY/(window.innerHeight)*45-22.5;

  document.documentElement.style.setProperty('--x', -x + 'deg');
  document.documentElement.style.setProperty('--y', y + 'deg');
})
