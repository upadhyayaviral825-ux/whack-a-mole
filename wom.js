let started = false;
let paused = false;
let time = 30;
let count = 0;

let mole = document.querySelector("#mole");
let holes = document.querySelectorAll(".hole");

let startButton = document.querySelector("#start");
let pauseIcon = document.querySelector("#pauseIcon");

mole.addEventListener("click", function() {

    if (started && !paused) {
        count++;
        document.getElementById("score").textContent = count;
    }

});


let timer = setInterval(function() {

    if (started && !paused) {

        time--;

        document.getElementById("time").textContent = time;

        if (time === 0) {
            clearInterval(timer);
            clearInterval(moleTimer);
        }

    }

}, 1000);


let moleTimer = setInterval(function() {

    if (started && !paused) {

        let randomIndex = Math.floor(Math.random() * holes.length);

        holes[randomIndex].appendChild(mole);

    }

}, 1000);


startButton.addEventListener("click", function() {

    started = true;

    startButton.classList.add("hide");

});


document.addEventListener("keydown", function(event) {

    if (event.code === "Space") {

        event.preventDefault();

        if (!started || time === 0) {
            return;
        }

        paused = !paused;

        if (paused) {
            pauseIcon.textContent = "⏸️";
        } else {
            pauseIcon.textContent = "▶️";
        }

        pauseIcon.classList.remove("show");

        void pauseIcon.offsetWidth;

        pauseIcon.classList.add("show");

    }

});